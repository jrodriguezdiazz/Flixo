import { StyleSheet, View } from "react-native";
import { ProfilePicture } from "../commons/ProfilePicture";
import { NotificationDetails } from "./NotificationDetails";

export const NotificationItem = ({ notification }) => {
  return (
    <View style={styles.container}>
      <ProfilePicture uri={notification.profilePicture} />
      <NotificationDetails notification={notification} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
});
