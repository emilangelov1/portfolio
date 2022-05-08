import { Theme } from "@emotion/react";
import create from "zustand";

type storeState = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

export const darkTheme: Theme = {
  color: {
    background: "#1d1d1d",
    surface: "#242424E6",
    onSurface: "#FFFFFF",
    primary: "#0075FF",
    darkerSurface: "#0f0f0ffF",
    borderColor: "#313131",
    buttonContainer: "#393939",
  },
};

export const lightTheme: Theme = {
  color: {
    surface: "#dfdfdf",
    background: "#f5f5f5e6",
    onSurface: "#1d1d1d",
    primary: "#0075FF",
    darkerSurface: "#afafaf",
    borderColor: "#cecece",
    buttonContainer: "#c6c6c6",
  },
};

export const useStore = create<storeState>(
  (set, get) => ({
    theme: "dark",
    toggleTheme: () => {
      const newTheme =
        get().theme === "light"
          ? "dark"
          : "light";
      set({ theme: newTheme });
    },
  })
);
