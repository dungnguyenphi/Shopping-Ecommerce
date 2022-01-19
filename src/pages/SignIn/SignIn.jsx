import { SignInComponent, SignUp } from "../../components";
import "./styles.scss";
export const SignIn = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignInComponent />
      <SignUp />
    </div>
  );
};
