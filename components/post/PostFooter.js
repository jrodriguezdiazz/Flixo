import { StyleSheet, TouchableOpacity, View } from "react-native";
import { addFireUser } from "../../firebase";
import { useAuthStore } from "../../stores/useAuthStore";
import { Button } from "../commons/Button";

export const PostFooter = ({ post }) => {
  const { user } = useAuthStore();
  const numberOfComments = post?.comments.length || 0;
  const numberOfFire = post?.fire.length || 0;
  const handleFireClick = async () => {
    await addFireUser(post.id, post.userId, user.userId);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Button
          icon={"comment-multiple-outline"}
          label={`${numberOfComments} Comments`}
          action={() => console.log("Comment")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Button
          icon={"fire"}
          label={`${numberOfFire} Fires`}
          action={handleFireClick}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Button
          icon={"share"}
          label={"Share"}
          action={() => console.log("Share")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
