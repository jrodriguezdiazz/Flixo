import { useEffect, useState } from "react";
import { database } from "../firebase";

export const useNotifications = (userId) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection("users")
      .doc(userId)
      .collection("notifications")
      .orderBy("date", "desc")
      .onSnapshot((querySnapshot) => {
        const updatedNotifications = [];

        querySnapshot.forEach((doc) => {
          updatedNotifications.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setNotifications(updatedNotifications);
      });

    return () => unsubscribe();
  }, [userId, notifications]);

  return notifications;
};
