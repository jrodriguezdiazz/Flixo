import { StyleSheet, Text, View } from "react-native";
import { USER_DATA } from "../../data/user";

export const NameAndBio = () => {
  const { fullName = "", bio = "", username = "" } = USER_DATA;
  return (
    <View style={styles.container}>
      <Text>{fullName}</Text>
      <Text>{bio}</Text>
      <Text style={styles.username}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: "center",
  },
  username: {
    fontStyle: "italic",
  },
});
