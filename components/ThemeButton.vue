<script setup>
import { useThemeStore } from "~/stores/theme";
const themeStore = useThemeStore();
const { appearance } = storeToRefs(themeStore);

const toggleTheme = () => {
  const newTheme = appearance.value === "dark" ? "light" : "dark";
  themeStore.setTheme(newTheme);
};
</script>

<template>
  <div class="flex items-center justify-center">
    <button @click="toggleTheme" class="flex items-center justify-center">
      <Icon v-if="appearance === 'dark'" name="ph:sun-bold" size="35" />
      <Icon v-else name="ph:moon-bold" size="35" />
    </button>
  </div>
</template>
