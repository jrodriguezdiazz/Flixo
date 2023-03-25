import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export const SingUpFormSecondPart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"First name"}
          autoCapitalize={"none"}
          keyboardType={"email-address"}
          textContent={"emailAddress"}
          autoFocus={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Last name"}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Phone number"}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Birthday"}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
      </View>
      <View style={styles.forgotPasswordContainer}>
        <Text>
          By clicking Agree & Join, you agree to the Flixo User Agreement,
          Privacy Policy, and Cookie Policy. For phone numbers signups we will
          send a verification code via SMS.
        </Text>
      </View>
      <Pressable
        titleSize={20}
        style={styles.button}
        onPress={() => console.log("CLICK")}
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
