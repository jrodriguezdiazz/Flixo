import { TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { DEFAULT_IMAGE } from "../../utils/constant";

export const ProfilePicture = ({
  size = 36,
  uri = DEFAULT_IMAGE,
  goTo = () => {},
}) => {
  return (
    <TouchableOpacity onPress={goTo}>
      <Avatar.Image
        size={size}
        source={{
          uri,
        }}
      />
    </TouchableOpacity>
  );
};
