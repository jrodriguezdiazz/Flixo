import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const PostHeader = ({ post }) => {
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
    marginVertical: 10,
    alignItems: "center",
  },
  containerUser: {
    marginLeft: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderColor: "#e4c220",
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
