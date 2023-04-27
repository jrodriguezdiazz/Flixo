import {
  off,
  onValue,
  push,
  ref,
  serverTimestamp,
  set,
} from "firebase/database";
import { database } from "./firebase";

export const watchMessage = async (currentUserUid, otherUserUid, callback) => {
  const docId =
    otherUserUid > currentUserUid
      ? currentUserUid + "-" + otherUserUid
      : otherUserUid + "-" + currentUserUid;

  const messagesRef = ref(database, `chats/${docId}/messages`);

  const handleSnapshot = (snapshot) => {
    const messagesData = snapshot.val();
    const messages = [];

    for (let key in messagesData) {
      const messageData = messagesData[key];
      messages.push({
        _id: key,
        text: messageData.text,
        createdAt: new Date(messageData.createdAt),
        user: {
          _id: messageData.sentBy,
        },
      });
    }

    messages.sort((a, b) => b.createdAt - a.createdAt);
    callback(messages);
  };

  onValue(messagesRef, handleSnapshot);

  return () => {
    off(messagesRef, "value", handleSnapshot);
  };
};

export const sendMessage = async (currentUserUid, otherUserUid, message) => {
  try {
    const docId =
      otherUserUid > currentUserUid
        ? currentUserUid + "-" + otherUserUid
        : otherUserUid + "-" + currentUserUid;

    const newMessage = {
      text: message.text,
      sentBy: currentUserUid,
      createdAt: serverTimestamp(),
    };

    const newMessageRef = push(ref(database, `chats/${docId}/messages`));
    await set(newMessageRef, newMessage);
  } catch (e) {
    console.log(e);
  }
};
