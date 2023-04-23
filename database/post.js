import {
  equalTo,
  get,
  increment,
  orderByChild,
  push,
  query,
  ref,
  set,
  update,
} from "firebase/database";
import moment from "moment/moment";
import { database } from "./firebase";
import { addNotification, findUserById } from "./user";

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
        await update(postRef, {
          fire: [...fire, userId],
        });
        await addNotification(postOwnerId, {
          username,
          header: `${user.username} fired your post.`,
          profilePicture: user.profilePicture,
          goTo: user.userId,
          date: new Date().toISOString(),
          seen: false,
        });
      } else {
        fire.splice(userIndex, 1);
        await update(postRef, {
          fire: fire,
        });
      }
    } else {
      console.log("No se encontró ningún post con ese ID");
    }
  } catch (error) {
    console.error("Error al añadir/quitar fire del post:", error);
  }
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
