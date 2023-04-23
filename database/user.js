import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  endAt,
  get,
  off,
  onValue,
  orderByChild,
  query,
  ref,
  remove,
  set,
  startAt,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import { auth, database } from "./firebase";
import { addNotification } from "./notification";
import { getPosts } from "./post";

export const createUser = async (values) => {
  try {
    const {
      username,
      password,
      firstName,
      lastName,
      email,
      phoneNumber,
      birthday,
    } = values;

    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const userRef = ref(database, `users/${user.uid}`);

    await set(userRef, {
      userId: user.uid,
      bio: "",
      fullName: `${firstName} ${lastName}`,
      fullNameLowerCase: `${firstName} ${lastName}`.toLowerCase(),
      profilePicture: "DEFAULT_IMAGE",
      username,
      usernameLowerCase: username.toLowerCase(),
      firstName,
      lastName,
      email,
      phoneNumber,
      birthday,
      numberOfPosts: 0,
      notifications: [],
    });
    console.log("createUser ✅");
  } catch (error) {
    console.error("Error al guardar los datos del usuario:", error);
  }
};

export const updateUser = async (userId, updatedUserData) => {
  try {
    const userRef = ref(database, `users/${userId}`);
    console.log("updateUser ✅");
    return update(userRef, updatedUserData);
  } catch (error) {
    console.error("Error al actualizar los datos del usuario:", error);
  }
};

export const findUserById = async (userId) => {
  try {
    const userRef = ref(database, `users/${userId}`);
    const userSnapshot = await get(userRef);
    if (userSnapshot.exists()) {
      const userData = userSnapshot.val();

      return {
        ...userData,
        posts: await getPosts(userId),
      };
    } else {
      console.log("No se encontró ningún usuario con ese ID");
      return null;
    }
  } catch (error) {
    console.error("Error al buscar usuario por ID:", error);
    return null;
  }
};

export const findUserByName = async (name) => {
  try {
    const usersRef = ref(database, "users");
    const usersSnapshot = await get(usersRef);

    if (!usersSnapshot.exists()) {
      console.log("No se encontraron usuarios");
      return [];
    }

    const users = [];

    usersSnapshot.forEach((user) => {
      const userData = user.val();

      if (
        userData.fullName.toLowerCase().includes(name.toLowerCase()) ||
        userData.username.toLowerCase().includes(name.toLowerCase())
      ) {
        users.push({
          userId: user.key,
          ...userData,
        });
      }
    });

    return users;
  } catch (error) {
    console.error("Error al buscar usuarios:", error);
    return [];
  }
};

export const addFollower = async (userId, followerId) => {
  const userRef = ref(database, `users/${userId}`);
  const followerRef = ref(database, `users/${followerId}`);
  const userSnapshot = await get(userRef);
  const followerSnapshot = await get(followerRef);

  if (followerSnapshot.exists()) {
    const follower = followerSnapshot.val();
    const user = userSnapshot.val();

    const followingRef = ref(
      database,
      `users/${userId}/following/${followerId}`
    );
    await set(followingRef, {
      username: follower.username,
      profilePicture: follower.profilePicture,
    });

    const followerRef = ref(
      database,
      `users/${followerId}/followers/${userId}`
    );
    await set(followerRef, {
      username: user.username,
      profilePicture: user.profilePicture,
    });

    await addNotification(followerId, {
      user: follower.username,
      header: `${user.username} started following you.`,
      profilePicture: user.profilePicture,
      userId: user.userId,
      date: new Date().toISOString(),
      seen: false,
    });
    console.log(`El usuario ${userId} ahora sigue a ${followerId}`);
  } else {
    console.log(`No se encontró ningún usuario con ID ${followerId}`);
  }
};

export const removeFollower = async (userId, followerId) => {
  const followingRef = ref(database, `users/${userId}/following/${followerId}`);
  await remove(followingRef);

  const followerRef = ref(database, `users/${followerId}/followers/${userId}`);
  await remove(followerRef);

  console.log(`El usuario ${followerId} ya no sigue a ${userId}`);
};

export const checkIfIsFollowing = async (myUserId, followerId) => {
  try {
    const followingRef = ref(database, `users/${myUserId}/following`);
    const followingSnapshot = await get(followingRef);

    if (followingSnapshot.exists()) {
      const followingList = followingSnapshot.val();
      for (const key in followingList) {
        if (followingList[key].userId === followerId) {
          return { isFollowing: true, key };
        }
      }
    }
    return { isFollowing: false, key: null };
  } catch (error) {
    console.error("Error al verificar si el usuario sigue a otro:", error);
    return { isFollowing: false, key: null };
  }
};

export const useUserStats = (userId) => {
  const [stats, setStats] = useState({
    numberOfPosts: 0,
    numberOfFollowers: 0,
    numberOfFollowing: 0,
  });

  useEffect(() => {
    const userRef = ref(database, `users/${userId}`);

    const handleUserUpdate = (snapshot) => {
      if (snapshot.exists()) {
        const {
          numberOfPosts = 0,
          followers = {},
          following = {},
        } = snapshot.val();
        setStats({
          numberOfPosts,
          numberOfFollowers: Object.keys(followers).length,
          numberOfFollowing: Object.keys(following).length,
        });
      }
    };

    const userListener = onValue(userRef, handleUserUpdate);

    return () => {
      off(userRef, "value", userListener);
    };
  }, [userId]);

  return stats;
};

export const searchUsers = (searchQuery, setSearchResults) => {
  const usersRef = ref(database, "users");
  const searchQueryLowerCase = searchQuery.toLowerCase();
  const searchByUsername = query(
    usersRef,
    orderByChild("usernameLowerCase"),
    startAt(searchQueryLowerCase),
    endAt(searchQueryLowerCase + "\uf8ff")
  );
  const searchByFullName = query(
    usersRef,
    orderByChild("fullNameLowerCase"),
    startAt(searchQueryLowerCase),
    endAt(searchQueryLowerCase + "\uf8ff")
  );

  const handleSearchResult = (snapshot) => {
    if (snapshot.exists()) {
      setSearchResults(Object.values(snapshot.val()));
    } else {
      setSearchResults([]);
    }
  };

  const usernameListener = onValue(searchByUsername, handleSearchResult);
  const fullNameListener = onValue(searchByFullName, handleSearchResult);

  return () => {
    off(searchByUsername, usernameListener);
    off(searchByFullName, fullNameListener);
  };
};
