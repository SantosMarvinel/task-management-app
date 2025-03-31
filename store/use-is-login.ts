import { create } from "zustand";

interface LoginStore {
  isLogin: boolean;
  updateLogin: (state: boolean) => void;
}

export const useLoginStore = create<LoginStore>()((set) => ({
  isLogin: false,
  updateLogin: (state) =>
    set(() => ({
      isLogin: state,
    })),
}));
