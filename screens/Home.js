import { View } from "react-native";
import { Feed } from "../components/commons/Feed";
import { POSTS } from "../data/post";

export const HomeScreen = () => {
  return (
    <View>
      <Feed posts={POSTS} />
    </View>
  );
};
