import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HomeScreen } from "../../screens/Home";
import { MessagingScreen } from "../../screens/Messaging";
import { NewPost } from "../../screens/NewPost";
import { NotificationScreen } from "../../screens/Notification";

const Tab = createMaterialTopTabNavigator();
export const Navbar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "New Post") {
              iconName = focused ? "camera" : "camera-outline";
            } else if (route.name === "Notification") {
              iconName = focused ? "notifications" : "notifications-outline";
            } else if (route.name === "Messaging") {
              iconName = focused
                ? "chatbox-ellipses"
                : "chatbox-ellipses-outline";
            }

            return (
              <Ionicons
                name={iconName}
                size={22}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarLabel: "Home" }}
        />
        <Tab.Screen
          name="New Post"
          component={NewPost}
          options={{ tabBarLabel: "New Post" }}
          initialParams={{ navigation }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{ tabBarLabel: "Notification" }}
        />
        <Tab.Screen
          name="Messaging"
          component={MessagingScreen}
          options={{ tabBarLabel: "Messaging" }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
