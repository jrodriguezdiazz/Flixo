import { useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "../components/commons/Button";
import { Calendar } from "../components/commons/Calendar";
import { LayoutForm } from "../components/commons/LayoutForm";
import { TextInput } from "../components/commons/TextInput";
import { TextInputPhoneNumber } from "../components/commons/TextInputPhoneNumber";
import { createUser } from "../database/user";
import { getMinimumRegistrationAge } from "../utils";
import { theme } from "../utils/constant";

export const SignUp = ({ navigation }) => {
  const [userInformation, setUserInformation] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    username: "",
    phoneNumber: "",
    birthday: getMinimumRegistrationAge(),
  });

  const onHandleSignup = () => {
    const { email, password } = userInformation;
    if (email !== "" && password !== "") {
      createUser(userInformation)
        .then(() => console.log("Signup success"))
        .catch((err) => {
          console.log(err);
          Alert.alert("Login error", err.message);
        });
    }
  };

  const onHandleChange = (value, field) => {
    setUserInformation((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <ScrollView>
      <LayoutForm>
        <SafeAreaView>
          <View>
            <TextInput
              label="Username"
              autofocus={true}
              name={"username"}
              value={userInformation.username}
              onChangeText={(value) => onHandleChange(value, "username")}
            />
            <TextInput
              autoCorrect={false}
              label="Password"
              secureTextEntry={true}
              name={"password"}
              value={userInformation.password}
              onChangeText={(value) => onHandleChange(value, "password")}
            />
            <TextInput
              label="First Name"
              name={"firstName"}
              value={userInformation.firstName}
              onChangeText={(value) => onHandleChange(value, "firstName")}
            />
            <TextInput
              label="Last Name"
              name={"lastName"}
              value={userInformation.lastName}
              onChangeText={(value) => onHandleChange(value, "lastName")}
            />
            <TextInput
              label="Email"
              name={"email"}
              autoCorrect={false}
              value={userInformation.email}
              onChangeText={(value) => onHandleChange(value, "email")}
            />
            <TextInputPhoneNumber
              label="Pone Number"
              name={"phoneNumber"}
              value={userInformation.phoneNumber}
              onChangeText={(value) => onHandleChange(value, "phoneNumber")}
            />
            <Calendar
              style={styles.calendar}
              name={"birthday"}
              value={userInformation.birthday}
              onChangeText={(value) => onHandleChange(value, "birthday")}
            />
          </View>
          <Button
            label={"Agree & Join"}
            icon={"login"}
            action={onHandleSignup}
          />
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Text style={{ color: "gray", fontWeight: "600", fontSize: 14 }}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text
                style={{
                  color: theme.colors.sunflower,
                  fontWeight: "600",
                  fontSize: 14,
                }}
              >
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LayoutForm>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "orange",
    alignSelf: "center",
    paddingBottom: 24,
  },
  input: {
    backgroundColor: "#f6f7fb",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: "cover",
  },
  whiteSheet: {
    width: "100%",
    height: "75%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: "#f57c00",
    height: 58,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});
