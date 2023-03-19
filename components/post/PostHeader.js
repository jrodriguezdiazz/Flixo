import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const PostHeader = ({ post }) => {
  console.log(post);
  return (
    <View style={styles.container}>
      <View style={styles.containerUser}>
        <TouchableOpacity>
          <Image
            source={{ uri: post.profileImage }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
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
    margin: 5,
    alignItems: "center",
  },
  containerUser: {
    marginLeft: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 50,
    borderColor: "#e4c220",
  },
  username: {
    marginLeft: 5,
    // fontWeight: 700,
  },
  options: {
    fontWeight: "900",
  },
});
