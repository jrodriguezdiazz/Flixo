import { signInWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "../components/commons/Button";
import { LayoutForm } from "../components/commons/LayoutForm";
import { TextInput } from "../components/commons/TextInput";
import { auth } from "../database/firebase";
import { loginSchema } from "../schema/login";
import { theme } from "../utils/constant";

export const Login = ({ navigation }) => {
  const onHandleLogin = (values) => {
    const { email, password } = values;
    signInWithEmailAndPassword(auth, email, password)
      .then(() => console.log("Login success"))
      .catch((err) => Alert.alert("Login error", err.message));
  };

  return (
    <LayoutForm>
      <SafeAreaView>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={onHandleLogin}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              <TextInput
                placeholder="Enter email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                errorMessage={errors.email}
              />
              <TextInput
                placeholder="Enter password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                errorMessage={errors.password}
              />
              <Button
                label={"Log In"}
                icon={"login"}
                action={handleSubmit}
              />

              <View style={styles.container}>
                <View>
                  <Text
                    style={{ color: "gray", fontWeight: "600", fontSize: 14 }}
                  >
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Don't have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("SignUpScreen")}
                  >
                    <Text
                      style={{
                        color: theme.colors.sunflower,
                        fontWeight: "600",
                        fontSize: 14,
                      }}
                    >
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text
                    style={{ color: "gray", fontWeight: "600", fontSize: 14 }}
                  >
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Did you forget your password?{" "}
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("ForgotPasswordScreen")}
                  >
                    <Text
                      style={{
                        color: theme.colors.sunflower,
                        fontWeight: "600",
                        fontSize: 14,
                      }}
                    >
                      Reset
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        </Formik>
      </SafeAreaView>
    </LayoutForm>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    marginTop: 20,
  },
});
