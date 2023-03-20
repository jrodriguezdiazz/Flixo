import IconReactNative from "react-native-vector-icons/Ionicons";

export const Icon = ({ iconName, name }) => {
  return (
    <IconReactNative.Button
      name={iconName}
      color="#000"
      backgroundColor={"#f0f0f0ff"}
    >
      {name}
    </IconReactNative.Button>
  );
};
