import { LayoutForm } from "../components/commons/LayoutForm";
import { NewPasswordFrom } from "../components/new-password/NewPasswordFrom";

export const NewPassword = ({ navigation }) => {
  return (
    <LayoutForm>
      <NewPasswordFrom navigation={navigation} />
    </LayoutForm>
  );
};
