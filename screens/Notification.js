import { ScrollView, View } from "react-native";
import { Divider } from "react-native-elements";
import { NotificationItem } from "../components/notification/NotificationItem";
import { NOTIFICATIONS } from "../data/notifications";

export const NotificationScreen = () => {
  return (
    <View>
      <ScrollView>
        {NOTIFICATIONS.map((notification) => (
          <View key={notification.id}>
            <NotificationItem notification={notification} />
            <Divider
              width={1}
              orientation={"vertical"}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
