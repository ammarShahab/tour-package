import { useEffect } from "react";

export default function useSystemTheme() {
  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = () => {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    // Apply once on mount
    applyTheme();

    // Listen for system changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", applyTheme);

    return () => {
      mediaQuery.removeEventListener("change", applyTheme);
    };
  }, []);
}
