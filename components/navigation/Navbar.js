import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HomeScreen } from "../../screens/Home";
import { MessagingScreen } from "../../screens/Messaging";
import { NotificationScreen } from "../../screens/Notification";
import { PostScreen } from "../../screens/Post";

const Tab = createMaterialTopTabNavigator();
export const Navbar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Post") {
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
        name="Post"
        component={PostScreen}
        options={{ tabBarLabel: "Post" }}
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
  );
};
