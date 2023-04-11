import { ScrollView, View } from "react-native";
import { Divider } from "react-native-elements";
import { Post } from "../post/Post";

export const Feed = ({ navigation, isScrollView = true, posts }) => {
  const postMap = posts.map((post) => (
    <View key={post.id}>
      <Post
        post={post}
        navigation={navigation}
      />
      <Divider
        width={1}
        orientation={"vertical"}
      />
    </View>
  ));
  return isScrollView ? <ScrollView>{postMap}</ScrollView> : postMap;
};
