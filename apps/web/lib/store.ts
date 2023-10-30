import { create } from "zustand";
import { IUrl } from "./interface";

export const useUrl = create<IUrl>((set) => ({
  url: "",
  setUrl: (url) => {
    set((state) => ({
      ...state,
      url,
    }));
  },
}));
