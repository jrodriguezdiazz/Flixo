import {
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  MEASUREMENT_ID,
  MESSAGING_SENDER_ID,
  PROJECT_ID,
  STORAGE_BUCKET,
} from "@env";
import auth from "@react-native-firebase/auth";
import firebase from "firebase/compat";
import moment from "moment";
import { DEFAULT_IMAGE } from "./utils/constant";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const database = firebase.firestore();

export const registerUser = async (values) => {
  const {
    username,
    password,
    firstName,
    lastName,
    email,
    phoneNumber,
    birthday,
  } = values;

  const userCredential = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);

  const userRef = database.collection("users").doc(userCredential.user.uid);

  await userCredential.user.updateProfile({
    photoURL: DEFAULT_IMAGE,
    displayName: `${firstName} ${lastName}`,
  });

  await userRef.set({
    userId: userCredential.user.uid,
    bio: "",
    fullName: `${firstName} ${lastName}`,
    profilePicture: DEFAULT_IMAGE,
    statics: [
      {
        label: "Post",
        number: 0,
      },
      {
        label: "Followers",
        number: 0,
      },
      {
        label: "Following",
        number: 0,
      },
    ],
    username,
    password,
    firstName,
    lastName,
    email,
    phoneNumber,
    birthday,
  });

  return await getUserById(userCredential.user.uid);
};

export const registerUserWithGoogle = async () => {
  const userCredential = await firebase.auth().signInWithPopup(googleProvider);

  return userCredential.user;
};
export const loginUser = async (values) => {
  const { email, password } = values;

  const userCredential = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);

  return userCredential.user;
};

export const loginUserWithGoogle = async () => {
  const userCredential = await firebase.auth().signInWithPopup(googleProvider);

  return userCredential.user;
};

export const getUserById = async (userId) => {
  const userDoc = await firebase
    .firestore()
    .collection("users")
    .doc(userId)
    .get();
  const userData = userDoc.data();

  if (userData) {
    const postsQuerySnapshot = await firebase
      .firestore()
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
        userId: userData.userId,
      });
    });

    return {
      ...userData,
      posts,
    };
  } else {
    return null;
  }
};

export const sendVerificationEmail = async (email) => {
  await auth().sendPasswordResetEmail(email);
};

export const confirmPasswordReset = async (code, newPassword) => {
  try {
    await auth().confirmPasswordReset(code, newPassword);
    console.log("Password reset successful");
  } catch (error) {
    console.log("Error resetting password:", error);
  }
};

export const updateUserInfo = async (user) => {
  const userRef = firebase.firestore().collection("users").doc(user.id);
  await userRef.update({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    bio: user.bio,
    email: user.email,
    phone: user.phone,
    birthday: user.birthday,
  });
};

export const checkIfFieldValueExistsInUsersCollection = async (
  fields,
  value
) => {
  try {
    const usersRef = database.collection("users");
    const querySnapshot = await usersRef.where(fields, "==", value).get();

    return querySnapshot.empty;
  } catch (error) {
    console.error(
      "Error checking if field value exists in users collection:",
      error
    );
    return false;
  }
};

export const addPostByForm = async (post, userId) => {
  try {
    const userRef = database.collection("users").doc(userId);
    const userPostsRef = userRef.collection("posts");
    const userDoc = await userRef.get();

    await userPostsRef.add({
      ...post,
      comments: [],
      date: moment().format(),
      fire: [],
    });

    const statics = userDoc.data().statics;
    const updatedStatics = statics.map((item) => {
      if (item.label === "Posts") {
        return {
          ...item,
          number: item.number + 1,
        };
      }
      return item;
    });

    await userRef.update({
      statics: updatedStatics,
    });
  } catch (error) {
    console.error("Error adding post:", error);
  }
};

