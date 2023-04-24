import { useContext } from "react";
import { View } from "react-native";
import { AuthenticatedUserContext } from "../App";
import { Feed } from "../components/commons/Feed";
import { useFollowingPosts } from "../database/post";

export const HomeScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticatedUserContext);
  const posts = useFollowingPosts(user.uid);

  return (
    <View>
      <Feed
        posts={posts}
        navigation={navigation}
        message={
          "Unfortunately we have not found any post, try following some friends... 🤙🏾"
        }
      />
    </View>
  );
};
