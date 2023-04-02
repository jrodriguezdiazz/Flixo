import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInput } from "../commons/TextInput";

export const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://instagram.fsti2-1.fna.fbcdn.net/v/t51.2885-19/334683644_217978764048457_2214545457929857106_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fsti2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=BRPQYZWkgB0AX_c2Zpt&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDkWrg9Jym7p4BjmdM0S8bxkV6Lq-dleuKxuaFHLD68yg&oe=641BA41A&_nc_sid=8fd12b",
          }}
        />
      </TouchableOpacity>
      <View style={styles.searchInput}>
        <TextInput
          placeholder={"Search"}
          keyboardType={"text"}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  profileImage: {
    width: 32,
    height: 32,
    resizeMode: "contain",
    borderRadius: 100,
    marginTop: 15,
  },
  searchInput: {
    width: "90%",
  },
  container: {
    marginHorizontal: 20,
    flexDirection: "row",
  },
});
