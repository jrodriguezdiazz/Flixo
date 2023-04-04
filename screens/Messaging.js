import { ScrollView, View } from "react-native";
import { RowItem } from "../components/commons/RowItem";
import { MESSAGES } from "../data/messages";

export const MessagingScreen = () => {
  return (
    <View>
      <ScrollView>
        {MESSAGES.map((messages) => (
          <View key={messages.id}>
            <RowItem info={messages} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
