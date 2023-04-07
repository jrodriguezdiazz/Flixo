import { StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";

export const SectionInfo = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Divider
        width={1}
        orientation={"vertical"}
      />
      <Text style={styles.sectionHeader}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  sectionHeader: {
    margin: 15,
    fontStyle: "italic",
  },
});
