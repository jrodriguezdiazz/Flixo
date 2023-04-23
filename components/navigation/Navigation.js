import { createStackNavigator } from "@react-navigation/stack";
import { SCREEN_MAP } from "../../utils/constant";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};
export const NavigationAuthenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_MAP.defaultScreen}
      screenOptions={screenOptions}
    >
      {SCREEN_MAP.authenticated.screens.map(({ name, component }) => {
        return (
          <Stack.Screen
            navigationKey={name}
            key={name}
            name={name}
            component={component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export const NavigationUnauthenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_MAP.defaultScreen}
      screenOptions={screenOptions}
    >
      {SCREEN_MAP.unauthenticated.screens.map(({ name, component }) => {
        return (
          <Stack.Screen
            navigationKey={name}
            key={name}
            name={name}
            component={component}
          />
        );
      })}
    </Stack.Navigator>
  );
};
