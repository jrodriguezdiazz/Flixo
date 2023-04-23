import { useEffect, useState } from "react";
import { View } from "react-native";
import { Feed } from "../components/commons/Feed";
import { getPosts } from "../database/post";

export const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <View>
      <Feed
        posts={posts}
        navigation={navigation}
      />
    </View>
  );
};
