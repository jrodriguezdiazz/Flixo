import { StyleSheet, View } from "react-native";
import { useAuthStore } from "../../stores/useAuthStore";
import { Button } from "../commons/Button";

export const Logout = ({ navigation }) => {
  const { logout } = useAuthStore((state) => ({
    logout: state.logout,
  }));

  const handleLogout = async () => {
    await logout({ navigation });
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Button
          label={"Log out"}
          icon={"logout"}
          action={handleLogout}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "stretch",
  },
  wrapper: {
    width: "55%",
    marginTop: 15,
  },
});
