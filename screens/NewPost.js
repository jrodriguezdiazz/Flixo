import { StyleSheet, View } from "react-native";
import { AddNewPost } from "../components/new-post/AddNewPost";

export const NewPost = () => {
  return (
    <View style={styles.container}>
      <AddNewPost />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});
