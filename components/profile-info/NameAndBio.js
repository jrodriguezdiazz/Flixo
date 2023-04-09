import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { USER_DATA } from "../../data/user";
import { useAuthStore } from "../../stores/useAuthStore";

export const NameAndBio = () => {
  const { username = "" } = USER_DATA;
  const { user, loading, fetchUser } = useAuthStore();
  console.log(user);
  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (!user) {
    return <Text>No user found</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>{user.displayName}</Text>
      {user.bio && <Text>{user.bio}</Text>}
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
