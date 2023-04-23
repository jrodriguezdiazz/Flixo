import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfilePicture } from "../commons/ProfilePicture";
import { NameAndBio } from "../profile-info/NameAndBio";
import { Statistics } from "../profile-info/Statistics";
import { ProfileButtons } from "./ProfileButtons";

export const ProfileInfo = ({ navigation, user }) => {
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
          user={user}
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
