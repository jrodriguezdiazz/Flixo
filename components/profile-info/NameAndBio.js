import { StyleSheet, Text, View } from "react-native";

export const NameAndBio = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text>{user.fullName}</Text>
      {user.bio && <Text>{user.bio}</Text>}
      <Text style={styles.username}>@{user.username}</Text>
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
