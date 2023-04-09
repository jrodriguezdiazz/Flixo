import { ScrollView, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import { usePosts } from "../../hooks/usePosts";
import { Post } from "../post/Post";

export const Feed = ({ isScrollView = true }) => {
  const { posts, isLoading } = usePosts();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  console.log(posts);
  const postMap = posts.map((post) => (
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
