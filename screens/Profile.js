import { ScrollView, View } from "react-native";
import { Feed } from "../components/commons/Feed";
import { ProfileInfo } from "../components/profile-info/ProfileInfo";
import { USER_DATA } from "../data/user";

export const Profile = ({ navigation }) => {
  const { posts } = USER_DATA;
  return (
    <ScrollView>
      <View>
        <ProfileInfo navigation={navigation} />
        <Feed
          post={posts}
          isScrollView={false}
        />
      </View>
    </ScrollView>
  );
};
