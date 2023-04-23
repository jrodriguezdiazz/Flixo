import { useContext, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { AuthenticatedUserContext } from "../App";
import { RowItem } from "../components/commons/RowItem";
import { NoPostsFound } from "../components/post/NotPostFound";
import { watchUserNotifications } from "../database/notification";

export const NotificationScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState([]);
  const { user } = useContext(AuthenticatedUserContext);

  useEffect(() => {
    const unsubscribe = watchUserNotifications(
      user.uid,
      (updatedNotifications) => {
        setNotifications(updatedNotifications);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [user]);

  if (!notifications.length) return <NoPostsFound label={"Notifications"} />;

  return (
    <View>
      <ScrollView>
        {notifications.map((notification) => (
          <View key={notification.id}>
            <RowItem
              info={notification}
              navigation={navigation}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
