import { View } from "react-native";
import { Feed } from "../components/commons/Feed";
import { useAllPosts } from "../hooks/usePosts";

export const HomeScreen = ({ navigation }) => {
  const posts = useAllPosts();

  return (
    <View>
      <Feed
        posts={posts}
        navigation={navigation}
      />
    </View>
  );
};
