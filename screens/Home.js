import { ScrollView, View } from "react-native";
import { Divider } from "react-native-elements";
import { Post } from "../components/post/Post";
import { POSTS } from "../data/post";

export const HomeScreen = () => {
  return (
    <View>
      <ScrollView>
        {POSTS.map((post) => (
          <View key={post.id}>
            <Post post={post} />
            <Divider
              width={1}
              orientation={"vertical"}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
