import { StyleSheet, Text, View } from "react-native";
import { useUserStats } from "../../database/user";

export const Statistics = ({ user }) => {
  const stats = useUserStats(user.userId);

  return (
    <View style={styles.container}>
      <View style={styles.static}>
        <Text>{stats.numberOfPosts}</Text>
        <Text>Posts</Text>
      </View>
      <View style={styles.static}>
        <Text>{stats.numberOfFollowers}</Text>
        <Text>Followers</Text>
      </View>
      <View style={styles.static}>
        <Text>{stats.numberOfFollowing}</Text>
        <Text>Following</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
  },
  static: {
    alignItems: "center",
    marginHorizontal: 10,
  },
});
