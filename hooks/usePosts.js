import { useEffect, useState } from "react";
import { database } from "../firebase";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postSnapshot = await database.collectionGroup("posts").get();

        const posts = await Promise.all(
          postSnapshot.docs.map(async (postDoc) => {
            const postData = postDoc.data();
            console.log(postData);
            // Get user information
            const userDoc = await database
              .collection("users")
              .doc(postData.username)
              .get();

            const userData = userDoc.data();

            const comments = await Promise.all(
              postData.comments.map(async (comment) => {
                const commentUserDoc = await database
                  .collection("users")
                  .doc(comment.userId)
                  .get();

                const commentUserData = commentUserDoc.data();

                return {
                  user: commentUserData.username,
                  caption: comment.caption,
                };
              })
            );

            return {
              id: postDoc.id,
              username: userData.username,
              profilePicture: userData.profilePicture,
              imageURL: postData.imageURL,
              date: postData.date,
              likes: postData.likes,
              caption: postData.caption,
              comments,
            };
          })
        );

        setPosts(posts);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, isLoading, error };
};
