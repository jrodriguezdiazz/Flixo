import { StyleSheet, Text, View } from "react-native";
import { Button } from "../commons/Button";
import { TextInput } from "../commons/TextInput";

export const ForgotPasswordForm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          label="Email"
          autofocus={true}
        />
      </View>
      <View style={styles.disclaimer}>
        <Text>You will receive a verification code in your email</Text>
      </View>
      <Button
        label={"Send"}
        icon={"send-outline"}
        action={() => navigation.push("VerificationScreen")}
      />
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
