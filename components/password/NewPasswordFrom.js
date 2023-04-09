import { useFormik } from "formik";
import { StyleSheet, View } from "react-native";
import { confirmPasswordReset } from "../../firebase";
import { validationSchema } from "../../schema/newPassword";
import { Button } from "../commons/Button";
import { TextInput } from "../commons/TextInput";

export const NewPasswordForm = ({ navigation, route }) => {
  const { code } = route.params;

  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const onSubmit = async (values) => {
    try {
      await confirmPasswordReset(code, values.newPassword);
      navigation.push("HomeScreen");
    } catch (error) {
      console.log(error);
      alert("Failed to reset password. Please try again.");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        label={"Enter New Password"}
        autoCapitalize={"none"}
        autoCorrect={false}
        secureTextEntry={true}
        textContentType={"password"}
        value={formik.values.newPassword}
        onChangeText={formik.handleChange("newPassword")}
        onBlur={formik.handleBlur("newPassword")}
        error={formik.touched.newPassword && formik.errors.newPassword}
      />
      <TextInput
        label={"Confirm Password"}
        autoCapitalize={"none"}
        autoCorrect={false}
        secureTextEntry={true}
        textContentType={"password"}
        value={formik.values.confirmPassword}
        onChangeText={formik.handleChange("confirmPassword")}
        onBlur={formik.handleBlur("confirmPassword")}
        error={formik.touched.confirmPassword && formik.errors.confirmPassword}
      />
      <Button
        label={"Submit"}
        icon={"send"}
        action={formik.handleSubmit}
        disabled={!formik.isValid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
});
