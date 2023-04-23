import { StyleSheet, Text, View } from "react-native";

export const Statistics = ({ user }) => {
  const { followers = {}, following = {}, numberOfPosts = 0 } = user;
  const numberOfFollowers = Object.keys(followers).length;
  const numberOfFollowing = Object.keys(following).length;

  return (
    <View style={styles.container}>
      <View style={styles.static}>
        <Text>{numberOfPosts}</Text>
        <Text>Posts</Text>
      </View>
      <View style={styles.static}>
        <Text>{numberOfFollowers}</Text>
        <Text>Followers</Text>
      </View>
      <View style={styles.static}>
        <Text>{numberOfFollowing}</Text>
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
