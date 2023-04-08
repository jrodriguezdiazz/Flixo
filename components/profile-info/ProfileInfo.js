import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { USER_DATA } from "../../data/user";
import { ProfilePicture } from "../commons/ProfilePicture";
import { ButtonEditProfileInfo } from "../profile-info/ButtonEditProfileInfo";
import { NameAndBio } from "../profile-info/NameAndBio";
import { Statistics } from "../profile-info/Statistics";

export const ProfileInfo = ({ navigation }) => {
  const { profilePicture, isOwnProfile } = USER_DATA;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ProfilePicture
          size={100}
          uri={profilePicture}
        />
        <NameAndBio />
        <Statistics />
        {isOwnProfile && <ButtonEditProfileInfo navigation={navigation} />}
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
