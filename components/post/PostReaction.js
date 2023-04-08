import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../utils/constant";

export const PostReaction = ({ post }) => {
  const { colors } = theme;
  const numberOfComments = post.comments.length;
  return (
    <View style={styles.container}>
      <Text style={styles.resume(colors)}>
        {post.fire.toLocaleString()} fires{" "}
      </Text>
      {numberOfComments && (
        <Text style={styles.resume(colors)}>
          and {numberOfComments}
          {numberOfComments > 1 ? " comments" : " comment"}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 4,
  },
  resume: ({ payneGrey }) => ({
    color: payneGrey,
    fontStyle: "italic",
  }),
});
