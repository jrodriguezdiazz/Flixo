import { ScrollView, View } from "react-native";
import { Divider } from "react-native-elements";
import { Post } from "../post/Post";

export const Feed = ({ post }) => {
  return (
    <ScrollView>
      {post.map((post) => (
        <View key={post.id}>
          <Post post={post} />
          <Divider
            width={1}
            orientation={"vertical"}
          />
        </View>
      ))}
    </ScrollView>
  );
};
