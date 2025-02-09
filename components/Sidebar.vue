<template>
  <div class="relative">
    <Transition name="slide-right">
      <aside
        v-if="isSidePanel"
        class="fixed h-full w-full md:w-80 md:fixed md:h-full border-r border-gray-800/30 flex flex-col z-10 bg-gray-900 text-white"
      >
        <!-- Fixed header section -->
        <div class="p-4 border-b border-gray-800/30">
          <div class="flex items-center justify-between">
            <h1 class="flex items-center text-4xl font-kanit">codepeak</h1>
            <button
              class="transition-all duration-300 bg-transparent rounded-xl w-10 h-10 flex items-center justify-center md:hidden"
              @click="isSidePanel = false"
            >
              <Icon name="formkit:close" size="30" />
            </button>

            <!-- Toggle button for large screens -->
            <button
              v-if="isSidePanel"
              class="hidden md:flex transition-all duration-300 rounded-xl items-center justify-center sidebar-btn p-1 translate-y-0"
              @click="isSidePanel = false"
            >
              <Icon name="fluent:panel-left-16-regular" size="35" />
            </button>
          </div>
        </div>

        <!-- Scrollable content section -->
        <div class="flex-1 overflow-y-auto p-4">
          <FilterResults />
          <HistoryResults />
        </div>

        <!-- Fixed footer section -->
        <div class="p-4 border-t border-gray-800/30">
          <Transition>
            <div v-show="isOpen" class="custom-modal p-2 mb-2">
              <ul>
                <li
                  @click="toggleSettings"
                  class="cursor-pointer p-2 hover:bg-gray-600 flex items-center gap-3 rounded-xl"
                >
                  <Icon name="mingcute:settings-3-fill" size="30" />Settings
                </li>
                <li
                  @click="handleLogout"
                  class="cursor-pointer p-2 hover:bg-gray-600 flex items-center gap-2 rounded-xl"
                >
                  <Icon name="tabler:logout" size="30" />Log out
                </li>
              </ul>
            </div>
          </Transition>

          <!-- User profile button -->
          <button
            @click="isUserSettings = !isUserSettings"
            class="profile-btn flex items-center gap-1 hover:bg-gray-600 hover:text-[#f5f5f5] w-full p-2 rounded-xl transition-all duration-300"
          >
            <Icon name="lets-icons:user-cicrle-duotone" size="40" />
            <p class="text-md">{{ currentUser }}</p>
          </button>
        </div>
      </aside>
    </Transition>

    <!-- Burger Menu -->
    <div
      class="block md:hidden cursor-pointer fixed top-4 left-4 z-50"
      @click="isSidePanel = true"
      :class="{ hidden: isSidePanel }"
    >
      <Icon name="tabler:menu-3" size="40" />
    </div>

    <!-- Minimal Sidebar when collapsed -->
    <Transition name="slide-left">
      <div
        v-if="!isSidePanel"
        class="minimal-sidebar hidden bg-gray-900 md:flex fixed top-0 left-0 w-20 h-screen p-4 flex-col justify-between items-center shadow-lg z-20"
      >
        <div class="flex flex-col items-center gap-6">
          <Icon name="game-icons:mountaintop" size="40" />
          <button
            class="transition-all duration-300 flex items-center justify-center sidebar-btn p-1 rounded-lg"
            @click="isSidePanel = true"
          >
            <Icon name="fluent:panel-left-16-regular" size="40" />
          </button>
          <div
            class="transition-all duration-300 flex items-center justify-center sidebar-btn p-1 rounded-lg"
          ></div>
        </div>
        <button
          @click="isUserSettings = !isUserSettings"
          class="transition-all duration-300 flex items-center justify-center sidebar-btn p-1 rounded-lg"
        >
          <Icon name="lets-icons:user-cicrle-duotone" size="40" />
        </button>
      </div>
    </Transition>

    <!-- Settings container -->
    <UModal
      v-model="isUserSettings"
      :ui="{
        base: 'text-black rounded-xl p-6 font-sans',
        width: 'w-full md:w-[400px]',
        height: 'h-auto',
        padding: 'p-6',
        background: 'bg-[#f0f0f0]',
      }"
    >
      <h2 class="text-2xl mb-4 flex items-center gap-3">
        <Icon name="mingcute:settings-3-fill" size="28" /> Settings
      </h2>

      <!-- Container for unauthenticated user -->
      <div class="flex items-center justify-between" v-if="!user">
        <div class="flex items-center gap-2">
          <Icon name="ix:light-dark" size="22" />
          <span>Theme</span>
        </div>
        <ThemeDropdown />
      </div>

      <!-- Container for authenticated user -->
      <div v-else>
        <div class="space-y-4 text-base">
          <!-- Theme -->
          <div
            class="flex justify-between items-center border-b border-black py-3 pt-2"
          >
            <div class="flex items-center gap-2">
              <Icon name="wpf:sun" size="22" />
              <span>Theme</span>
            </div>
            <ThemeDropdown />
          </div>

          <!-- Username -->
          <div
            class="flex justify-between items-center border-b border-black py-3 pt-2"
          >
            <div class="flex items-center gap-2">
              <Icon name="mdi:user" size="22" />
              <span>User</span>
            </div>
            <span>{{ currentUser }}</span>
          </div>

          <!-- Email -->
          <div
            class="flex justify-between items-center border-b border-black py-3 pt-2"
          >
            <div class="flex items-center gap-2">
              <Icon name="ic:twotone-alternate-email" size="22" />
              <span>Email</span>
            </div>
            <span class="truncate">{{ email }}</span>
          </div>

          <!-- Export Data -->
          <div
            class="flex justify-between items-center border-b border-black py-3 pt-2"
          >
            <div class="flex items-center gap-2">
              <Icon name="streamline:database-solid" size="20" />
              <span>Export Data</span>
            </div>
            <button
              class="bg-[#111827] text-white py-1 px-3 rounded-lg transition-all"
              @click="isExportModalOpen = true"
            >
              Export
            </button>
          </div>

          <!-- Delete Uploads -->
          <div
            class="flex justify-between items-center border-b border-black py-3 pt-2"
          >
            <div class="flex items-center gap-2">
              <Icon name="streamline:database-remove-solid" size="22" />
              <span>Delete data</span>
            </div>
            <button
              class="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg transition-all"
              @click="handleDeleteData"
            >
              Delete
            </button>
          </div>
        </div>

        <!-- Logout -->
        <div
          class="flex justify-between items-center border-b border-black py-3 pt-4"
        >
          <div class="flex items-center gap-2">
            <Icon name="akar-icons:door" size="22" />
            <span>Logout</span>
          </div>
          <button
            class="bg-gray-300 text-black py-1 px-3 rounded-lg hover:bg-gray-400 transition-all"
            @click="handleLogout"
          >
            Logout
          </button>
        </div>

        <!-- Delete Account -->
        <div class="flex justify-between items-center py-3 pt-4">
          <div class="flex items-center gap-2">
            <Icon name="icon-park-solid:people-delete-one" size="22" />
            <span>Delete Account</span>
          </div>
          <button
            class="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition-all"
            @click="modalDeleteAccount = !modalDeleteAccount"
          >
            Delete
          </button>
        </div>
      </div>
    </UModal>

    <!-- Modal for Export Data -->
    <UModal
      v-model="isExportModalOpen"
      :ui="{
        base: 'text-black rounded-xl p-6 font-sans',
        width: 'w-full md:w-[400px]',
        height: 'h-auto',
        padding: 'p-6',
        background: 'bg-[#f0f0f0]',
      }"
    >
      <h2 class="text-2xl mb-4 flex items-center gap-3">
        <Icon name="mdi:database-arrow-down" size="28" /> Export Data
      </h2>

      <div class="space-y-4">
        <p class="text-gray-600">
          Choose the format and options for exporting your data:
        </p>

        <!-- Format Selection -->
        <div class="flex flex-col gap-2">
          <label class="flex items-center gap-2">
            <input type="radio" name="export-format" value="json" checked />
            <span>JSON</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="radio" name="export-format" value="csv" />
            <span>CSV</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="radio" name="export-format" value="excel" />
            <span>Excel</span>
          </label>
        </div>

        <!-- Additional Options -->
        <div class="flex flex-col gap-2">
          <label class="flex items-center gap-2">
            <input type="checkbox" name="include-metadata" />
            <span>Include metadata</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" name="compress-files" />
            <span>Compress files (ZIP)</span>
          </label>
        </div>

        <!-- Buttons -->
        <div class="flex justify-end gap-3 mt-6">
          <button
            class="bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition-all"
            @click="isExportModalOpen = false"
          >
            Cancel
          </button>
          <button
            class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
            @click="handleExportData"
          >
            Export
          </button>
        </div>
      </div>
    </UModal>

    <!-- Modal Delete Account -->
    <UModal
      v-model="modalDeleteAccount"
      :ui="{
        base: 'text-black rounded-xl p-6 font-sans',
        width: 'w-full md:w-[400px]',
        height: 'h-auto',
        padding: 'p-6',
        background: 'bg-[#f0f0f0]',
      }"
    >
      <div class="text-gray-600">
        <h2 class="text-center text-2xl mb-4">Confirm Account Deletion</h2>
        <p class="text-gray-600 mb-4 font-sans p-0">
          To permanently delete your account, please type
          <br />
          <span class="font-bold">"delete my account"</span> in the input below.
        </p>

        <input
          v-model="confirmText"
          type="text"
          class="w-full border rounded-md p-2 text-center"
          placeholder="Type here..."
        />

        <div class="flex justify-end gap-3 mt-6">
          <button
            class="bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition-all"
            @click="resetConfirmDeleteAccount"
          >
            Cancel
          </button>
          <button
            class="bg-gray-400 text-white py-2 px-4 rounded-lg transition-all"
            :disabled="confirmText !== 'delete my account'"
            :class="{
              'bg-red-600 opacity-100 hover:bg-red-700':
                confirmText === 'delete my account',
              'opacity-50 cursor-not-allowed':
                confirmText !== 'delete my account',
            }"
            @click="handleDeleteAccount"
          >
            Delete Account
          </button>
        </div>
      </div>
    </UModal>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAuth } from "../composables/useAuth";
