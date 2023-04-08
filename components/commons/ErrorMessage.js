import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../utils/constant";

export const ErrorMessage = ({ message }) => {
  const { colors } = theme;
  return (
    <View style={styles.container}>
      <Text style={styles.error(colors)}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  error: ({ error }) => ({
    color: error,
  }),
});
