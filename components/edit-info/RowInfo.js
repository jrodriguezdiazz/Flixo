import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "../commons/TextInput";

export const RowInfo = ({ label }) => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text>{label}</Text>
      </View>
      <TextInput
        isOutlineTransparent={true}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 15,
    alignItems: "center",
    alignContent: "stretch",
  },
  label: {
    width: 60,
  },
  textInput: {
    marginLeft: 20,
    minWidth: "75%",
  },
});
