import { create } from 'zustand';
import { toast } from "react-toastify";
const useAuthStore = create((set) => ({
  token: localStorage.getItem('token'),
  setToken: (token) => set({ token: token }),
  user: null,
  setUser: (user) => set({ user: user }),
  logout: () => {
    set({ token: null, user: null });
    toast.success("Logged out successfully");
    localStorage.removeItem('token');
  }
}))

export default useAuthStore;