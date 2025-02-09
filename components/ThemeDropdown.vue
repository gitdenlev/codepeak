<script setup lang="ts">
import { useThemeStore } from "~/stores/theme";
const themeStore = useThemeStore();
const { appearance } = storeToRefs(themeStore);
const { setTheme } = themeStore;
const selectedMode = ref("Light");

const items = [
  [
    {
      label: "Light",
      click: () => {
        selectedMode.value = "Light";
        setTheme("light");
      },
    },
    {
      label: "Dark",
      click: () => {
        selectedMode.value = "Dark";
        setTheme("dark");
      },
    },
    {
      label: "System",
      click: () => {
        selectedMode.value = "System";
        setTheme("system");
      },
    },
  ],
];
</script>

<template>
  <UDropdown
    :items="items"
    mode="click"
    :popper="{ placement: 'bottom-end' }"
  >
    <UButton
      color="blue"
      :label="selectedMode"
      trailing-icon="i-heroicons-chevron-down-20-solid"
    />
  </UDropdown>
</template>
