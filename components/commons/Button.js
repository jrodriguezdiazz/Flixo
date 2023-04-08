import { StyleSheet } from "react-native";
import { Button as RNPButton } from "react-native-paper";
import { theme } from "../../utils/constant";

export const Button = ({
  icon,
  action = null,
  label,
  isValid = true,
  ...props
}) => {
  const { colors } = theme;
  return (
    <RNPButton
      icon={icon}
      mode="contained"
      onPress={action}
      style={styles.button(colors, isValid)}
      labelStyle={styles.label(colors)}
      {...props}
    >
      {label}
    </RNPButton>
  );
};

const styles = StyleSheet.create({
  button: ({ sunflower, flax }, isValid) => ({
    backgroundColor: isValid ? sunflower : flax,
  }),
  label: ({ white }) => ({
    color: white,
  }),
});
