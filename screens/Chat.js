import { useContext, useEffect, useState } from "react";
import { Bubble, GiftedChat, InputToolbar } from "react-native-gifted-chat";
import { AuthenticatedUserContext } from "../App";
import { sendMessage, watchMessage } from "../database/message";
import { theme } from "../utils/constant";

export const Chat = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const { userId } = route.params;
  const { user } = useContext(AuthenticatedUserContext);
  const { colors } = theme;

  useEffect(async () => {
    const unsubscribe = await watchMessage(user.uid, userId, setMessages);
    return () => unsubscribe();
  }, []);

  const onSend = async (messagesArray) => {
    const message = messagesArray[0];
    await sendMessage(user.uid, userId, message);
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: user.uid,
      }}
      renderBubble={(props) => {
        return (
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: colors.sunflower,
              },
            }}
          />
        );
      }}
      renderInputToolbar={(props) => {
        return (
          <InputToolbar
            {...props}
            containerStyle={{
              borderTopWidth: 1.5,
              borderTopColor: colors.flax,
            }}
            textInputStyle={{ color: "black" }}
          />
        );
      }}
    />
  );
};
