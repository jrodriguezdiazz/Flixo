import { ScrollView } from "react-native";
import { LayoutForm } from "../components/commons/LayoutForm";
import { SignUpForm } from "../components/sign-up/SignUpForm";

export const SignUp = ({ navigation }) => {
  return (
    <ScrollView>
      <LayoutForm>
        <SignUpForm navigation={navigation} />
      </LayoutForm>
    </ScrollView>
  );
};
