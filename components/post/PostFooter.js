import { StyleSheet, TouchableOpacity, View } from "react-native";
import { POST_ACTIONS } from "../../utils/constant";
import { Icon } from "./Icon";

export const PostFooter = () => {
  return (
    <View style={styles.container}>
      {POST_ACTIONS.map((icon) => (
        <TouchableOpacity key={icon.name}>
          <Icon
            key={icon.name}
            {...icon}
          />
        </TouchableOpacity>
      ))}
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
