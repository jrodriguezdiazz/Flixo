import { Formik } from "formik";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "react-native-elements";
import { TextInput as RNPTextInput } from "react-native-paper";
import { loginSchema } from "../../schema/login";
import { theme } from "../../utils/constant";
import { Button } from "../commons/Button";
import { TextInput } from "../commons/TextInput";

export const LoginForm = ({ navigation }) => {
  const { colors } = theme;
  return (
    <Formik
      initialValues={{
        password: "",
        username: "",
      }}
      onSubmit={(values) => console.log(values)}
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
            right={<RNPTextInput.Icon icon="eye" />}
            name={"password"}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          <View style={styles.forgotPasswordContainer(colors)}>
            <Pressable onPress={() => navigation.push("ForgotPasswordScreen")}>
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
