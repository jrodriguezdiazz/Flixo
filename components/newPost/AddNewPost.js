import { StyleSheet, View } from "react-native";
import { FormikPostUploader } from "./FormikPostUploader";

export const AddNewPost = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <FormikPostUploader />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "flex-start",
  },
});
