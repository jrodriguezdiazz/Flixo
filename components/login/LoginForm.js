import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "react-native-elements";
import { TextInput as RNPTextInput } from "react-native-paper";
import { Button } from "../commons/Button";
import { TextInput } from "../commons/TextInput";

export const LoginForm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput
        label={"Username"}
        autoCapitalize={"none"}
        keyboardType={"email-address"}
        textContent={"emailAddress"}
        autoFocus={true}
      />
      <TextInput
        label={"Password"}
        autoCapitalize={"none"}
        autoCorrect={false}
        secureTextEntry={true}
        textContentType={"password"}
        right={<RNPTextInput.Icon icon="eye" />}
      />
      <View style={styles.forgotPasswordContainer}>
        <Pressable onPress={() => navigation.push("ForgotPasswordScreen")}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </Pressable>
      </View>
      <Button
        label={"Log In"}
        icon={"login"}
        action={() => navigation.push("VerificationScreen")}
      />
      <Divider
        width={1}
        orientation={"vertical"}
      />
      <View style={styles.containerSingup}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.push("SingUpScreen")}>
          <Text style={styles.singUp}>Sign up!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  inputContainer: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#fafafa",
    marginBottom: 10,
    borderWidth: 0.3,
  },
  button: {
    backgroundColor: "#f5d40f",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 42,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "600",
    color: "#ffffff",
    fontSize: 20,
  },
  forgotPasswordContainer: {
    alignItems: "flex-start",
    marginTop: 10,
    marginBottom: 30,
    color: "#f5d40f",
  },
  containerSingup: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginVertical: 30,
  },
  singUp: {
    color: "#f5d40f",
  },
  forgotPassword: {
    color: "#f5d40f",
  },
});