import { useDeleteUserAccount } from "../composables/useDeleteUserAccount";

const modalDeleteAccount = ref(false);
const confirmText = ref("");
const confirmDeleteAccount = "delete my account";
const isOpen = ref(false);
const isSettings = ref(false);
const isExportModalOpen = ref(false); // Стан для модального вікна експорту даних
const { logout, user, email } = useAuth();

const deleteUser = useDeleteUserAccount;

const isUserSettings = ref(false);

const currentUser = computed(() => user.value?.username || "Guest");

const isSidePanel = ref(false);

const resetConfirmDeleteAccount = () => {
  modalDeleteAccount.value = false;
  confirmText.value = "";
};

const toggleSettings = () => {
  isSettings.value = !isSettings.value;
  isOpen.value = false;
};

const handleLogin = () => {
  isSettings.value = !isSettings.value;
  isOpen.value = false;
};

const handleDeleteAccount = async () => {
  try {
    if (confirmText.value === confirmDeleteAccount) {
      await deleteUser(currentUser.value, user.value.email);
    }
    logout();
    navigateTo("/register");
  } catch (error) {
    console.error("Error deleting account:", error);
  }
};

const handleLogout = async () => {
  try {
    await logout();
    user.value = null;
    navigateTo("/login");
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

const handleExportData = () => {
  console.log("Exporting data...");
  isExportModalOpen.value = false; // Закриваємо модальне вікно після експорту
};
</script>

<style scoped>
.custom-modal {
  width: 200px;
  border-radius: 8px;
  background: #334155;
  color: #fff;
}

/* Keep your existing transition styles */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
}
.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Theme-specific styles */
.light-mode aside {
  background-color: #f5f5f5;
  color: #111b27;
}

.light-mode .minimal-sidebar {
  background-color: #f5f5f5;
  color: rgb(17, 24, 39);
}

.dark-mode .sidebar-btn:hover {
  color: rgb(17, 24, 39);
  background-color: #f5f5f5;
}

.light-mode .sidebar-btn:hover {
  color: #f5f5f5;
  background-color: rgb(17, 24, 39);
}
</style>
