import { create } from "zustand";
import firebase, {
  getUserById,
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
  logout: async ({ navigation }) => {
    try {
      set({ loading: true });
      await firebase.auth().signOut();
      set({ user: null, error: null, loading: false });
      navigation.push("LoginScreen");
    } catch (error) {
      set({ error, loading: false });
    }
  },
  fetchUser: async () => {
    try {
      set({ loading: true });
      const userCredential = await firebase.auth().currentUser;
      if (userCredential) {
        const user = {
          ...userCredential,
          ...(await getUserById(userCredential.uid)),
        };
        set(() => ({ user }));
        console.log(user);
      } else {
        set(() => ({ user: null }));
      }
    } catch (error) {
      set({ error, loading: false });
    } finally {
      set(() => ({ loading: false }));
    }
  },
}));
