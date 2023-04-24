import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Feed } from "../components/commons/Feed";
import { Loading } from "../components/commons/Loading";
import { NoResultsFound } from "../components/commons/NoResultsFound";
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
    return <Loading />;
  }

  if (!user) {
    return <NoResultsFound />;
  }

  return (
    <ScrollView>
      <View>
        <ProfileInfo
          navigation={navigation}
          user={user}
        />
        <Feed
          message={"You haven't posted anything YET... 🥲"}
          posts={user.posts}
          isScrollView={false}
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};
