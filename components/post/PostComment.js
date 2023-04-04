import { StyleSheet, Text, View } from "react-native";

export const PostComment = ({ post }) => {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.username}>{post.username} </Text>
        <Text>{post.caption}</Text>
      </Text>
    </View>
  );
};

export const PostSection = ({ post }) => {
  const numberOfComments = post.comments.length;
  return (
    <View style={styles.container}>
      {numberOfComments && (
        <Text>
          View {numberOfComments > 1 ? "all" : ""} {numberOfComments}
          {numberOfComments > 1 ? " comments" : " comment"}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
});
