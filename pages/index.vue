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
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              v-if="isLoading"
            >
              <Loader />
            </div>
          </Transition>

          <!-- Результати класифікації -->
          <Transition name="fade" mode="out-in">
            <div
              v-if="classificationResult"
              class="mx-auto mt-6 w-full md:w-[410px] xl:w-[700px] fade-in relative"
            >
              <!-- Контейнер з зображенням та кнопками -->
              <div class="max-h-[60vh] overflow-hidden relative">
                <!-- Завантажене зображення -->
                <div class="relative">
                  <!-- Зображення -->
                  <NuxtImg
                    v-if="uploadedImage"
                    :src="uploadedImage"
                    alt="Uploaded image"
<<<<<<< HEAD
                    :width="300"
                    :height="200"
                    sizes="xs:100vw sm:80vw md:60vw lg:50vw xl:40vw"
                    class="responsive-img"
                  />

                  <!-- Кнопки управління (нові, завжди видимі) -->
                  <div
                    v-if="classificationResult"
                    class="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-row items-center gap-2"
                  >
                    <!-- Save кнопка (тільки для авторизованих) -->
                    <button
                      v-if="user"
                      @click="handleSave"
                      class="px-3 py-2 rounded-lg bg-blue-600 opacity-90 hover:bg-blue-700 text-white flex items-center gap-2 transition-all duration-300"
                    >
                      <Icon name="icon-park-outline:download-one" size="16" />
                      <span class="text-sm">Save</span>
                    </button>

                    <!-- Reset кнопка -->
                    <button
                      @click="handleReset"
                      class="px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white flex items-center gap-2 transition-all duration-300"
                    >
                      <Icon name="material-symbols:restart-alt" size="16" />
                      <span class="text-sm">Reset</span>
                    </button>
=======
                    class="mb-4 response-image mx-auto rounded-lg"
                  />

                  <!-- Меню кнопка та дропдаун -->
                  <div
                    v-if="classificationResult"
                    class="absolute bottom-6 right-2 flex flex-col items-end"
                  >
                    <!-- Кнопка меню -->
                    <button
                      @click="isMenuOpen = !isMenuOpen"
                      class="p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/80 transition-all duration-300"
                    >
                      <Icon
                        name="iconamoon:menu-kebab-horizontal-bold"
                        size="20"
                        class="text-white"
                      />
                    </button>

                    <!-- Дропдаун меню -->
                    <Transition
                      enter-active-class="transition duration-200 ease-out"
                      enter-from-class="transform scale-95 opacity-0"
                      enter-to-class="transform scale-100 opacity-100"
                      leave-active-class="transition duration-150 ease-in"
                      leave-from-class="transform scale-100 opacity-100"
                      leave-to-class="transform scale-95 opacity-0"
                    >
                      <div
                        v-if="isMenuOpen"
                        class="mt-2 py-1 w-28 rounded-lg shadow-lg bg-gray-800/90 backdrop-blur-sm"
                      >
                        <!-- Save кнопка -->
                        <button
                          @click="handleSave"
                          class="w-full px-4 py-2 text-sm text-white hover:bg-gray-700/50 flex items-center gap-2 transition-colors duration-200"
                        >
                          <Icon
                            name="icon-park-outline:download-one"
                            size="16"
                          />
                          Save
                        </button>

                        <!-- Reset кнопка -->
                        <button
                          @click="handleReset"
                          class="w-full px-4 py-2 text-sm text-white hover:bg-gray-700/50 flex items-center gap-2 transition-colors duration-200"
                        >
                          <Icon name="material-symbols:restart-alt" size="16" />
                          Reset
                        </button>
                      </div>
                    </Transition>
>>>>>>> d1b6f7bb1d67110fcb632c26ee4110551e4f1446
                  </div>
                </div>
              </div>

              <!-- Результати класифікації -->
              <ul>
                <li
                  v-for="(item, idx) in filteredClassificationResult"
                  :key="idx"
                  class="mt-2"
                  v-if="
                    filteredClassificationResult &&
                    filteredClassificationResult.length
                  "
                >
                  <div class="flex items-center justify-between">
                    <span
                      :class="
                        showBestResultOnly
                          ? 'text-xl flex justify-center w-full'
                          : ''
                      "
                      >{{
                        item.label
                          .split(" ")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")
                      }}</span
                    >
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

              <!-- Повідомлення про успішне збереження -->
              <div class="flex items-center gap-4">
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

<<<<<<< HEAD
    console.log("Scan data to save:", scanData);
=======
    console.log("Scan data to save:", scanData); // Додано логування
>>>>>>> d1b6f7bb1d67110fcb632c26ee4110551e4f1446

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

<<<<<<< HEAD
const handleSave = () => {
  saveScan();
=======
const isMenuOpen = ref(false);

// Закривання меню при кліку поза ним
onMounted(() => {
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest('.menu-container')) {
      isMenuOpen.value = false;
    }
  });
});

const handleSave = () => {
  saveScan();
  isMenuOpen.value = false;
>>>>>>> d1b6f7bb1d67110fcb632c26ee4110551e4f1446
};

const handleReset = () => {
  resetScan();
<<<<<<< HEAD
=======
  isMenuOpen.value = false;
>>>>>>> d1b6f7bb1d67110fcb632c26ee4110551e4f1446
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
