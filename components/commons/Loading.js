import { ActivityIndicator, MD2Colors } from "react-native-paper";

export const Loading = () => (
  <ActivityIndicator
    animating={true}
    color={MD2Colors.red800}
  />
);
