import { create } from "zustand";
export const useAuth = create((set) => ({
  user: {
    id: "",
    name: "",
  },
  setUser: (newUser) => set({ user: newUser }),
}));
