import { useState } from "react";
import { StyleSheet, TextInput as TextInputReactNative } from "react-native";

export const TextInput = ({ ...props }) => {
  const [number, onChangeNumber] = useState("");

  return (
    <TextInputReactNative
      style={styles.input}
      onChangeText={onChangeNumber}
      value={number}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "rgba(99,98,98,0.87)",
    borderRadius: 10,
    padding: 10,
  },
});
