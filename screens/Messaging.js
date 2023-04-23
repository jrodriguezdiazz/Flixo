import { ScrollView, View } from "react-native";
import { RowItem } from "../components/commons/RowItem";
import { MESSAGES } from "../data/messages";

export const MessagingScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        {MESSAGES.map((messages) => (
          <View key={messages.id}>
            <RowItem
              info={messages}
              navigation={navigation}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
