import { StyleSheet, Text, View } from "react-native";
import { formatDate, truncateString } from "../../utils";

export const RowDetails = ({ info }) => {
  return (
    <View>
      <View>
        <Text style={styles.username}>{info.header}</Text>
      </View>
      {info.message && (
        <View>
          <Text style={styles.username}>{truncateString(info.message)}</Text>
        </View>
      )}
      <View>
        <Text style={styles.username}>{formatDate(info.date)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  username: {
    marginLeft: 15,
  },
});
