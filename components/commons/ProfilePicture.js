import { StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { DEFAULT_IMAGE, theme } from "../../utils/constant";

export const ProfilePicture = ({
  size = 36,
  uri = DEFAULT_IMAGE,
  goTo = () => {},
}) => {
  const { colors } = theme;
  return (
    <TouchableOpacity onPress={goTo}>
      <Avatar.Image
        style={styles.image(colors)}
        size={size}
        source={{
          uri,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: ({ sunflower }) => ({
    borderWidth: 1,
    borderColor: sunflower,
    overflow: "hidden",
  }),
});
