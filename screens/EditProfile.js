import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfilePicture } from "../components/commons/ProfilePicture";
import { ChangeProfilePhoto } from "../components/edit-info/ChangeProfilePhoto";
import { CommonInfo } from "../components/edit-info/CommonInfo";
import { USER_DATA } from "../data/user";

export const EditProfile = () => {
  const { profilePicture } = USER_DATA;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ProfilePicture
            size={80}
            uri={profilePicture}
          />
          <ChangeProfilePhoto />
          <CommonInfo />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "stretch",
    marginVertical: 20,
    width: "100%",
  },
});
