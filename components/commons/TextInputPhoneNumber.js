import { useField } from "formik";
import { useRef } from "react";
import { StyleSheet, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { ErrorMessage } from "../commons/ErrorMessage";

export const TextInputPhoneNumber = ({ name, ...props }) => {
  const phoneInput = useRef(null);
  const [field, meta, helpers] = useField(name);

  return (
    <View style={styles.container}>
      <PhoneInput
        mode="outlined"
        ref={phoneInput}
        defaultValue={field.value}
        defaultCode="DO"
        layout="first"
        onChangeFormattedText={(phoneNumber) => {
          helpers.setValue(phoneNumber);
        }}
        {...props}
      />
      {meta.touched && meta.error && <ErrorMessage message={meta.error} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
