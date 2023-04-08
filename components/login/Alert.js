import { Alert as AlertRN } from "react-native";

export const Alert = ({ navigation }) => {
  AlertRN.alert(
    "🔥 My Lord...",
    "Your password or email is not correct...\n\n What would you like to do next 👀?",
    [
      {
        text: "Reset Password",
        onPress: () => navigation.push("ForgotPasswordScreen"),
      },
      {
        text: "Sign Up",
        onPress: () => navigation.push("SignUpScreen"),
      },
    ]
  );
};
