import { LayoutForm } from "../components/commons/LayoutForm";
import { VerificationForm } from "../components/verification/VerificationForm";

export const Verification = ({ navigation }) => {
  return (
    <LayoutForm>
      <VerificationForm navigation={navigation} />
    </LayoutForm>
  );
};
