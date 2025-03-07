<template>
  <div class="min-h-screen flex overflow-hidden transition-all duration-300">
    <Sidebar />
    <main class="flex-1 relative h-screen overflow-hidden">
      <!-- Контейнер з прокруткою -->
      <div class="absolute inset-0 overflow-y-auto p-6">
        <div class="flex flex-col items-center justify-center min-h-full">
          <!-- Блок для завантаження зображення -->
          <div v-show="!uploadedImage" class="fixed text-center flex flex-col items-center justify-center">
            <div class="flex gap-2 items-center text-4xl">
              <Icon name="game-icons:mountaintop" />
              <h1>codepeak</h1>
            </div>
            <p class="text-md mt-4">Upload an image to classify it.</p>
            
            <Transition name="fade" mode="out-in">
              <div
                v-if="!uploadedImage && !isLoading"
                @dragover.prevent="isDragging = true"
                @dragleave="isDragging = false"
                @drop="handleDrop"
                :class="[
                  'md:w-auto md:p-4 h-40 flex items-center justify-center text-xl mt-6 p-8 border-2 border-dashed rounded-lg text-center transition-all duration-3000 text-white',
                  isDragging ? 'border-blue-500 bg-blue-500/10' : 'border-gray-700 bg-gray-800',
                ]"
              >
                <input
                  type="file"
                  @change="handleImageUpload"
                  accept="image/*"
                  class="hidden"
                  id="fileInput"
                />
                <label for="fileInput" class="cursor-pointer text-sm md:text-xl whitespace-nowrap">
                  <p class="drag-n-drop-text" :class="isDragging ? 'text-black' : 'text-white'">
                    Drag & drop an image or
                    <span class="text-blue-500">click to upload</span>.
                  </p>
                </label>
              </div>
            </Transition>

            <!-- Перемикач режиму -->
            <div v-if="!uploadedImage" class="flex items-center relative left-0 mt-4 gap-2 p-2 xl:mr-0">
              <span class="text-xs text-gray-400">Extended Results</span>
              <UToggle
                v-model="showBestResultOnly"
                :label="showBestResultOnly ? 'Show all results' : 'Show best result'"
                color="blue"
                class="bg-blue-500"
              />
              <span class="text-xs text-gray-400">Best result</span>
            </div>
          </div>

          <!-- Лоадер -->
          <Transition name="fade" mode="out-in">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" v-if="isLoading">
              <Loader />
            </div>
          </Transition>

          <!-- Результати класифікації -->
          <Transition name="fade" mode="out-in">
            <div v-if="classificationResult" class="mx-auto mt-6 w-full md:w-[410px] xl:w-[700px] fade-in relative">
              <!-- Контейнер з зображенням та кнопками -->
              <div class="max-h-[60vh] overflow-hidden relative">
                <!-- Завантажене зображення -->
                <div class="relative">
                  <!-- Зображення -->
                  <NuxtImg
                    v-if="uploadedImage"
                    :src="uploadedImage"
                    alt="Uploaded image"
                    class="mb-4 response-image mx-auto rounded-lg"
                  />
                </div>
              </div>

              <!-- Результати класифікації -->
              <ul class="transition-all duration-300">
                <li
                  v-for="(item, idx) in filteredClassificationResult"
                  :key="idx"
                  class="mt-2"
                  v-if="filteredClassificationResult && filteredClassificationResult.length"
                >
                  <div class="flex items-center justify-between">
                    <span :class="showBestResultOnly ? 'text-xl flex justify-center w-full' : ''">
                      {{
                        item.label
                          .split(" ")
                          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")
                      }}
                    </span>
                  </div>
                  <!-- Прогрес-бар -->
                  <div v-if="!showBestResultOnly" class="w-full bg-gray-700 rounded-full h-2 mt-1 transition-all">
                    <div
                      class="bg-blue-500 h-2 rounded-full progress-bar"
                      :style="{ width: `${Math.round(item.score * 100)}%` }"
                    ></div>
                  </div>
                </li>
              </ul>

              <!-- Повідомлення про успішне збереження -->
              <div class="flex items-center justify-center gap-4">
                <p v-if="isScanSaved" class="mt-4 text-green-500">
                  Scan saved successfully!
                </p>
              </div>

              <!-- Кнопки Save і Reset -->
              <div class="mt-4 flex gap-4 justify-center">
                <button
                  v-if="uploadedImage && classificationResult"
                  @click="handleSave"
                  class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
                >
                  Save
                </button>
                <button
                  @click="handleReset"
                  class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300"
                >
                  Reset
                </button>
              </div>
            </div>
          </Transition>

          <!-- Повідомлення про можливі помилки моделі -->
          <p v-if="classificationResult" class="mt-6 text-[9px] md:text-xs text-gray-400 text-center transition-all duration-300 whitespace-normal mb-6" style="white-space: pre-line">
            The model can be wrong, especially with low photo quality or unusual objects.
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useAuth } from "../composables/useAuth";

