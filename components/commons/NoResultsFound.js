import { Image, StyleSheet, Text, View } from "react-native";

export const NoResultsFound = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>User Not Found</Text>
      <Image
        style={styles.image}
        source={require("../../assets/Flixo-Logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: "#444",
  },
});
