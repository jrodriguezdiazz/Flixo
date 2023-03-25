import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../../screens/Login";
import { Main } from "../../screens/Main";
import { SingUp } from "../../screens/SingUp";
import { SingUpSecondPart } from "../../screens/SingUpSecondPart";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};
export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"LoginScreen"}
        screenOptions={screenOptions}
      >
        <Stack.Screen
          name={"HomeScreen"}
          component={Main}
        />
        <Stack.Screen
          name={"LoginScreen"}
          component={Login}
        />
        <Stack.Screen
          name={"SingUpScreen"}
          component={SingUp}
        />
        <Stack.Screen
          name={"SingUpSecondPart"}
          component={SingUpSecondPart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
