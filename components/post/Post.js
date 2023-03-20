import { StyleSheet, View } from "react-native";
import { PostCaption } from "./PostCaption";
import { PostComment, PostSection } from "./PostComment";
import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";
import { PostImage } from "./PostImage";
import { PostReaction } from "./PostReaction";

export const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <PostHeader post={post} />
      <PostCaption post={post} />
      <PostImage post={post} />
      <View style={styles.postFooter}>
        <PostFooter post={post} />
        <PostReaction post={post} />
        <PostComment post={post} />
        <PostSection post={post} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  postFooter: {
    marginHorizontal: 15,
    marginTop: 10,
  },
});
