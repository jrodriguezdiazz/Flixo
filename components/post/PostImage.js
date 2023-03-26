import { Image, StyleSheet, View } from "react-native";
import { DEFAULT_IMAGE } from "../../utils/constant";

export const PostImage = ({ post }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: post.imageURL || DEFAULT_IMAGE }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 450,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
  },
});
