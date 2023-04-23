import { off, onValue, push, ref, set } from "firebase/database";
import { database } from "./firebase";

export const watchUserNotifications = (userId, callback) => {
  const userNotificationsRef = ref(database, `users/${userId}/notifications`);

  const listener = onValue(userNotificationsRef, (snapshot) => {
    if (snapshot.exists()) {
      const orderedNotifications = Object.values(snapshot.val()).sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      callback(orderedNotifications);
    } else {
      callback([]);
    }
  });

  return () => {
    off(userNotificationsRef, "value", listener);
  };
};

export const addNotification = async (userId, notification) => {
  try {
    const notificationsRef = ref(database, `users/${userId}/notifications`);
    const newNotificationRef = push(notificationsRef);
    const notificationWithId = {
      ...notification,
      id: newNotificationRef.key,
    };
    await set(newNotificationRef, notificationWithId);
    console.log("Notificación añadida exitosamente!");
  } catch (error) {
    console.error("Error al añadir la notificación:", error);
  }
};
