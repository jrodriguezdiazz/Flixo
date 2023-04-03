import { LayoutForm } from "../components/commons/LayoutForm";
import { SignUpForm } from "../components/sign-up/SignUpForm";

export const SignUp = ({ navigation }) => {
  return (
    <LayoutForm>
      <SignUpForm navigation={navigation} />
    </LayoutForm>
  );
};
