import { Login } from "../screens/Login";
import { Main } from "../screens/Main";
import { SingUp } from "../screens/SingUp";

export const DEFAULT_IMAGE = "https://placehold.co/600x600/png";
export const SCREEN_MAP = {
  defaultScreen: "LoginScreen",
  screens: [
    {
      name: "HomeScreen",
      component: Main,
    },
    {
      name: "LoginScreen",
      component: Login,
    },
    {
      name: "SingUpScreen",
      component: SingUp,
    },
  ],
};
export const MINIMUM_REGISTRATION_AGE = 13;
