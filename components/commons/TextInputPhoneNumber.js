import { useRef } from "react";
import { StyleSheet, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { ErrorMessage } from "../commons/ErrorMessage";

export const TextInputPhoneNumber = ({
  onChangeText,
  errorMessage,
  value,
  name,
  ...props
}) => {
  const phoneInput = useRef(null);

  return (
    <View style={styles.container}>
      <PhoneInput
        mode={"outlined"}
        ref={phoneInput}
        defaultValue={value}
        defaultCode="DO"
        layout="first"
        onChangeFormattedText={(phoneNumber) => {
          onChangeText(phoneNumber, name);
        }}
        {...props}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
