import { defineStore } from "pinia";
import { useColorMode } from "#imports"; // Імпортуємо useColorMode з Nuxt

export const useThemeStore = defineStore("theme", {
  state: () => ({
    appearance: "dark",
  }),
  actions: {
    setTheme(theme: "dark" | "light" | "system") {
      const colorMode = useColorMode();
      colorMode.preference = theme;
      this.appearance = theme;
    },
    darkTheme() {
      this.setTheme("dark");
    },
    lightTheme() {
      this.setTheme("light");
    },
    systemTheme() {
      this.setTheme("system");
    },
  },
});
