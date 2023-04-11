import { Formik } from "formik";
import { StyleSheet, Text, View } from "react-native";
import { signUpSchema } from "../../schema/signUp";
import { useAuthStore } from "../../stores/useAuthStore";
import { getMinimumRegistrationAge } from "../../utils";
import { Button } from "../commons/Button";
import { Calendar } from "../commons/Calendar";
import { Loading } from "../commons/Loading";
import { TextInput } from "../commons/TextInput";
import { TextInputPhoneNumber } from "../commons/TextInputPhoneNumber";

export const SignUpForm = ({ navigation }) => {
  const { loading, register, user } = useAuthStore((state) => ({
    user: state.user,
    error: state.error,
    loading: state.loading,
    register: state.register,
  }));
  const handleRegister = async (values) => {
    await register(values);
    if (user) navigation.push("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          username: "",
          password: "",
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          birthday: getMinimumRegistrationAge(),
        }}
        onSubmit={handleRegister}
        validationSchema={signUpSchema}
        validateOnMount={true}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <View>
              <TextInput
                label="Username"
                autofocus={true}
                name={"username"}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                errorMessage={errors.username}
                isTouched={touched.username}
              />
              <TextInput
                autoCorrect={false}
                label="Password"
                secureTextEntry={true}
                name={"password"}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                errorMessage={errors.password}
                isTouched={touched.password}
              />
              <TextInput
                label="First Name"
                name={"firstName"}
                onChangeText={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                value={values.firstName}
                errorMessage={errors.firstName}
                isTouched={touched.firstName}
              />
              <TextInput
                label="Last Name"
                name={"lastName"}
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                value={values.lastName}
                errorMessage={errors.lastName}
                isTouched={touched.lastName}
              />
              <TextInput
                label="Email"
                name={"email"}
                autoCorrect={false}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                errorMessage={errors.email}
                isTouched={touched.email}
              />
              <TextInputPhoneNumber
                label="Pone Number"
                name={"phoneNumber"}
                onChangeText={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                value={values.phoneNumber}
                errorMessage={errors.phoneNumber}
                isTouched={touched.phoneNumber}
              />
              <Calendar
                style={styles.calendar}
                name={"birthday"}
                onChangeText={handleChange("birthday")}
                onBlur={handleBlur("birthday")}
                value={values.birthday}
                errorMessage={errors.birthday}
                isTouched={touched.birthday}
              />
            </View>
            <View style={styles.disclaimer}>
              <Text>
                By clicking Agree & Join, you agree to the Flixo User Agreement,
                Privacy Policy, and Cookie Policy. For phone numbers signups we
                will send a verification code via SMS.
              </Text>
            </View>
            <Button
              label={"Agree & Join"}
              icon={"login"}
              action={handleSubmit}
            />
          </>
        )}
      </Formik>
      {loading && <Loading />}
    </View>
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
