import { StyleSheet, Text, View } from "react-native";
import { USER_DATA } from "../../data/user";

export const Statistics = () => {
  const { statics = [] } = USER_DATA;
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
