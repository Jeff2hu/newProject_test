import { create } from "zustand";
import { UserData } from "../type/userType";

interface UserStore {
  user: UserData | null;
  setUser: (userData: UserData) => void;
  clearUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (userData: UserData) => set({ user: userData }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
