import { useEffect, useState } from "react";
import { database } from "../firebase";

export const useNotifications = (userId) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const querySnapshot = await database
          .collection("users")
          .doc(userId)
          .collection("notifications")
          .orderBy("date", "desc")
          .get();

        const updatedNotifications = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setNotifications(updatedNotifications);
        setLoading(false);
      } catch (error) {
        console.error("Error getting notifications:", error);
        setLoading(false);
      }
    };

    getNotifications();
  }, [userId]);

  return { notifications, loading };
};
