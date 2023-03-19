import { StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/home/Header";
import { Navbar } from "../components/navigation/Navbar";

export const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Divider
        width={1}
        orientation={"vertical"}
      />
      <Navbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
