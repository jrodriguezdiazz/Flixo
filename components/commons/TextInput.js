import { StyleSheet, View } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { theme } from "../../utils/constant";

export const TextInput = ({
  isOutlineTransparent = false,
  isValid = true,
  ...props
}) => {
  const { colors } = theme;
  return (
    <View style={styles.container}>
      <RNPTextInput
        theme={styles.inputTheme(colors, isValid)}
        outlineColor={isOutlineTransparent ? "transparent" : null}
        mode={"outlined"}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  inputTheme: ({ white, sunflower, error }, isValid) => ({
    roundness: 4,
    colors: {
      placeholder: white,
      primary: isValid ? sunflower : error,
      underlineColor: "transparent",
    },
  }),
});
