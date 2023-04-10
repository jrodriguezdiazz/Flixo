import { useEffect, useState } from "react";
import { database } from "../firebase";

export const useAllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collectionGroup("posts")
      .onSnapshot((postSnapshots) => {
        const postPromises = postSnapshots.docs.map(async (postDoc) => {
          const postData = postDoc.data();

          const userDoc = await postDoc.ref.parent.parent.get();
          const userData = userDoc.data();

          return {
            id: postDoc.id,
            ...postData,
            username: userData.username,
            bio: userData.bio,
            profilePicture: userData.profilePicture,
          };
        });

        Promise.all(postPromises).then((allPosts) => {
          const sortedPosts = allPosts.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          });
          setPosts(sortedPosts);
        });
      });

    return () => {
      unsubscribe();
    };
  }, []);
  return posts;
};
