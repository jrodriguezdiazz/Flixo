import { Formik } from "formik";
import { StyleSheet, View } from "react-native";
import { Button } from "../commons/Button";
import { Calendar } from "../commons/Calendar";
import { TextInput } from "../commons/TextInput";
import { TextInputPhoneNumber } from "../commons/TextInputPhoneNumber";
import { RowInfo } from "./RowInfo";
import { SectionInfo } from "./SectionInfo";

export const CommonInfo = ({ user, updateUser }) => {
  const handleFormSubmit = async (values) => {
    try {
      await updateUser({ ...values, id: user.userId });
      alert("User info updated successfully!");
    } catch (error) {
      alert(`Error updating user info: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          bio: user.bio,
          email: user.email,
          phone: user.phone,
          birthday: new Date(user.birthday),
        }}
        onSubmit={handleFormSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.username) {
            errors.username = "Required";
          }
          return errors;
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <SectionInfo title={"Common Info"}>
              <RowInfo label={"Username"}>
                <TextInput
                  style={styles.textInput}
                  name={"username"}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                />
              </RowInfo>
              <RowInfo label={"First Name"}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.firstName}
                />
              </RowInfo>
              <RowInfo label={"last Name"}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.lastName}
                />
              </RowInfo>
              <RowInfo label={"Bio"}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={handleChange("bio")}
                  onBlur={handleBlur("bio")}
                  value={values.bio}
                />
              </RowInfo>
            </SectionInfo>
            <SectionInfo title={"Private Information"}>
              <RowInfo label={"Email"}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
              </RowInfo>
              <RowInfo label={"Phone"}>
                <TextInputPhoneNumber
                  style={styles.textInput}
                  label="Phone Number"
                  name={"phone"}
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  value={user.phone}
                  disabled
                />
              </RowInfo>
              <RowInfo label={"Birthday"}>
                <Calendar
                  style={styles.textInput}
                  name={"birthday"}
                  onChangeText={handleChange("birthday")}
                  onBlur={handleBlur("birthday")}
                  value={user.birthday}
                />
              </RowInfo>
            </SectionInfo>
            <View style={styles.button}>
              <Button
                label={"Update"}
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
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
