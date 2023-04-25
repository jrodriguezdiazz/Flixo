import { Formik } from "formik";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { updateUser } from "../../database/user";
import { Button } from "../commons/Button";
import { Calendar } from "../commons/Calendar";
import { TextInput } from "../commons/TextInput";
import { TextInputPhoneNumber } from "../commons/TextInputPhoneNumber";
import { RowInfo } from "./RowInfo";
import { SectionInfo } from "./SectionInfo";

const CommonInfoSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(4, "Username must be at least 4 characters")
    .max(20, "Username must be at most 20 characters"),
  firstName: Yup.string()
    .required("First name is required")
    .max(50, "First name must be at most 50 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .max(50, "Last name must be at most 50 characters"),
  bio: Yup.string().max(200, "Bio must be at most 200 characters"),
  birthday: Yup.date()
    .required("Birthday is required")
    .max(new Date(), "Invalid birthday"),
});

export const CommonInfo = ({ user, navigation }) => {
  const initialValues = {
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    bio: user.bio,
    email: user.email,
    phoneNumber: user.phoneNumber.slice(4),
    birthday: new Date(user.birthday),
  };

  const handleFormSubmit = async (values, { resetForm }) => {
    try {
      await updateUser(user.userId, values);
      resetForm();
      navigation.navigate("ProfileScreen", {
        userId: user.userId,
      });
    } catch (error) {
      alert(`Error updating user info: ${error.message}`);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={CommonInfoSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <SectionInfo title={"Common Info"}>
            <RowInfo label={"Username"}>
              <TextInput
                style={styles.textInput}
                autofocus={true}
                name="username"
                value={values.username}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                error={touched.username && errors.username}
              />
            </RowInfo>
            <RowInfo label={"First Name"}>
              <TextInput
                style={styles.textInput}
                name="firstName"
                value={values.firstName}
                onChangeText={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                error={touched.firstName && errors.firstName}
              />
            </RowInfo>
            <RowInfo label={"Last Name"}>
              <TextInput
                style={styles.textInput}
                name="lastName"
                value={values.lastName}
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                error={touched.lastName && errors.lastName}
              />
            </RowInfo>
            <RowInfo label={"Bio"}>
              <TextInput
                style={styles.textInput}
                name="bio"
                value={values.bio}
                onChangeText={handleChange("bio")}
                onBlur={handleBlur("bio")}
                error={touched.bio && errors.bio}
              />
            </RowInfo>
          </SectionInfo>
          <SectionInfo title={"Private Information"}>
            <RowInfo label={"Birthday"}>
              <Calendar
                style={styles.textInput}
                name="birthday"
                value={values.birthday}
                onChangeText={handleChange("birthday")}
                onBlur={handleBlur("birthday")}
                error={touched.birthday && errors.birthday}
              />
            </RowInfo>
            <RowInfo label={"Email"}>
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange("email")}
                value={values.email}
                disabled
              />
            </RowInfo>
            <RowInfo label={"Phone"}>
              <TextInputPhoneNumber
                style={styles.textInput}
                name="phoneNumber"
                value={values.phoneNumber}
                onChangeText={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                error={touched.phoneNumber && errors.phoneNumber}
                disabled
              />
            </RowInfo>
          </SectionInfo>
          <View style={styles.button}>
            <Button
              label={"Update"}
              onPress={handleSubmit}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    marginVertical: 30,
  },
  button: {
    alignItems: "center",
    marginTop: 15,
  },
  textInput: {
    marginLeft: 20,
    minWidth: "75%",
  },
});
