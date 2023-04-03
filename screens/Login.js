import { LayoutForm } from "../components/commons/LayoutForm";
import { LoginForm } from "../components/login/LoginForm";

export const Login = ({ navigation }) => {
  return (
    <LayoutForm>
      <LoginForm navigation={navigation} />
    </LayoutForm>
  );
};
