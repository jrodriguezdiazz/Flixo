import { StyleSheet, Text, View } from "react-native";
import { USER_DATA } from "../../data/user";

export const NameAndBio = () => {
  const { fullName = "", bio = "", username } = USER_DATA;
  return (
    <View style={styles.container}>
      <Text>{fullName}</Text>
      <Text>{username}</Text>
      <Text>{bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: "center",
  },
});
