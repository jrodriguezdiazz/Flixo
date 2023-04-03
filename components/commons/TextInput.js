import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";

export const TextInput = ({ ...props }) => {
  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <RNPTextInput
        value={input}
        onChangeText={(value) => setInput(value)}
        theme={{ roundness: 4 }}
        outlineColor={"transparent"}
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
});
