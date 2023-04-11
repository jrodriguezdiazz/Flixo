import { useEffect, useState } from "react";
import { database } from "../firebase";

export const useUserById = (userId) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserById = async () => {
      const userDoc = await database.collection("users").doc(userId).get();
      const userData = userDoc.data();

      if (userData) {
        const postsQuerySnapshot = await database
          .collection(`users/${userId}/posts`)
          .get();
        const posts = [];

        postsQuerySnapshot.forEach((doc) => {
          const postData = doc.data();
          posts.push({
            id: doc.id,
            ...postData,
            username: userData.username,
            bio: userData.bio,
            profilePicture: userData.profilePicture,
          });
        });

        setUserData({
          ...userData,
          posts,
        });
      } else {
        setUserData(null);
      }
    };

    fetchUserById();
  }, [userId]);

  return userData;
};
