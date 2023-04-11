import { ScrollView, Text, View } from "react-native";
import { Feed } from "../components/commons/Feed";

import { ProfileInfo } from "../components/profile-info/ProfileInfo";
import { useUserById } from "../hooks/useUserById ";

export const Profile = ({ navigation, route }) => {
  const { userId } = route.params;
  const user = useUserById(userId);

  if (!user) {
    return <Text>No user found</Text>;
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
