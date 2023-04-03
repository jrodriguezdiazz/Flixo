import { StyleSheet } from "react-native";
import { Button as RNPButton } from "react-native-paper";

export const Button = ({ icon, action = null, label }) => {
  return (
    <RNPButton
      icon={icon}
      mode="contained"
      onPress={action}
      style={styles.button}
    >
      {label}
    </RNPButton>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f5d40f",
  },
});
