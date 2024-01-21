import { Button, Stack, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { login } from "../../api/login";
import { LoginRequest } from "../../type/loginType";
import useUserStore from "../../zustand/user";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginScreen = () => {
  const { setUser, user } = useUserStore();

  const handleLogin = async (value: LoginRequest) => {
    const result = await login(value);
    setUser(result.data);
  };

  console.log(user);

  return (
    <Stack alignItems="center">
      <h1>Login</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {(formik) => (
          <Form style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Field
              as={TextField}
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              error={formik.touched.email && formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
            />
            <Field
              as={TextField}
              name="password"
              label="Password"
              variant="outlined"
              fullWidth
              error={formik.touched.password && formik.errors.password}
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
