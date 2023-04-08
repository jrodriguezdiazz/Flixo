import { Formik } from "formik";
import { StyleSheet, Text, View } from "react-native";
import { signUpSchema } from "../../schema/signUp";
import { getMinimumRegistrationAge } from "../../utils";
import { Button } from "../commons/Button";
import { Calendar } from "../commons/Calendar";
import { TextInput } from "../commons/TextInput";
import { TextInputPhoneNumber } from "../commons/TextInputPhoneNumber";

export const SignUpForm = ({ navigation }) => {
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
        onSubmit={(values) => console.log(values)}
        validationSchema={signUpSchema}
        validateOnMount={true}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          isValid,
          errors,
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
              />
              <TextInput
                label="Password"
                secureTextEntry={true}
                name={"password"}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                errorMessage={errors.password}
              />
              <TextInput
                label="First Name"
                name={"firstName"}
                onChangeText={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                value={values.firstName}
                errorMessage={errors.firstName}
              />
              <TextInput
                label="Last Name"
                name={"lastName"}
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                value={values.lastName}
                errorMessage={errors.lastName}
              />
              <TextInput
                label="Email"
                name={"email"}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                errorMessage={errors.email}
              />
              <TextInputPhoneNumber
                label="Pone Number"
                name={"phoneNumber"}
                onChangeText={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                value={values.phoneNumber}
                errorMessage={errors.phoneNumber}
              />
              <Calendar
                style={styles.calendar}
                name={"birthday"}
                onChangeText={handleChange("birthday")}
                onBlur={handleBlur("birthday")}
                value={values.birthday}
                errorMessage={errors.birthday}
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
              disabled={!isValid}
              isValid={isValid}
            />
          </>
        )}
      </Formik>
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
