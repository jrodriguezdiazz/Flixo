import { ScrollView, View } from "react-native";
import { RowItem } from "../components/commons/RowItem";
import { NOTIFICATIONS } from "../data/notifications";

export const NotificationScreen = () => {
  return (
    <View>
      <ScrollView>
        {NOTIFICATIONS.map((notification) => (
          <View key={notification.id}>
            <RowItem info={notification} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
