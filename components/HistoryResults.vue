<template>
  <div v-if="user" class="flex items-center space-x-2 transition-all mt-4 text-lg">
    <Icon name="iconamoon:history-fill" size="20" />
    <span>History</span>
  </div>
  <div class="history-list">
    <!-- Анімація завантаження -->
    <div v-if="isLoading" class="text-center text-gray-500 text-xl mt-8">
      <div class="flex items-center justify-center gap-2">
        <span>Loading</span>
        <div class="loading-dots">
          <span class="dot">.</span>
          <span class="dot">.</span>
          <span class="dot">.</span>
        </div>
      </div>
    </div>
    <ul v-else class="space-y-4 mt-6">
      <li
        v-for="(scan, index) in results"
        :key="index"
        class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
      >
        <!-- Заголовок скану -->
        <div class="flex justify-between items-center font-sans relative">
          <!-- Додано relative -->
          <div>
            <p
              class="text-lg font-semibold flex items-center gap-2 text-gray-500"
            >
              <Icon name="ph:file" size="20" class="text-blue-500" />
              {{ scan.filename }}
            </p>
            <p class="text-sm text-gray-500 mt-1">
              {{ scan.fileType }} • {{ formatFileSize(scan.fileSize) }}
            </p>
            <!-- Час створення скану -->
            <p class="text-sm text-gray-500 mt-1 flex items-center gap-2">
              <Icon name="ph:clock" size="16" class="text-gray-400" />
              {{ formatDate(scan.scannedAt) }}
            </p>
          </div>
          <!-- Кнопка для завантаження JSON -->
          <button
            @click="downloadScanJson(scan)"
            class="absolute bottom-12 right-0 transition-colors duration-200"
            title="Download scan details"
          >
            <Icon
              name="fluent:arrow-download-32-filled"
              size="25"
              class="text-blue-500"
            />
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useAuth } from "../composables/useAuth";

const { user } = useAuth(); // Використовуємо user з useAuth
const results = ref([]);
const isLoading = ref(false);

const isUserLoggedIn = computed(() => !!user.value); // Перевірка наявності user

const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

const fetchScans = async () => {
  if (!user.value) return;

  isLoading.value = true;
  try {
    const response = await $fetch(
      `/api/getScans?username=${user.value.username}`
    );
    if (response.statusCode === 200) {
      results.value = response.body.scans;
    } else {
      console.error("Error fetching scans:", response.body.message);
      results.value = [];
    }
  } catch (error) {
    console.error("Error fetching scans:", error);
    results.value = [];
  } finally {
    isLoading.value = false;
  }
};

const downloadScanJson = (scan) => {
  const jsonData = JSON.stringify(scan, null, 2);
  const blob = new Blob([jsonData], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${scan.filename}_details.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

onMounted(() => {
  if (user.value) {
    fetchScans();
  }
});
</script>

<style scoped>
.history-list {
  max-width: 800px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* Анімація для крапок "Loading..." */
.loading-dots .dot {
  opacity: 0;
  animation: blink 1.4s infinite;
}

.loading-dots .dot:nth-child(2) {
  animation-delay: 0.2s;
}

.loading-dots .dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
