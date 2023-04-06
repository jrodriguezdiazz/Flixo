import { StyleSheet, View } from "react-native";
import { ProfilePicture } from "../commons/ProfilePicture";
import { TextInput } from "../commons/TextInput";

export const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePicture}>
        <ProfilePicture
          goTo={() => navigation.push("ProfileScreen")}
          uri={
            "https://instagram.fsti2-1.fna.fbcdn.net/v/t51.2885-19/334683644_217978764048457_2214545457929857106_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fsti2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=BRPQYZWkgB0AX_c2Zpt&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDkWrg9Jym7p4BjmdM0S8bxkV6Lq-dleuKxuaFHLD68yg&oe=641BA41A&_nc_sid=8fd12b"
          }
        />
      </View>

      <View style={styles.searchInput}>
        <TextInput
          label={"Search"}
          keyboardType={"text"}
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
