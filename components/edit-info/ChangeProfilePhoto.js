import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../utils/constant";

export const ChangeProfilePhoto = () => {
  const { colors } = theme;
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.label(colors)}>Change Profile Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  label: ({ sunflower }) => ({
    color: sunflower,
  }),
});
