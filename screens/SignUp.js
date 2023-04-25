import { Formik } from "formik";
import React from "react";
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
import { signUpSchema } from "../schema/signUp";
import { getMinimumRegistrationAge } from "../utils";
import { theme } from "../utils/constant";

export const SignUp = ({ navigation }) => {
  const onHandleSignup = async (values) => {
    try {
      await createUser(values);
      console.log("Signup success");
    } catch (err) {
      console.log(err);
      Alert.alert("Login error", err.message);
    }
  };

  return (
    <ScrollView>
      <LayoutForm>
        <SafeAreaView>
          <Formik
            initialValues={{
              email: "",
              password: "",
              firstName: "",
              lastName: "",
              birthday: getMinimumRegistrationAge(),
              username: "",
              phoneNumber: "",
            }}
            validationSchema={signUpSchema}
            onSubmit={onHandleSignup}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <TextInput
                  label="Username"
                  autofocus={true}
                  name="username"
                  value={values.username}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  error={touched.username && errors.username}
                />
                <TextInput
                  autoCorrect={false}
                  label="Password"
                  secureTextEntry={true}
                  name="password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={touched.password && errors.password}
                />
                <TextInput
                  label="First Name"
                  name="firstName"
                  value={values.firstName}
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  error={touched.firstName && errors.firstName}
                />
                <TextInput
                  label="Last Name"
                  name="lastName"
                  value={values.lastName}
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  error={touched.lastName && errors.lastName}
                />
                <TextInput
                  label="Email"
                  name="email"
                  autoCorrect={false}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={touched.email && errors.email}
                />
                <TextInputPhoneNumber
                  label="Phone Number"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChangeText={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  error={touched.phoneNumber && errors.phoneNumber}
                />
                <Calendar
                  style={styles.calendar}
                  name="birthday"
                  value={values.birthday}
                  onChangeText={handleChange("birthday")}
                  onBlur={handleBlur("birthday")}
                  error={touched.birthday && errors.birthday}
                />
                <Button
                  label="Agree & Join"
                  icon="login"
                  action={handleSubmit}
                />
              </View>
            )}
          </Formik>
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
