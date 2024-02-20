import { create } from "zustand";

interface State {
  isSideMenuOpen: boolean;

  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const useUIStore = create<State>()((set) => ({
  isSideMenuOpen: false,
  closeSideMenu: () => set({ isSideMenuOpen: false }),
  openSideMenu: () => set({ isSideMenuOpen: true }),
}));