const { user } = useAuth();

useHead({
  title: "CodePeak",
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/logo.svg",
    },
  ],
});

const isHovering = ref(false);
const isDragging = ref(false);
const uploadedImage = ref(null);
const isLoading = ref(false);
const classificationResult = ref(null);
const showBestResultOnly = ref(false);
const isScanSaved = ref(false); // Стан для відстеження збереження

const getFileInfo = (file) => {
  if (!file) return null;
  const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
  return {
    name: file.name,
    size: `${sizeInMB} MB`,
    type: file.type,
  };
};

const fileInfo = ref(null);

const filteredClassificationResult = computed(() => {
  if (!classificationResult.value || classificationResult.value.length === 0)
    return null;

  if (showBestResultOnly.value) {
    // Якщо масив порожній, повертаємо []
    if (classificationResult.value.length === 0) return [];

    // Знаходимо найкращий результат
    const bestResult = classificationResult.value.reduce((max, current) =>
      current.score > max.score ? current : max
    );
    return [bestResult];
  } else {
    // Повертаємо всі результати, відсортовані за балами
    return [...classificationResult.value].sort((a, b) => b.score - a.score);
  }
});

// Функція для обробки завантаження зображення
async function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  fileInfo.value = getFileInfo(file);

  const reader = new FileReader();
  reader.onload = async (e) => {
    const base64Image = e.target.result.split(",")[1];
    uploadedImage.value = e.target.result;
    isLoading.value = true;

    try {
      const response = await $fetch("/api/chat", {
        method: "POST",
        body: {
          image: base64Image,
        },
      });

      classificationResult.value = response.response;
    } catch (error) {
      console.error("Error processing image:", error);
      classificationResult.value = [{ label: "Error", score: 0 }];
    } finally {
      isLoading.value = false;
    }
  };

  reader.readAsDataURL(file);
}

// Функція для збереження сканування
const saveScan = async () => {
  if (!user.value) {
    console.error("User is not logged in");
    return;
  }

  if (!uploadedImage.value || !classificationResult.value) {
    console.error("No scan data to save");
    return;
  }

  try {
    const scanData = {
      filename: fileInfo.value.name,
      fileType: fileInfo.value.type,
      fileSize: fileInfo.value.size,
      scannedAt: new Date().toISOString(),
      tag: showBestResultOnly.value ? "best" : "extended",
      classificationResults: classificationResult.value,
      processingTime: 123,
      resolution: { width: 1920, height: 1080 },
    };

    console.log("Scan data to save:", scanData); // Додано логування

    await $fetch("/api/saveScan", {
      method: "POST",
      body: {
        username: user.value.username,
        scanResult: scanData,
      },
    });

    isScanSaved.value = true; // Позначити, що сканування збережено

    // Скидаємо повідомлення про успішне збереження через 3 секунди
    setTimeout(() => {
      isScanSaved.value = false;
    }, 3000);
  } catch (error) {
    console.error("Error saving scan:", error);
  }
};

const handleSave = () => {
  saveScan();
};

const handleReset = () => {
  resetScan();
};

const resetScan = () => {
  uploadedImage.value = null;
  classificationResult.value = null;
  isScanSaved.value = false;
  fileInfo.value = null;
};

function handleDrop(event) {
  event.preventDefault();
  isDragging.value = false;
  const files = event.dataTransfer?.files;
  if (!files || files.length === 0) return;

  const file = files[0];
  if (!file.type.startsWith("image/")) {
    console.error("Please drop an image file");
    return;
  }

  try {
    fileInfo.value = getFileInfo(file);
    const fakeEvent = {
      target: {
        files: [file],
      },
    };
    handleImageUpload(fakeEvent);
  } catch (error) {
    console.error("Error handling dropped file:", error);
  }
}

onMounted(() => {
  document.body.classList.add("blur-in");
});
</script>

<style>
img {
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 8px auto;
  max-height: auto;
  object-fit: contain;
}

/* Additional styles */
.responsive-img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.progress-bar {
  transition: width 2.5s linear;
}

.fade-in {
  animation: fadeIn 2.5s linear;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.dark-mode .drag-n-drop-text {
  color: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.menu-container {
  z-index: 50;
}
</style>
