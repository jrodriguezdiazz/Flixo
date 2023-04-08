import { create } from "zustand";
import firebase from "../firebase";

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const useAuthStore = create((set) => ({
  user: null,
  error: null,
  loading: false,
  login: async (email, password) => {
    try {
      set({ loading: true });
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      set({ user: userCredential.user, error: null, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },
  loginWithGoogle: async () => {
    try {
      set({ loading: true });
      const userCredential = await firebase
        .auth()
        .signInWithPopup(googleProvider);
      set({ user: userCredential.user, error: null, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },
  register: async (values) => {
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
      set({ loading: true });
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await userCredential.user.updateProfile({
        username,
        firstName,
        lastName,
        phoneNumber,
        birthday,
      });
      set({ user: userCredential.user, error: null, loading: false });
    } catch (error) {
      console.error(error);
      set({ error, loading: false });
    }
  },
  registerWithGoogle: async () => {
    try {
      set({ loading: true });
      const userCredential = await firebase
        .auth()
        .signInWithPopup(googleProvider);
      set({ user: userCredential.user, error: null, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },
  logout: async () => {
    try {
      set({ loading: true });
      await firebase.auth().signOut();
      set({ user: null, error: null, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },
}));
