import { ScrollView, View } from "react-native";
import { Divider } from "react-native-elements";
import { NoPostsFound } from "../post/NotPostFound";
import { Post } from "../post/Post";

export const Feed = ({ message, navigation, isScrollView = true, posts }) => {
  const postArray = Object.values(posts);
  if (!postArray.length) return <NoPostsFound message={message} />;

  const postMap = postArray.map((post) => (
    <View key={post.postId}>
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
