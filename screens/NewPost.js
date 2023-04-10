import { StyleSheet, View } from "react-native";
import { AddNewPost } from "../components/new-post/AddNewPost";

export const NewPost = ({ route }) => {
  const navigation = route.params.navigation;

  return (
    <View style={styles.container}>
      <AddNewPost navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});
