import { StyleSheet, View } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { Button } from "../commons/Button";
import { TextInput } from "../commons/TextInput";

export const NewPasswordForm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput
        label={"Enter New Password"}
        autoCapitalize={"none"}
        autoCorrect={false}
        secureTextEntry={true}
        textContentType={"password"}
        right={<RNPTextInput.Icon icon="eye" />}
      />
      <TextInput
        label={"Confirm Password"}
        autoCapitalize={"none"}
        autoCorrect={false}
        secureTextEntry={true}
        textContentType={"password"}
        right={<RNPTextInput.Icon icon="eye" />}
      />
      <Button
        label={"Submit"}
        icon={"send"}
        action={() => navigation.push("HomeScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
});
