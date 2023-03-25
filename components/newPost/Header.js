import { StyleSheet, Text, View } from "react-native";

export const NewPostHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>ADD NEW POST</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "700",
    fontSize: 20,
  },
});
