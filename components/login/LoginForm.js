import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "react-native-elements";
import { TextInput as RNPTextInput } from "react-native-paper";
import { theme } from "../../utils/constant";
import { Button } from "../commons/Button";
import { TextInput } from "../commons/TextInput";

export const LoginForm = ({ navigation }) => {
  const { colors } = theme;
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
      <View style={styles.forgotPasswordContainer(colors)}>
        <Pressable onPress={() => navigation.push("ForgotPasswordScreen")}>
          <Text style={styles.forgotPassword(colors)}>Forgot password?</Text>
        </Pressable>
      </View>
      <Button
        label={"Log In"}
        icon={"login"}
        action={() => navigation.push("HomeScreen")}
      />
      <Divider
        width={1}
        orientation={"vertical"}
      />
      <View style={styles.containerSignup}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.push("SignUpScreen")}>
          <Text style={styles.signUp(colors)}>Sign up!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  forgotPasswordContainer: ({ flax }) => ({
    alignItems: "flex-start",
    marginTop: 10,
    marginBottom: 30,
    color: flax,
  }),
  containerSignup: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginVertical: 30,
  },
  signUp: ({ flax }) => ({
    color: flax,
  }),
  forgotPassword: ({ flax }) => ({
    color: flax,
  }),
});
