import DateTimePicker from "@react-native-community/datetimepicker";
import { useField } from "formik";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { theme } from "../../utils/constant";
import { ErrorMessage } from "../commons/ErrorMessage";

export const Calendar = ({ name, ...props }) => {
  const [showStartDate, setShowStartDate] = useState(false);
  const [field, meta, helpers] = useField(name);

  const onChangeStartDate = (event, selectedDate) => {
    setShowStartDate(false);
    helpers.setValue(selectedDate);
  };

  const { colors } = theme;

  return (
    <View style={styles.container}>
      <RNPTextInput
        label="Birthday"
        mode="outlined"
        theme={styles.inputTheme(colors)}
        outlineColor="transparent"
        right={
          <RNPTextInput.Icon
            icon="calendar"
            onPress={() => setShowStartDate(true)}
          />
        }
        {...props}
        {...field}
        value={field.value.toUTCString().slice(0, 16)}
      />
      {showStartDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={field.value}
          mode="date"
          is24Hour={true}
          onChange={onChangeStartDate}
        />
      )}
      {meta.touched && meta.error && <ErrorMessage message={meta.error} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputTheme: ({ white, sunflower }) => ({
    roundness: 4,
    colors: {
      placeholder: white,
      primary: sunflower,
      underlineColor: "transparent",
    },
  }),
});
