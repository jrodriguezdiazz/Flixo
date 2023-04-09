import { ScrollView, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { Feed } from "../components/commons/Feed";
import { Logout } from "../components/profile-info/Logout";
import { ProfileInfo } from "../components/profile-info/ProfileInfo";
import { useAuthStore } from "../stores/useAuthStore";

export const Profile = ({ navigation }) => {
  const { user, loading } = useAuthStore();

  if (loading) {
    return <ActivityIndicator />;
  }

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
        <Logout navigation={navigation} />
        <Feed
          posts={user.posts}
          isScrollView={false}
        />
      </View>
    </ScrollView>
  );
};
