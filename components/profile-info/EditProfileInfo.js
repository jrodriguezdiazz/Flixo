import { StyleSheet, View } from "react-native";
import { Button } from "../commons/Button";

export const EditProfileInfo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        action={() => navigation.push("HomeScreen")}
        icon={"pencil"}
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
