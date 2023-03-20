import { StyleSheet, Text } from "react-native";

export const PostCaption = ({ post }) => {
  return <Text style={styles.container}>{post.caption}</Text>;
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginBottom: 10,
  },
});
