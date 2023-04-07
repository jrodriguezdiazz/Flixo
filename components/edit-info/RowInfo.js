import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "../commons/TextInput";

export const RowInfo = ({ label }) => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text>{label}</Text>
      </View>
      <TextInput style={styles.textInput} />
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
    width: 70,
  },
  textInput: {
    marginLeft: 30,
    minWidth: "70%",
  },
});
