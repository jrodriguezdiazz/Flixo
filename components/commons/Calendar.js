import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { getMinimumRegistrationAge } from "../../utils/getAviabledateToRegister";

export const Calendar = () => {
  const minimumRegistrationAge = getMinimumRegistrationAge();
  const [startDate, setStartDate] = useState(minimumRegistrationAge);
  const [showStartDate, setShowStartDate] = useState(false);
  const onChangeStartDate = (event, selectedDate) => {
    setShowStartDate(false);
    setStartDate(selectedDate);
  };

  return (
    <View style={styles.container}>
      <RNPTextInput
        label="Birthday"
        value={startDate.toUTCString().slice(0, 16)}
        mode={"outlined"}
        theme={{ roundness: 4 }}
        outlineColor={"transparent"}
        right={
          <RNPTextInput.Icon
            icon="calendar"
            onPress={() => setShowStartDate(true)}
          />
        }
      />
      {showStartDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={startDate}
          mode="date"
          is24Hour={true}
          onChange={onChangeStartDate}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
