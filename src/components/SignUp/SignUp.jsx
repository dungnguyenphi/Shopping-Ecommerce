import { createUserWithEmailAndPassword } from "firebase/auth";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { auth, createUserProfileDocument } from "../../FireBase/FireBaseUtil";
import { FormInput } from "../FormInput/FormInput";
import { CustomButton } from "../CustomButton/CustomButton";
import { SignUpContainer, Title } from "./SignUpStyles";

export const SignUp = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });
  const handleSubmit = async (values, { resetForm }) => {
    const { email, displayName, password } = values;
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      createUserProfileDocument(user, { displayName });
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SignUpContainer>
      <Title>I do not have an account</Title>
      <span>Sign up with your email and password</span>
      <Formik
        initialValues={{
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <FormInput
              name="displayName"
              type="displayName"
              label="Display Name"
              value={values.displayName}
            />
            <FormInput
              name="email"
              type="email"
              label="Email"
              value={values.email}
            />
            <FormInput
              name="password"
              type="password"
              label="Password"
              value={values.password}
            />
            <FormInput
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              value={values.confirmPassword}
            />
            <CustomButton type="submit">Sign Up</CustomButton>
          </Form>
        )}
      </Formik>
    </SignUpContainer>
  );
};
