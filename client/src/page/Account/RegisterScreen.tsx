import { useRegisterMutation } from "@/api/account/register";
import { Button, Stack, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

const RegisterScreen = () => {
  const naviagte = useNavigate();

  const onSuccess = useCallback(() => {
    naviagte("/account/login", { replace: true });
  }, []);

  const { mutate } = useRegisterMutation(onSuccess);

  return (
    <Stack alignItems="center">
      <h1>Rehister</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={mutate}
      >
        {(formik) => (
          <Form style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Field
              as={TextField}
              name="name"
              label="name"
              variant="outlined"
              fullWidth
              error={!!formik.touched.name && !!formik.errors.name}
              helperText={formik.touched.name && formik.errors.name}
            />
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

export default RegisterScreen;
