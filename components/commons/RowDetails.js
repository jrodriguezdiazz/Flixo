import { StyleSheet, Text, View } from "react-native";
import { formatDate, truncateString } from "../../utils";

export const RowDetails = ({ info }) => {
  return (
    <View style={styles.detail}>
      <Text>{info.header}</Text>
      {info.message && <Text>{truncateString(info.message)}</Text>}
      <Text>{formatDate(info.date)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detail: {
    marginHorizontal: 15,
  },
});
