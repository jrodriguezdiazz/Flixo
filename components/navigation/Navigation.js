import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREEN_MAP } from "../../utils/constant";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};
export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN_MAP.defaultScreen}
        screenOptions={screenOptions}
      >
        {SCREEN_MAP.screens.map(({ name, component }) => {
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
    </NavigationContainer>
  );
};
