import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { theme } from "../../utils/constant";
import { ErrorMessage } from "../commons/ErrorMessage";

export const TextInput = ({
  isOutlineTransparent = false,
  isValid = true,
  error,
  secureTextEntry,
  ...props
}) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);
  const { colors } = theme;
  return (
    <View style={styles.container}>
      <RNPTextInput
        theme={styles.inputTheme(colors, isValid)}
        outlineColor={isOutlineTransparent ? "transparent" : null}
        mode={"outlined"}
        secureTextEntry={isSecureTextEntry}
        right={
          secureTextEntry && (
            <RNPTextInput.Icon
              icon={isSecureTextEntry ? "eye" : "eye-off"}
              onPress={() => {
                setIsSecureTextEntry(!isSecureTextEntry);
              }}
            />
          )
        }
        {...props}
      />
      {error && <ErrorMessage message={error} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  inputTheme: ({ white, sunflower, error }, isValid) => ({
    roundness: 4,
    colors: {
      placeholder: white,
      primary: isValid ? sunflower : error,
      underlineColor: "transparent",
    },
  }),
});
