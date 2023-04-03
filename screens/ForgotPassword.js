import { LayoutForm } from "../components/commons/LayoutForm";
import { ForgotPasswordForm } from "../components/forgot-password-form/ForgotPasswordForm";

export const ForgotPassword = ({ navigation }) => {
  return (
    <LayoutForm>
      <ForgotPasswordForm navigation={navigation} />
    </LayoutForm>
  );
};
