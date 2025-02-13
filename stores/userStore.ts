// stores/userStore.ts
import { defineStore } from "pinia";
import { useAuth } from "../composables/useAuth";

export const useUserStore = defineStore("userName", {
  state: () => ({
    userName: null, // Початкове значення
  }),
  actions: {
    // Оновлення імені користувача
    updateUserName() {
      const { user } = useAuth(); // Отримуємо поточного користувача
      this.userName = user.value?.username || "Guest"; // Оновлюємо стан
    },
  },
  getters: {
    // Геттер для отримання поточного імені
    currentUser: (state) => state.userName,
  },
  persist: {
    enabled: true, // Зберігаємо стан після перезавантаження
    strategies: [
      {
        key: 'userName', // The name of the store
        storage: localStorage,
      },
    ],
  },
});
