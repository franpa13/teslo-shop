import { create } from "zustand";

interface menuState {
  menu: boolean;
  open: () => void;
  close: () => void;
}

const useMenuStore = create<menuState>()((set) => ({
  menu: false,
  open: () => set({ menu: true }),
  close: () => set({ menu: false }),
}));
export default useMenuStore