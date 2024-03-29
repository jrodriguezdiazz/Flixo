import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import { theme } from "../../utils/constant";

export const NoPostsFound = ({ message }) => {
  const { colors } = theme;
  return (
    <Card style={styles.container}>
      <Text style={styles.text(colors)}>{message}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingVertical: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "flex-start",
    marginHorizontal: 20,
  },
  text: ({ sunflower }) => ({
    fontSize: 36,
    color: sunflower,
  }),
});
