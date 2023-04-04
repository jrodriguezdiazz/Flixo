import { StyleSheet, Text, View } from "react-native";
import { ProfilePicture } from "../commons/ProfilePicture";

export const PostHeader = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerUser}>
        <ProfilePicture uri={post.profileImage} />
        <Text style={styles.username}>{post.username}</Text>
      </View>
      <Text style={styles.options}>...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    alignItems: "center",
  },
  containerUser: {
    marginLeft: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    marginLeft: 15,
    fontWeight: "700",
  },
  options: {
    fontWeight: "900",
    marginRight: 15,
  },
});
