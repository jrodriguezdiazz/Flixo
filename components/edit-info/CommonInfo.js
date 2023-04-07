import { StyleSheet, View } from "react-native";
import { Button } from "../commons/Button";
import { RowInfo } from "./RowInfo";
import { SectionInfo } from "./SectionInfo";

export const CommonInfo = () => {
  return (
    <View style={styles.container}>
      <SectionInfo title={"Common Info"}>
        <RowInfo label={"Name"} />
        <RowInfo label={"Username"} />
        <RowInfo label={"Bio"} />
      </SectionInfo>
      <SectionInfo title={"Private Information"}>
        <RowInfo label={"Email"} />
        <RowInfo label={"Phone"} />
        <RowInfo label={"Gender"} />
      </SectionInfo>
      <View style={styles.button}>
        <Button
          action={() => ({})}
          icon={"send-clock"}
          label={"Save"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    marginVertical: 30,
  },
  button: {
    alignItems: "center",
    marginTop: 15,
  },
});
