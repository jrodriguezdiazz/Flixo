import { View } from "react-native";
import { Header } from "../home/Header";

export const Layout = ({ children }) => {
  return (
    <View>
      <Header />
      {children}
    </View>
  );
};
