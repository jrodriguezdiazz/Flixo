import { View } from "react-native";
import { PostHeader } from "./PostHeader";
import { PostImage } from "./PostImage";

export const Post = ({ post }) => {
  return (
    <View>
      <PostHeader post={post} />
      <PostImage />
    </View>
  );
};
