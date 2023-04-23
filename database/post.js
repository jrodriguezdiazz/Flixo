import {
  equalTo,
  get,
  increment,
  off,
  onValue,
  orderByChild,
  push,
  query,
  ref,
  set,
  update,
} from "firebase/database";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { database } from "./firebase";
import { addNotification } from "./notification";
import { findUserById } from "./user";

export const addPost = async (user, caption, imageURL) => {
  try {
    const postRef = push(ref(database, "posts"));
    const postId = postRef.key;

    const userRef = ref(database, `users/${user.userId}`);
    await update(userRef, {
      numberOfPosts: increment(1),
    });

    await set(postRef, {
      postId,
      userId: user.userId,
      username: user.username,
      profilePicture: user.profilePicture,
      bio: user.bio,
      caption,
      imageURL,
      date: moment().format(),
      comments: [],
      fire: [],
    });

    return postId;
  } catch (error) {
    console.error("Error al añadir el post:", error);
    return null;
  }
};

// TODO: CHECK
export const useRealtimeComments = (postId, visible) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (visible) {
      const postCommentsRef = ref(database, `posts/${postId}/comments`);
      const orderedCommentsQuery = query(postCommentsRef, orderByChild("date"));

      const handleNewComments = (snapshot) => {
        if (snapshot.exists()) {
          const commentsObj = snapshot.val();
          const orderedComments = Object.values(commentsObj).sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
          setComments(orderedComments);
        } else {
          console.log("No se encontraron comentarios para este post");
          setComments([]);
        }
      };

      onValue(orderedCommentsQuery, handleNewComments);

      return () => {
        off(orderedCommentsQuery, "value", handleNewComments);
      };
    }
  }, [visible, postId]);

  return comments;
};

export const addCommentToPost = async (postId, comment) => {
  try {
    const postRef = ref(database, `posts/${postId}`);
    const postSnapshot = await get(postRef);
    if (postSnapshot.exists()) {
      const post = postSnapshot.val();
      const newComments = post.comments
        ? [...post.comments, comment]
        : [comment];
      await update(postRef, { comments: newComments });
    } else {
      console.log("No se encontró ningún post con ese ID");
    }
  } catch (error) {
    console.error("Error al añadir comentario al post:", error);
  }
};

export const toggleFire = async (post, userId) => {
  try {
    const user = await findUserById(userId);
    const { postId, userId: postOwnerId, username } = post;
    const postRef = ref(database, `posts/${postId}`);
    const postSnapshot = await get(postRef);

    if (postSnapshot.exists()) {
      const postData = postSnapshot.val();
      const { fire = [] } = postData;

      const userIndex = fire.indexOf(userId);
      if (userIndex === -1) {
        const newFire = fire ? [...fire, userId] : [userId];

        await update(postRef, {
          fire: newFire,
        });
        await addNotification(postOwnerId, {
          username,
          header: `${user.username} fired your post.`,
          profilePicture: user.profilePicture,
          userId: user.userId,
          date: new Date().toISOString(),
          seen: false,
        });
        return newFire.length;
      } else {
        const newFire = postData.fire.filter((uid) => uid !== userId);
        await update(postRef, { fire: newFire });
        return newFire.length;
      }
    } else {
      console.log("No se encontró ningún post con ese ID");
      return post.fire?.length || 0;
    }
  } catch (error) {
    console.error("Error al añadir/quitar fire del post:", error);
  }
};

export const getPostStatics = (postId, visible) => {
  const [postData, setPostData] = useState({
    numberOfComments: 0,
    numberOfFire: 0,
  });

  useEffect(() => {
    const postRef = ref(database, `posts/${postId}`);

    const handleValueChange = (snapshot) => {
      if (snapshot.exists()) {
        const post = snapshot.val();
        setPostData({
          numberOfComments: post.comments?.length || 0,
          numberOfFire: post.fire?.length || 0,
        });
      }
    };

    const unsubscribe = onValue(postRef, handleValueChange, {
      onlyOnce: false,
    });

    return () => {
      unsubscribe();
    };
  }, [postId, visible]);
  return postData;
};

export const getPosts = async (userId = null) => {
  try {
    const postsRef = ref(database, "posts");
    let postsQuery;

    if (userId) {
      postsQuery = query(postsRef, orderByChild("userId"), equalTo(userId));
    } else {
      postsQuery = postsRef;
    }

    const postsSnapshot = await get(postsQuery);

    if (postsSnapshot.exists()) {
      return postsSnapshot.val();
    } else {
      console.log("No se encontraron posts");
      return {};
    }
  } catch (error) {
    console.error("Error al buscar posts:", error);
    return {};
  }
};
