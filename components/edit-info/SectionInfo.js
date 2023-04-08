import { StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import { theme } from "../../utils/constant";

export const SectionInfo = ({ title, children }) => {
  const { colors } = theme;
  return (
    <View style={styles.container}>
      <Divider
        width={1}
        orientation={"vertical"}
        style={styles.divider}
      />
      <Text style={styles.sectionHeader(colors)}>{title}</Text>
      {children}
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
  sectionHeader: ({ sunflower }) => ({
    fontStyle: "italic",
    color: sunflower,
    marginTop: 20,
    fontSize: 15,
  }),
  divider: {
    marginTop: 15,
  },
});
