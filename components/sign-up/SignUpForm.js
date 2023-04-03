import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Calendar } from "../commons/Calendar";
import { TextInput } from "../commons/TextInput";
import { TextInputPhoneNumber } from "../commons/TextInputPhoneNumber";

export const SignUpForm = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <TextInput
            label="Username"
            autofocus={true}
          />
          <TextInput
            label="Password"
            secureTextEntry={true}
          />
          <TextInput label="First Name" />
          <TextInput label="Last Name" />
          <View></View>
          <TextInputPhoneNumber label="Pone Number" />
          <Calendar style={styles.calendar} />
        </View>
        <View style={styles.disclaimer}>
          <Text>
            By clicking Agree & Join, you agree to the Flixo User Agreement,
            Privacy Policy, and Cookie Policy. For phone numbers signups we will
            send a verification code via SMS.
          </Text>
        </View>
        <Pressable
          titleSize={20}
          style={styles.button}
          onPress={() => navigation.push("HomeScreen")}
        >
          <Text style={styles.buttonText}>Agree & Join</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginBottom: 20,
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
  disclaimer: {
    alignItems: "flex-start",
    marginVertical: 30,
  },
  calendar: {
    marginTop: 10,
  },
});
