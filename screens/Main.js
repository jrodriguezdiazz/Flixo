import { StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/navigation/Header";
import { Navbar } from "../components/navigation/Navbar";

export const Main = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Divider
        width={1}
        orientation={"vertical"}
      />
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
