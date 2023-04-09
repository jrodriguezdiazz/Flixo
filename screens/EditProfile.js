import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfilePicture } from "../components/commons/ProfilePicture";
import { ChangeProfilePhoto } from "../components/edit-info/ChangeProfilePhoto";
import { CommonInfo } from "../components/edit-info/CommonInfo";
import { useAuthStore } from "../stores/useAuthStore";

export const EditProfile = () => {
  const { user, loading } = useAuthStore();
  if (loading) {
    return <ActivityIndicator />;
  }

  if (!user) {
    return <Text>No user found</Text>;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ProfilePicture
            size={80}
            uri={user.profilePicture}
          />
          <ChangeProfilePhoto />
          <CommonInfo user={user} />
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
