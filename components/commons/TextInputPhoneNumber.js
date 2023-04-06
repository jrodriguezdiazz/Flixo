import { useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";

export const TextInputPhoneNumber = () => {
  // eslint-disable-next-line no-unused-vars
  const [valid, setValid] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef(null);
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="DO"
        layout="first"
        onChangeText={(text) => {
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        withDarkTheme
        withShadow
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const checkValid = phoneInput.current?.isValidNumber(value);
          setValid(checkValid ? checkValid : false);
        }}
      ></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
