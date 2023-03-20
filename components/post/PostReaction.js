import { StyleSheet, Text, View } from "react-native";

export const PostReaction = ({ post }) => {
  return (
    <View style={styles.container}>
      <Text>{post.fire.toLocaleString()} fires</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 5,
  },
});
