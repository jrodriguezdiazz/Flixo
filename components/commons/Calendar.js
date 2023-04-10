import DateTimePicker from "@react-native-community/datetimepicker";
import { useFormikContext } from "formik";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { theme } from "../../utils/constant";
import { ErrorMessage } from "../commons/ErrorMessage";

export const Calendar = ({ errorMessage, value, name, ...props }) => {
  const formikProps = useFormikContext();
  const [showStartDate, setShowStartDate] = useState(false);
  const onChangeStartDate = (event, selectedDate) => {
    setShowStartDate(false);
    formikProps.setFieldValue(name, selectedDate);
  };
  const { colors } = theme;
  return (
    <View style={styles.container}>
      <RNPTextInput
        label="Birthday"
        mode={"outlined"}
        theme={styles.inputTheme(colors)}
        outlineColor={"transparent"}
        right={
          <RNPTextInput.Icon
            icon="calendar"
            onPress={() => setShowStartDate(true)}
          />
        }
        {...props}
        value={value.toUTCString().slice(0, 16)}
      />
      {showStartDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={value}
          mode="date"
          is24Hour={true}
          onChange={onChangeStartDate}
        />
      )}
      {errorMessage && <ErrorMessage message={errorMessage} />}
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
