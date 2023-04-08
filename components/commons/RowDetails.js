import { StyleSheet, Text, View } from "react-native";
import { getRelativeTime, truncateString } from "../../utils";
import { theme } from "../../utils/constant";

export const RowDetails = ({ info }) => {
  const { colors } = theme;
  return (
    <View style={styles.detail}>
      <Text>{info.header}</Text>
      {info.message && <Text>{truncateString(info.message)}</Text>}
      <Text style={styles.date(colors)}>{getRelativeTime(info.date)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detail: {
    marginHorizontal: 20,
  },
  date: ({ payneGrey }) => ({
    fontStyle: "italic",
    color: payneGrey,
  }),
});
