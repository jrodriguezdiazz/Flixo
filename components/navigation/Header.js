import { StyleSheet, View } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useAuthStore } from "../../stores/useAuthStore";
import { DEFAULT_IMAGE } from "../../utils/constant";
import { ProfilePicture } from "../commons/ProfilePicture";
import { TextInput } from "../commons/TextInput";

export const Header = ({ navigation }) => {
  const { user } = useAuthStore();
  return (
    <View style={styles.container}>
      <View style={styles.profilePicture}>
        <ProfilePicture
          goTo={() => navigation.push("ProfileScreen")}
          uri={user?.profilePicture || DEFAULT_IMAGE}
        />
      </View>

      <View style={styles.searchInput}>
        <TextInput
          label={"Search"}
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
