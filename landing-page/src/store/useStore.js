import { create } from "zustand";

function applyTheme(value) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = value === "dark" || (value === "auto" && prefersDark);

  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  localStorage.setItem("shipit-theme", value);
}

const useStore = create((set) => ({
  theme: localStorage.getItem("shipit-theme") || "auto",

  setTheme: (value) => {
    applyTheme(value);
    set({ theme: value });
  },
}));

export default useStore;
