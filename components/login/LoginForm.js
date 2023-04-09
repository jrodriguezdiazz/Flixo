import { Formik } from "formik";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "react-native-elements";
import { loginSchema } from "../../schema/login";
import { useAuthStore } from "../../stores/useAuthStore";
import { theme } from "../../utils/constant";
import { Button } from "../commons/Button";
import { Loading } from "../commons/Loading";
import { TextInput } from "../commons/TextInput";
import { Alert } from "./Alert";

export const LoginForm = ({ navigation }) => {
  const { error, loading, login, user } = useAuthStore((state) => ({
    user: state.user,
    error: state.error,
    loading: state.loading,
    login: state.login,
    logout: state.logout,
  }));
  const handleLogin = async (values) => {
    await login(values);
    if (user) navigation.push("HomeScreen");
  };

  const { colors } = theme;
  return (
    <>
      <Formik
        initialValues={{
          password: "",
          username: "",
        }}
        onSubmit={(values) => handleLogin(values)}
        validationSchema={loginSchema}
        validateOnMount={true}
      >
        {({ handleBlur, handleChange, handleSubmit, values, isValid }) => (
          <View style={styles.container}>
            <TextInput
              label={"Username"}
              autoCapitalize={"none"}
              keyboardType={"email-address"}
              textContent={"emailAddress"}
              autoFocus={true}
              name={"username"}
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
            />
            <TextInput
              label={"Password"}
              autoCapitalize={"none"}
              autoCorrect={false}
              secureTextEntry={true}
              textContentType={"password"}
              name={"password"}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            <View style={styles.forgotPasswordContainer(colors)}>
              <Pressable
                onPress={() => navigation.push("ForgotPasswordScreen")}
              >
                <Text style={styles.forgotPassword(colors)}>
                  Forgot password?
                </Text>
              </Pressable>
            </View>
            <Button
              label={"Log In"}
              icon={"login"}
              action={handleSubmit}
              disabled={!isValid}
              isValid={isValid}
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
        )}
      </Formik>
      {error && Alert({ navigation })}
      {loading && <Loading />}
    </>
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
