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
    id: userCredential.user.uid,
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

  return userCredential.user;
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

    return !querySnapshot.empty;
  } catch (error) {
    console.error(
      "Error checking if field value exists in users collection:",
      error
    );
    return false;
  }
};

export default firebase;
