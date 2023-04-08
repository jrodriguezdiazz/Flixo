import { StyleSheet, View } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { USER_DATA } from "../../data/user";
import { ProfilePicture } from "../commons/ProfilePicture";
import { TextInput } from "../commons/TextInput";

export const Header = ({ navigation }) => {
  const { profilePicture } = USER_DATA;
  return (
    <View style={styles.container}>
      <View style={styles.profilePicture}>
        <ProfilePicture
          goTo={() => navigation.push("ProfileScreen")}
          uri={profilePicture}
        />
      </View>

      <View style={styles.searchInput}>
        <TextInput
          label={"Search"}
          keyboardType={"text"}
          right={<RNPTextInput.Icon icon="magnify" />}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  searchInput: {
    width: "80%",
  },
  container: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profilePicture: {
    marginTop: 22,
    marginHorizontal: 12,
  },
});
