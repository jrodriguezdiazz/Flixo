import { StyleSheet, View } from "react-native";
import { Divider } from "react-native-elements";

export const PhotoScreen = () => {
  return (
    <View style={styles.container}>
      <Divider
        width={1}
        orientation={"vertical"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});
