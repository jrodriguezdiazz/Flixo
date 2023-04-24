import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { watchUserUpdates } from "../../database/user";

export const NameAndBio = ({ user }) => {
  const [updatedUser, setUpdatedUser] = useState(user);

  useEffect(() => {
    const unsubscribe = watchUserUpdates(user.userId, setUpdatedUser);
    return () => {
      unsubscribe();
    };
  }, [user.userId]);

  return (
    <View style={styles.container}>
      <Text>{updatedUser.fullName}</Text>
      {updatedUser.bio && <Text>{updatedUser.bio}</Text>}
      <Text style={styles.username}>@{updatedUser.username}</Text>
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
