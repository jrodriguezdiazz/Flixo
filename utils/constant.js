import { ForgotPassword } from "../screens/ForgotPassword";
import { Login } from "../screens/Login";
import { Main } from "../screens/Main";
import { NewPassword } from "../screens/NewPassword";
import { Profile } from "../screens/Profile";
import { SignUp } from "../screens/SignUp";
import { Verification } from "../screens/Verification";

export const DEFAULT_IMAGE = "https://placehold.co/600x600/png";
export const SCREEN_MAP = {
  defaultScreen: "ProfileScreen",
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
    {
      name: "ProfileScreen",
      component: Profile,
    },
  ],
};
export const MINIMUM_REGISTRATION_AGE = 13;
export const VERIFICATION_CELL_COUNT = 6;
export const MAXIMUM_NUMBER_OF_CHARACTERS_FOR_MESSAGE = 40;

export const POST_ACTIONS = [
  { iconName: "md-chatbubbles-outline", name: "commnet" },
  {
    iconName: "md-bonfire-outline",
    name: "Fire",
  },
  { iconName: "send-outline", name: "Send" },
];
