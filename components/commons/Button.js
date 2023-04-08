import { StyleSheet } from "react-native";
import { Button as RNPButton } from "react-native-paper";
import { theme } from "../../utils/constant";

export const Button = ({ icon, action = null, label }) => {
  const { colors } = theme;
  return (
    <RNPButton
      icon={icon}
      mode="contained"
      onPress={action}
      style={styles.button(colors)}
      labelStyle={styles.label(colors)}
    >
      {label}
    </RNPButton>
  );
};

const styles = StyleSheet.create({
  button: ({ sunflower }) => ({
    backgroundColor: sunflower,
  }),
  label: ({ white }) => ({
    color: white,
  }),
});
