import { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AuthenticatedUserContext } from "../../App";
import { getPostStatics, toggleFire } from "../../database/post";
import { Comments } from "../comments/Comments";
import { Button } from "../commons/Button";

export const PostFooter = ({ post, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    user: { uid },
  } = useContext(AuthenticatedUserContext);
  const { numberOfComments, numberOfFire } = getPostStatics(
    post.postId,
    modalVisible
  );

  const handleFireClick = async () => {
    await toggleFire(post, uid);
  };

  const handleCommentClick = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Button
          icon={"comment-multiple-outline"}
          label={`${numberOfComments} Comments`}
          action={handleCommentClick}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Button
          icon={"fire"}
          label={`${numberOfFire} Fires`}
          action={handleFireClick}
        />
      </TouchableOpacity>
      <Comments
        post={post}
        visible={modalVisible}
        onRequestClose={closeModal}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