export const addFireUser = async (postId, postOwnerId, userId) => {
  const postRef = firebase
    .firestore()
    .collection("users")
    .doc(postOwnerId)
    .collection("posts")
    .doc(postId);

  const postDoc = await postRef.get();
  if (!postDoc.exists) {
    console.log("Post does not exist");
    return;
  }

  const post = postDoc.data();
  const userIdx = post.fire.indexOf(userId);

  if (userIdx === -1) {
    await postRef.update({
      fire: firebase.firestore.FieldValue.arrayUnion(userId),
    });
    await addNotification(postId, postOwnerId, userId);
  } else {
    await postRef.update({
      fire: firebase.firestore.FieldValue.arrayRemove(userId),
    });
  }
};

export const addNotification = async (postId, ownerId, userId) => {
  const ownerPostRef = firebase.firestore().collection("users").doc(ownerId);
  const userData = await getUserById(userId);

  const notificationData = {
    date: moment().format(),
    user: userData.username,
    profilePicture: userData.profilePicture,
    header: `${userData.username} fire your post`,
    seen: false,
    postId,
  };

  const notificationRef = ownerPostRef.collection("notifications").doc();
  await notificationRef.set(notificationData);
};

const addFollowing = async (myUserId, followerId) => {
  try {
    const userDocRef = database.collection("users").doc(myUserId);
    const userDoc = await userDocRef.get();

    if (!userDoc.exists) {
      console.error("User document does not exist");
      return;
    }

    const following = userDoc.data().following || [];

    if (following.includes(followerId)) {
      await userDocRef.update({
        following: firebase.firestore.FieldValue.arrayRemove(followerId),
      });
      await decrementStaticsCounter(myUserId, "Following");
    } else {
      await userDocRef.update({
        following: firebase.firestore.FieldValue.arrayUnion(followerId),
      });
      await incrementStaticsCounter(myUserId, "Following");
    }
  } catch (error) {
    console.error("Error updating following status:", error);
  }
};

const addFollower = async (myUserId, followerId) => {
  try {
    const userDocRef = database.collection("users").doc(followerId);
    const userDoc = await userDocRef.get();

    if (!userDoc.exists) {
      console.error("User document does not exist");
      return;
    }

    const followers = userDoc.data().followers || [];

    if (followers.includes(myUserId)) {
      await userDocRef.update({
        followers: firebase.firestore.FieldValue.arrayRemove(myUserId),
      });
      await decrementStaticsCounter(followerId, "Followers");
    } else {
      await userDocRef.update({
        followers: firebase.firestore.FieldValue.arrayUnion(myUserId),
      });
      await incrementStaticsCounter(followerId, "Followers");
    }
  } catch (error) {
    console.error("Error updating follower status:", error);
  }
};

const incrementStaticsCounter = async (userId, label) => {
  try {
    const userDocRef = database.collection("users").doc(userId);
    const userDoc = await userDocRef.get();

    if (!userDoc.exists) {
      console.error("User document does not exist");
      return;
    }

    const statics = userDoc.data().statics || [];

    const postStatics = statics.find((s) => s.label === label);
    if (postStatics) {
      await userDocRef.update({
        [`statics.${statics.indexOf(postStatics)}.number`]:
          postStatics.number + 1,
      });
    } else {
      await userDocRef.update({
        statics: firebase.firestore.FieldValue.arrayUnion({
          label: label,
          number: 1,
        }),
      });
    }
  } catch (error) {
    console.error("Error incrementing statics counter:", error);
  }
};

const decrementStaticsCounter = async (userId, label) => {
  try {
    const userDocRef = database.collection("users").doc(userId);
    const userDoc = await userDocRef.get();

    if (!userDoc.exists) {
      console.error("User document does not exist");
      return;
    }

    const statics = userDoc.data().statics || [];

    const postStatics = statics.find((s) => s.label === label);
    if (postStatics) {
      await userDocRef.update({
        [`statics.${statics.indexOf(postStatics)}.number`]:
          postStatics.number - 1,
      });
    }
  } catch (error) {
    console.error("Error decrementing statics counter:", error);
  }
};

export const updateFollowStatus = async (myUserId, followerId) => {
  await addFollowing(myUserId, followerId);
  await addFollower(myUserId, followerId);
};

export default firebase;
