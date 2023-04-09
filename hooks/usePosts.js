import { useEffect, useState } from "react";
import { database } from "../firebase";

export const useAllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
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
        };
      });

      const allPosts = await Promise.all(postPromises);
      console.log(allPosts);
      setPosts(allPosts);
    };

    getAllPosts();
  }, []);

  return posts;
};
