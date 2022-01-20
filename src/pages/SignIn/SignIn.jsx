import { SignInComponent, SignUp } from "../../components";
import { SignInContainer } from "./SignInContainer";
export const SignIn = () => {
  return (
    <SignInContainer>
      <SignInComponent />
      <SignUp />
    </SignInContainer>
  );
};
