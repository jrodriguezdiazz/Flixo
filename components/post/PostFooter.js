import { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AuthenticatedUserContext } from "../../App";
import { toggleFire } from "../../database/post";
import { Button } from "../commons/Button";

export const PostFooter = ({ post }) => {
  const numberOfComments = post?.comments?.length || 0;
  const numberOfFire = post?.fire?.length || 0;
  const {
    user: { uid },
  } = useContext(AuthenticatedUserContext);
  const handleFireClick = async () => {
    await toggleFire(post, uid);
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
