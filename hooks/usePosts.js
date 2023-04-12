import { useEffect, useState } from "react";
import { database } from "../firebase";

export const useAllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postSnapshots = await database.collectionGroup("posts").get();
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
          userId: userData.userId,
        };
      });

      Promise.all(postPromises).then((allPosts) => {
        const sortedPosts = allPosts.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
        setPosts(sortedPosts);
      });
    };

    fetchPosts();
  }, []);

  return posts;
};
