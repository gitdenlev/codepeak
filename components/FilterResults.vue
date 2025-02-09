<template>
  <div class="filter-container" v-if="isUserLoggedIn">
    <div class="filter-options">
      <div class="filter-header">
        <Icon name="mage:filter" class="filter-icon" />
        <span class="filter-title">Filter Results</span>
      </div>

      <div class="filter-buttons">
        <button
          v-for="option in filterOptions"
          :key="option.value"
          :class="['filter-button', { active: selectedMode === option.value }]"
          class="text-black hover:text-white"
          @click="selectedMode = option.value"
        >
          <Icon :name="option.icon" class="button-icon" />
          {{ option.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { user } = useAuth();
const isUserLoggedIn = computed(() => user.value !== null);
const selectedMode = ref("all");

const filterOptions = [
  {
    label: "All Results (25)",
    value: "all",
    icon: "heroicons:list-bullet-20-solid",
  },
  {
    label: "Best Results (18)",
    value: "best",
    icon: "heroicons:star-20-solid",
  },
  {
    label: "Extended Results (7)",
    value: "extended",
    icon: "heroicons:plus-circle-20-solid",
  },
];
</script>

<style scoped>
.filter-options {
  @apply rounded-lg mt-4;
}

.filter-header {
  @apply flex items-center gap-2 mb-4;
}

.filter-icon {
  @apply w-5 h-5;
}

.filter-title {
  @apply text-lg font-medium;
}

.filter-buttons {
  @apply flex flex-col gap-2;
}

.filter-button {
  @apply flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200
          hover:bg-blue-600
         w-full text-left text-white;
}

.filter-button.active {
  @apply bg-blue-500 hover:bg-blue-600 text-white;
}

.button-icon {
  @apply w-5 h-5;
}

.light-mode button {
  color: rgb(17, 24, 39);
}

.light-mode button:hover {
  color: #f5f5f5;
}
</style>
