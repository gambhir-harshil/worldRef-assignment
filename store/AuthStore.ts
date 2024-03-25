import { User } from "@/types/User";
import { create } from "zustand";

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: any;
  logout: any;
}

const useAuthStore = create((set) => {
  user: null;
  isAuthenticated: false;
  login: (user: User) => set({ isAuthenticated: true, user });
  logout: () => set({ isAuthenticated: false, user: null });
});

export default useAuthStore;
