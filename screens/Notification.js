import { ScrollView, View } from "react-native";
import { RowItem } from "../components/commons/RowItem";
import { NoPostsFound } from "../components/post/NotPostFound";

export const NotificationScreen = () => {
  const notifications = [];
  if (!notifications.length) return <NoPostsFound label={"Notifications"} />;

  return (
    <View>
      <ScrollView>
        {notifications.map((notification) => (
          <View key={notification.id}>
            <RowItem info={notification} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
