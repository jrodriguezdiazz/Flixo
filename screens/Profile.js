import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Feed } from "../components/commons/Feed";
import { ProfileInfo } from "../components/profile-info/ProfileInfo";
import { findUserById } from "../database/user";

export const Profile = ({ navigation, route }) => {
  const { userId } = route.params;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const userData = await findUserById(userId);
      setUser(userData);
      setLoading(false);
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!user) {
    return (
      <View>
        <Text>No user found with the given ID</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View>
        <ProfileInfo
          navigation={navigation}
          user={user}
        />
        <Feed
          posts={user.posts}
          isScrollView={false}
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};
