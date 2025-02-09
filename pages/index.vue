<template>
  <div class="min-h-screen flex overflow-hidden transition-all duration-300">
    <Sidebar />
    <main class="flex-1 relative h-screen overflow-hidden">
      <!-- Контейнер з прокруткою -->
      <div class="absolute inset-0 overflow-y-auto p-6">
        <div class="flex flex-col items-center justify-center min-h-full">
          <!-- Блок для завантаження зображення -->
          <div
            v-show="!uploadedImage"
            class="fixed text-center flex flex-col items-center justify-center"
          >
            <div class="flex gap-2 items-center text-4xl">
              <Icon name="game-icons:mountaintop" />
              <h1>codepeak</h1>
            </div>
            <p class="text-md mt-4">Upload an image to classify it.</p>

            <!-- Контейнер для завантаження зображення -->
            <Transition name="fade" mode="out-in">
              <div
                v-if="!uploadedImage && !isLoading"
                @dragover.prevent="isDragging = true"
                @dragleave="isDragging = false"
                @drop="handleDrop"
                :class="[
                  'md:w-auto md:p-4 h-40 flex items-center justify-center text-xl mt-6 p-8 border-2 border-dashed rounded-lg text-center transition-all duration-3000 text-white',
                  isDragging
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-gray-700 bg-gray-800',
                ]"
              >
                <input
                  type="file"
                  @change="handleImageUpload"
                  accept="image/*"
                  class="hidden"
                  id="fileInput"
                />
                <label
                  for="fileInput"
                  class="cursor-pointer text-sm md:text-xl whitespace-nowrap"
                >
                  <p
                    class="drag-n-drop-text"
                    :class="isDragging ? 'text-black' : 'text-white'"
                  >
                    Drag & drop an image or
                    <span class="text-blue-500">click to upload</span>.
                  </p>
                </label>
              </div>
            </Transition>

            <!-- Перемикач режиму -->
            <div
              v-if="!uploadedImage"
              class="flex items-center relative left-0 mt-4 gap-2 p-2 xl:mr-0"
            >
              <span class="text-xs text-gray-400">Extended Results</span>
              <UToggle
                v-model="showBestResultOnly"
                :label="
                  showBestResultOnly ? 'Show all results' : 'Show best result'
                "
                color="blue"
                class="bg-blue-500"
              />
              <span class="text-xs text-gray-400">Best result</span>
            </div>
          </div>

          <!-- Лоадер -->
          <Transition name="fade" mode="out-in">
            <div class="mt-10" v-if="isLoading">
              <Loader />
            </div>
          </Transition>

          <!-- Результати класифікації -->
          <Transition name="fade" mode="out-in">
            <div
              v-if="classificationResult"
              class="mx-auto mt-6 w-full md:w-[410px] xl:w-[700px] fade-in relative"
            >
              <!-- Контейнер з зображенням та іконкою Reset -->
              <div class="max-h-[60vh] overflow-hidden relative">
                <!-- Іконка Reset -->
                <button
                  @click="resetScan"
                  class="flex items-center justify-center absolute top-3 right-2 p-2 w-10 h-10 bg-gray-800/50 rounded-full hover:bg-gray-700/70 transition-all duration-300"
                  title="Reset"
                >
                  <Icon
                    name="material-symbols:restart-alt"
                    size="20"
                    class="text-white"
                  />
                </button>

                <!-- Завантажене зображення -->
                <NuxtImg
                  v-if="uploadedImage"
                  :src="uploadedImage"
                  alt="Uploaded image"
                  class="mb-4 response-image mx-auto"
                />
              </div>

              <!-- Результати класифікації -->
              <ul>
                <li
                  v-for="(item, idx) in filteredClassificationResult"
                  :key="idx"
                  class="mt-2"
                >
                  <div class="flex items-center justify-between">
                    <span :class="showBestResultOnly ? 'text-xl' : ''">{{
                      item.label
                        .split(" ")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")
                    }}</span>
                  </div>
                  <!-- Прогрес-бар -->
                  <div
                    v-if="!showBestResultOnly"
                    class="w-full bg-gray-700 rounded-full h-2 mt-1"
                  >
                    <div
                      class="bg-blue-500 h-2 rounded-full progress-bar"
                      :style="{ width: `${Math.round(item.score * 100)}%` }"
                    ></div>
                  </div>
                </li>
              </ul>

              <!-- Кнопки Save та Reset (нижня частина) -->
              <div class="flex items-center gap-4">
                <button
                  v-if="!isScanSaved && user"
                  @click="saveScan"
                  class="mt-4 flex items-center justify-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
                >
                  <Icon name="icons8:download-2" size="20" />
                  <span>Save</span>
                </button>
                <p v-if="isScanSaved" class="mt-4 text-green-500">
                  Scan saved successfully!
                </p>
              </div>
            </div>
          </Transition>

          <!-- Повідомлення про можливі помилки моделі -->
          <p
            v-if="classificationResult"
            class="mt-6 text-[9px] md:text-xs text-gray-400 text-center transition-all duration-300 whitespace-normal mb-6"
            style="white-space: pre-line"
          >
            The model can be wrong, especially with low photo quality or unusual
            objects.
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
  };
};

const fileInfo = ref(null);

const filteredClassificationResult = computed(() => {
  if (!classificationResult.value) return null;

  if (showBestResultOnly.value) {
    // Find the best result (highest score)
    const bestResult = classificationResult.value.reduce((max, current) =>
      current.score > max.score ? current : max
    );
    return [bestResult];
  } else {
    // Return all results sorted by score (from highest to lowest)
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
      processingTime: 123, // Приклад часу обробки
      resolution: { width: 1920, height: 1080 }, // Приклад роздільної здатності
    };

    await $fetch("/api/saveScan", {
      method: "POST",
      body: {
        username: user.value.username,
        scanResult: scanData,
      },
    });

    isScanSaved.value = true; // Позначити, що сканування збережено
  } catch (error) {
    console.error("Error saving scan:", error);
  }
};

// Функція для скидання стану сканування
const resetScan = () => {
  uploadedImage.value = null;
  classificationResult.value = null;
  isScanSaved.value = false;
  fileInfo.value = null;
};

// Обробка перетягування файлів
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
  max-height: 60vh;
  object-fit: contain;
}

/* Additional styles */
.response-image {
  max-height: 60vh;
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
</style>
