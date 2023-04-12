import { ScrollView, View } from "react-native";
import { RowItem } from "../components/commons/RowItem";
import { NoPostsFound } from "../components/post/NotPostFound";
import { useNotifications } from "../hooks/useNotifications";
import { useAuthStore } from "../stores/useAuthStore";

export const NotificationScreen = () => {
  const { user } = useAuthStore();
  const notifications = useNotifications(user.userId);
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
