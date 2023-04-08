import { create } from "zustand";
import firebase from "../firebase";

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
      console.log(userCredential.user);
      set({ user: userCredential.user, error: null, loading: false });
    } catch (error) {
      console.log(error);
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
