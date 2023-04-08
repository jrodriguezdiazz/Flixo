import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { theme, VERIFICATION_CELL_COUNT } from "../../utils/constant";
import { Button } from "../commons/Button";

export const VerificationForm = ({ navigation }) => {
  const { colors } = theme;
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: VERIFICATION_CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verification</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={VERIFICATION_CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <TextInput
            key={index}
            style={[styles.cell(colors), isFocused && styles.focusCell(colors)]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </TextInput>
        )}
      />
      <Button
        label={"Verify"}
        icon={"send-outline"}
        action={() => navigation.push("NewPasswordScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
  },
  codeFieldRoot: {
    marginVertical: 20,
    marginHorizontal: 40,
  },
  cell: ({ sunflower }) => ({
    width: 35,
    height: 35,
    lineHeight: 30,
    fontSize: 20,
    borderWidth: 0.5,
    borderColor: sunflower,
    textAlign: "center",
  }),
  focusCell: ({ black }) => ({
    borderColor: black,
  }),
});
