import { ScrollView, View } from "react-native";
import { Divider } from "react-native-elements";
import { Post } from "../post/Post";

export const Feed = ({ post, isScrollView = true }) => {
  const postMap = post.map((post) => (
    <View key={post.id}>
      <Post post={post} />
      <Divider
        width={1}
        orientation={"vertical"}
      />
    </View>
  ));
  return isScrollView ? <ScrollView>{postMap}</ScrollView> : postMap;
};
