import { useLoginMutation } from "@/api/account/login";
import { getUserInfo } from "@/api/account/user";
import { LoginResponse } from "@/type/account/loginType";
import { Button, Stack, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginScreen = () => {
  const naviagte = useNavigate();
  const [userId, setUserId] = useState<number>(0);

  const onSuccess = useCallback((data: LoginResponse) => {
    setUserId(data.id);
  }, []);

  const navigateToUserInfo = useCallback(
    () => naviagte(`/user/${userId}`, { replace: true }),
    [naviagte, userId]
  );

  const { isLoading, isSuccess } = getUserInfo(userId);
  const { mutate } = useLoginMutation(onSuccess);

  useEffect(() => {
    if (isSuccess) {
      navigateToUserInfo();
    }
  }, [isSuccess, navigateToUserInfo]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Stack alignItems="center">
      <h1>Login</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={mutate}
      >
        {(formik) => (
          <Form style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Field
              as={TextField}
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              error={!!formik.touched.email && !!formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
            />
            <Field
              as={TextField}
              name="password"
              label="Password"
              variant="outlined"
              fullWidth
              error={!!formik.touched.password && !!formik.errors.password}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!formik.isValid}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};

export default LoginScreen;
