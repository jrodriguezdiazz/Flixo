import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export const SingUpForm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"User name"}
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
        <Text>8 or more characters</Text>
      </View>
      <Pressable
        titleSize={20}
        style={styles.button}
        onPress={() => navigation.push("HomeScreen")}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
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
