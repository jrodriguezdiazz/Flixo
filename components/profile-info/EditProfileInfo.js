import { StyleSheet, View } from "react-native";
import { Button } from "../commons/Button";

export const EditProfileInfo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        action={() => navigation.push("EditProfileScreen")}
        icon={"account-edit-outline"}
        label={"Edit Profile"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "55%",
    marginTop: 15,
  },
});
