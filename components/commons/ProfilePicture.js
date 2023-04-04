import { TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { DEFAULT_IMAGE } from "../../utils/constant";

export const ProfilePicture = ({ size = 36, uri = DEFAULT_IMAGE }) => {
  return (
    <TouchableOpacity>
      <Avatar.Image
        size={size}
        source={{
          uri,
        }}
      />
    </TouchableOpacity>
  );
};
