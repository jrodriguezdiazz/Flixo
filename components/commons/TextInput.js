import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { theme } from "../../utils/constant";

export const TextInput = ({ isOutlineTransparent = false, ...props }) => {
  const [input, setInput] = useState("");
  const { colors } = theme;
  return (
    <View style={styles.container}>
      <RNPTextInput
        value={input}
        onChangeText={(value) => setInput(value)}
        theme={styles.inputTheme(colors)}
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
  inputTheme: ({ white, sunflower }) => ({
    roundness: 4,
    colors: {
      placeholder: white,
      primary: sunflower,
      underlineColor: "transparent",
    },
  }),
});
