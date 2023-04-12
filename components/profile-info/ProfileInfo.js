import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "../../stores/useAuthStore";
import { ProfilePicture } from "../commons/ProfilePicture";
import { NameAndBio } from "../profile-info/NameAndBio";
import { Statistics } from "../profile-info/Statistics";
import { ProfileButtons } from "./ProfileButtons";

export const ProfileInfo = ({ navigation, user }) => {
  const {
    user: { userId },
  } = useAuthStore((state) => ({
    user: state.user,
  }));

  const isOwnProfile = user.userId === userId;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ProfilePicture
          size={100}
          uri={user.profilePicture}
        />
        <NameAndBio user={user} />
        <Statistics user={user} />
        <ProfileButtons
          navigation={navigation}
          isOwnProfile={isOwnProfile}
          user={user}
          myUserId={userId}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "stretch",
    marginTop: 50,
  },
});
