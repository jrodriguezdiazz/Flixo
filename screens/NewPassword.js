import { LayoutForm } from "../components/commons/LayoutForm";
import { NewPasswordForm } from "../components/password/NewPasswordFrom";

export const NewPassword = ({ navigation }) => {
  return (
    <LayoutForm>
      <NewPasswordForm navigation={navigation} />
    </LayoutForm>
  );
};
