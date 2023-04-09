import { create } from "zustand";
import firebase, {
  loginUser,
  loginUserWithGoogle,
  registerUser,
  registerUserWithGoogle,
} from "../firebase";

export const useAuthStore = create((set) => ({
  user: null,
  error: null,
  loading: false,
  login: async (values) => {
    try {
      set({ loading: true });
      const user = await loginUser(values);
      console.log(user);
      set({ user, error: null, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },
  loginWithGoogle: async () => {
    try {
      set({ loading: true });
      const user = await loginUserWithGoogle();
      set({ user, error: null, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },
  register: async (values) => {
    try {
      set({ loading: true });
      const user = await registerUser(values);
      console.log(user);
      set({ user, error: null, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },
  registerWithGoogle: async () => {
    try {
      set({ loading: true });
      const user = await registerUserWithGoogle();
      set({ user, error: null, loading: false });
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
