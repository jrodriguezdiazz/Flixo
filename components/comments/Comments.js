import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { FlatList, Modal, StyleSheet, TextInput, View } from "react-native";
import { AuthenticatedUserContext } from "../../App";
import { addNotification } from "../../database/notification";
import { addCommentToPost, useRealtimeComments } from "../../database/post";
import { findUserById } from "../../database/user";
import { Button } from "../commons/Button";
import { CommentItem } from "./CommentItem";

export const Comments = ({ post, visible, onRequestClose, navigation }) => {
  const {
    user: { uid },
  } = useContext(AuthenticatedUserContext);
  const [commentText, setCommentText] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const { postId } = post;

  const comments = useRealtimeComments(postId, visible);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const fetchedUser = await findUserById(uid);
      setCurrentUser(fetchedUser);
    };

    if (visible) {
      fetchCurrentUser();
    }
  }, [visible, uid]);

  const handleSubmitComment = async () => {
    if (commentText.trim()) {
      const comment = {
        userId: uid,
        username: currentUser.username,
        profilePicture: currentUser.profilePicture,
        text: commentText.trim(),
        date: moment().format(),
      };
      await addCommentToPost(postId, comment);
      await addNotification(post.userId, {
        user: currentUser.username,
        header: `${currentUser.username} commented on your post.`,
        profilePicture: currentUser.profilePicture,
        userId: currentUser.userId,
        date: moment().format(),
        seen: false,
      });
      setCommentText("");
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onRequestClose}
      transparent={false}
    >
      <View style={styles.container}>
        <FlatList
          data={comments}
          renderItem={({ item }) => (
            <CommentItem
              navigation={navigation}
              comment={item}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={commentText}
            onChangeText={setCommentText}
            placeholder="Write a comment..."
            onSubmitEditing={handleSubmitComment}
          />
          <Button
            label={"Send"}
            icon={"send"}
            action={handleSubmitComment}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderColor: "#cccccc",
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#cccccc",
    marginRight: 10,
    marginTop: 10,
  },
  sendButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
