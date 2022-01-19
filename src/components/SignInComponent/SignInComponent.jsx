import { Formik, Form } from "formik";
import "./styles.scss";
import * as Yup from "yup";
import { FormInput } from "../FormInput/FormInput";
import { CustomButton } from "../CustomButton/CustomButton";
import { auth, signInWithGoogle } from "../../FireBase/FireBaseUtil";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const SignInComponent = () => {
  const navigate = useNavigate();
  const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
  });
  const handleSubmit = async (values, { resetForm }) => {
    const { email, password } = values;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      resetForm();
      navigate("/");
    } catch (error) {
      console.error("rer", error);
    }
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
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
            <div className="buttons">
              <CustomButton type="submit">Sign In</CustomButton>
              <CustomButton
                onClick={signInWithGoogle}
                isGoogleSignIn
                type="button"
              >
                Sign In With Google
              </CustomButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
