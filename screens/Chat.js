import { off, onValue, push, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { database } from "../database/firebase";

export const Chat = ({ route, myUserId }) => {
  const [messages, setMessages] = useState([]);
  const user = route.params.user;

  useEffect(() => {
    const messagesRef = ref(database, `chats/${myUserId}/${user.id}/messages`);
    const handleMessagesUpdate = (snapshot) => {
      if (snapshot.exists()) {
        const messagesData = Object.values(snapshot.val()).reverse();
        setMessages(messagesData);
      } else {
        setMessages([]);
      }
    };

    const messagesListener = onValue(messagesRef, handleMessagesUpdate);

    return () => {
      off(messagesRef, "value", messagesListener);
    };
  }, [user.id, myUserId]);

  const onSend = async (newMessages = []) => {
    const updates = {};
    newMessages.forEach((message) => {
      const newMessageRef = push(
        ref(database, `chats/${myUserId}/${user.id}/messages`)
      );
      message._id = newMessageRef.key;
      updates[`chats/${myUserId}/${user.id}/messages/${message._id}`] = message;
      updates[`chats/${user.id}/${myUserId}/messages/${message._id}`] = message;
    });

    await database.ref().update(updates);
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{ _id: myUserId }}
    />
  );
};
