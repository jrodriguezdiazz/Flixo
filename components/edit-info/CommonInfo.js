import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { updateUser } from "../../database/user";
import { Button } from "../commons/Button";
import { Calendar } from "../commons/Calendar";
import { TextInput } from "../commons/TextInput";
import { TextInputPhoneNumber } from "../commons/TextInputPhoneNumber";
import { RowInfo } from "./RowInfo";
import { SectionInfo } from "./SectionInfo";

export const CommonInfo = ({ user }) => {
  const [values, setValues] = useState({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    bio: user.bio,
    email: user.email,
    phoneNumber: user.phoneNumber.slice(4),
    birthday: new Date(user.birthday),
  });

  const handleFormSubmit = async () => {
    try {
      await updateUser(user.userId, values);
    } catch (error) {
      alert(`Error updating user info: ${error.message}`);
    }
  };

  const onHandleChange = (value, field) => {
    setValues((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  console.log(values);

  return (
    <View style={styles.container}>
      <SectionInfo title={"Common Info"}>
        <RowInfo label={"Username"}>
          <TextInput
            style={styles.textInput}
            name={"username"}
            onChangeText={(value) => onHandleChange(value, "username")}
            value={values.username}
          />
        </RowInfo>
        <RowInfo label={"First Name"}>
          <TextInput
            style={styles.textInput}
            onChangeText={(value) => onHandleChange(value, "firstName")}
            value={values.firstName}
          />
        </RowInfo>
        <RowInfo label={"last Name"}>
          <TextInput
            style={styles.textInput}
            onChangeText={(value) => onHandleChange(value, "lastName")}
            value={values.lastName}
          />
        </RowInfo>
        <RowInfo label={"Bio"}>
          <TextInput
            style={styles.textInput}
            onChangeText={(value) => onHandleChange(value, "bio")}
            value={values.bio}
          />
        </RowInfo>
      </SectionInfo>
      <SectionInfo title={"Private Information"}>
        <RowInfo label={"Birthday"}>
          <Calendar
            style={styles.textInput}
            name={"birthday"}
            onChangeText={onHandleChange}
            value={new Date(user.birthday)}
          />
        </RowInfo>
        <RowInfo label={"Email"}>
          <TextInput
            style={styles.textInput}
            onChangeText={(value) => onHandleChange(value, "email")}
            value={values.email}
            disabled
          />
        </RowInfo>
        <RowInfo label={"Phone"}>
          <TextInputPhoneNumber
            style={styles.textInput}
            label="Phone Number"
            name={"phoneNumber"}
            onChangeText={onHandleChange}
            value={user.phoneNumber}
            disabled
          />
        </RowInfo>
      </SectionInfo>
      <View style={styles.button}>
        <Button
          label={"Update"}
          onPress={handleFormSubmit}
        />
      </View>
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
