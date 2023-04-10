import { Formik } from "formik";
import { StyleSheet, Text, View } from "react-native";
// import { sendVerificationEmail } from "../../firebase";
import { forgotPassword } from "../../schema/forgotPassword";
import { Button } from "../commons/Button";
import { TextInput } from "../commons/TextInput";

export const ForgotPasswordForm = ({ navigation }) => {
  const handleSendEmail = async ({ email }) => {
    try {
      console.log(email);
      // await sendVerificationEmail(email);
      navigation.push("VerificationScreen");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        onSubmit={(values) => handleSendEmail(values)}
        validationSchema={forgotPassword}
        validateOnMount={true}
      >
        {({ handleBlur, handleChange, handleSubmit, values }) => (
          <>
            <View>
              <TextInput
                label={"Email"}
                autoCapitalize={"none"}
                keyboardType={"email-address"}
                textContent={"emailAddress"}
                autoFocus={true}
                name={"email"}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View style={styles.disclaimer}>
              <Text>You will receive a verification code in your email</Text>
            </View>
            <Button
              label={"Send"}
              icon={"send-outline"}
              action={handleSubmit}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginBottom: 20,
  },
  disclaimer: {
    alignItems: "flex-start",
    marginVertical: 30,
  },
});
