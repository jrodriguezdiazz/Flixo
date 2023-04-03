import { ForgotPassword } from "../screens/ForgotPassword";
import { Login } from "../screens/Login";
import { Main } from "../screens/Main";
import { NewPassword } from "../screens/NewPassword";
import { SignUp } from "../screens/SignUp";
import { Verification } from "../screens/Verification";

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
    {
      name: "VerificationScreen",
      component: Verification,
    },
    {
      name: "NewPasswordScreen",
      component: NewPassword,
    },
  ],
};
export const MINIMUM_REGISTRATION_AGE = 13;
