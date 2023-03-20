import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "./Icon";

const ACTIONS = [
  { iconName: "md-chatbubbles-outline", name: "commnet" },
  {
    iconName: "md-bonfire-outline",
    name: "Fire",
  },
  { iconName: "send-outline", name: "Send" },
];

export const PostFooter = () => {
  return (
    <View style={styles.container}>
      {ACTIONS.map((icon) => (
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
