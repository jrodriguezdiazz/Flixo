import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInput } from "../utils/TextInput";

export const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.profileImage}
          source={require("../../assets/profileImage.jpg")}
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
