import { StyleSheet, Text, View } from "react-native";

export const RowInfo = ({ label, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text>{label}</Text>
      </View>
      {children}
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
