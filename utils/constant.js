import { ForgotPassword } from "../screens/ForgotPassword";
import { Login } from "../screens/Login";
import { Main } from "../screens/Main";
import { SignUp } from "../screens/SignUp";

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
      component: SignUp,
    },
    {
      name: "ForgotPasswordScreen",
      component: ForgotPassword,
    },
  ],
};
export const MINIMUM_REGISTRATION_AGE = 13;
