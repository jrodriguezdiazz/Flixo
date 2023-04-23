import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { AuthenticatedUserContext } from "../../App";
import { DEFAULT_IMAGE } from "../../utils/constant";
import { ProfilePicture } from "../commons/ProfilePicture";
import { TextInput } from "../commons/TextInput";

export const Header = ({
  onChangeText = () => ({}),
  navigation,
  goToUserSearch = true,
  value = "",
}) => {
  const { user } = useContext(AuthenticatedUserContext);

  return (
    <View style={styles.container}>
      <View style={styles.profilePicture}>
        <ProfilePicture
          goTo={() =>
            navigation.push("ProfileScreen", {
              userId: user.uid,
            })
          }
          uri={user?.profilePicture || DEFAULT_IMAGE}
        />
      </View>

      <View style={styles.searchInput}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          label={"Search"}
          right={<RNPTextInput.Icon icon="magnify" />}
          onFocus={() => {
            if (goToUserSearch) {
              navigation.push("UserSearchScreen");
            }
          }}
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
