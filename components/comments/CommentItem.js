import { StyleSheet, Text, View } from "react-native";
import { getRelativeTime } from "../../utils";
import { ProfilePicture } from "../commons/ProfilePicture";

export const CommentItem = ({ comment, navigation }) => {
  const { username, profilePicture, text, date, userId } = comment;

  return (
    <View style={styles.container}>
      <ProfilePicture
        uri={profilePicture}
        goTo={() =>
          navigation.push("ProfileScreen", {
            userId,
          })
        }
      />
      <View style={styles.commentContent}>
        <Text style={styles.username}>
          {username} <Text style={styles.date}>{getRelativeTime(date)}</Text>
        </Text>
        <Text style={styles.commentText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentContent: {
    flexDirection: "column",
    marginLeft: 10,
  },
  username: {
    fontWeight: "bold",
  },
  commentText: {
    fontSize: 14,
  },
  date: {
    color: "gray",
    fontWeight: "600",
    fontSize: 14,
  },
});
