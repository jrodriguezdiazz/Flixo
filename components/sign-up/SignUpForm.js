import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { Button } from "../commons/Button";
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
            right={<RNPTextInput.Icon icon="eye" />}
          />
          <TextInput label="First Name" />
          <TextInput label="Last Name" />
          <TextInput label="Email" />
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
        <Button
          label={"Agree & Join"}
          icon={"login"}
          action={() => navigation.push("HomeScreen")}
        />
      </View>
    </ScrollView>
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
  calendar: {
    marginTop: 10,
  },
});
