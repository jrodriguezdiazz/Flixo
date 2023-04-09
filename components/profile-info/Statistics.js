import { StyleSheet, Text, View } from "react-native";

export const Statistics = ({ user }) => {
  const { statics = [] } = user;
  return (
    <View style={styles.container}>
      {statics.map(({ label, number }) => {
        return (
          <View
            key={label}
            style={styles.static}
          >
            <Text>{number}</Text>
            <Text>{label}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
  },
  static: {
    alignItems: "center",
    marginHorizontal: 10,
  },
});
