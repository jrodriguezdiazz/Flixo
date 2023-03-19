import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Layout } from "../components/layout/Layout";
import { Navbar } from "../components/navigation/Navbar";

export const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Layout>
        <Navbar />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "row",
  },
});
