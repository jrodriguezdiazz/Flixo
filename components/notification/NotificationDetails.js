import { StyleSheet, Text, View } from "react-native";
import { formatDate } from "../../utils/calculateTime";

export const NotificationDetails = ({ notification }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.username}>{notification.message}</Text>
      </View>
      <View>
        <Text style={styles.username}>{formatDate(notification.date)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  username: {
    marginLeft: 15,
    fontWeight: "700",
  },
});
