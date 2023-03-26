import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "react-native-elements";

export const LoginForm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Phone number, username or email"}
          autoCapitalize={"none"}
          keyboardType={"email-address"}
          textContent={"emailAddress"}
          autoFocus={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Password"}
          autoCapitalize={"none"}
          autoCorrect={false}
          secureTextEntry={true}
          textContentType={"password"}
        />
      </View>
      <View style={styles.forgotPasswordContainer}>
        <Text>Forgot password?</Text>
      </View>
      <Pressable
        titleSize={20}
        style={styles.button}
        onPress={() => navigation.push("HomeScreen")}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
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
    marginVertical: 30,
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
});
