<template>
  <div class="mx-auto mt-40 p-4 flex flex-col items-center">
    <!-- Logo Section -->
    <div class="mb-8 flex gap-2 items-center justify-center">
      <Icon name="game-icons:mountaintop" size="40" />
      <h1 class="text-2xl">codepeak</h1>
    </div>

    <!-- Registration Form -->
    <form @submit.prevent="createAccount" class="w-full max-w-md">
      <div class="flex flex-col gap-4 items-center">
        <!-- Username Input -->
        <div class="relative w-2/3 text-black/70">
          <input
            v-model="username"
            type="text"
            placeholder="Username"
            required
            class="font-sans placeholder:font-kanit pl-10 pr-4 py-2 rounded-md border-none outline-none border-gray-300 w-full"
          />
          <Icon
            name="mdi:user"
            size="20"
            class="absolute left-3 top-1/2 -translate-y-1/2"
          />
        </div>

        <!-- Email Input -->
        <div class="relative w-2/3 text-black/70">
          <input
            v-model="userEmail"
            type="email"
            placeholder="Email address"
            required
            class="font-sans placeholder:font-kanit pl-10 pr-4 py-2 rounded-md border-none outline-none border-gray-300 w-full"
          />
          <Icon
            name="ic:twotone-alternate-email"
            size="20"
            class="absolute left-3 top-1/2 -translate-y-1/2"
          />
        </div>

        <!-- Password Input -->
        <div class="relative w-2/3 text-black/70">
          <input
            :type="isShowPassword ? 'text' : 'password'"
            v-model="userPassword"
            placeholder="Password"
            required
            class="font-sans placeholder:font-kanit pl-10 pr-4 py-2 rounded-md border-none outline-none border-gray-300 w-full"
          />
          <Icon
            name="mdi:password"
            size="20"
            class="absolute left-3 top-1/2 -translate-y-1/2"
          />
          <Icon
            v-if="userPassword.length > 0"
            @click="handleShowPassword"
            :name="isShowPassword ? 'lucide:eye' : 'basil:eye-closed-outline'"
            size="25"
            class="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="isLoading"
          class="border-none outline-none bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 w-2/3"
        >
          <span v-if="isLoading">Loading...</span>
          <span v-else>Create Account</span>
        </button>

        <!-- Error Message -->
        <p v-if="isCreated" class="text-green-500 mt-2">{{ isCreated }}</p>
        <p v-if="isError" class="text-red-500 mt-2">{{ isError }}</p>
      </div>
    </form>

    <!-- Link to Login -->
    <div class="text-center mt-6">
      <NuxtLink to="/login" class="text-blue-500 underline hover:text-blue-600">
        Already have an account? Log in here
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { Notify } from "notiflix/build/notiflix-notify-aio";
useHead({
  title: "CodePeak - Create Account",
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/logo.svg",
    },
  ],
});

const isShowPassword = ref(false);

const handleShowPassword = () => {
  isShowPassword.value = !isShowPassword.value;
};

const username = ref("");
const userEmail = ref("");
const userPassword = ref("");
const isCreated = ref("");
const isError = ref("");
const isLoading = ref(false);
const passwordAtLeast6Characters = ref(false);

const validateForm = () => {
  if (username.value.length < 3) {
    isError.value = "Username must be at least 3 characters long";
    return false;
  }

  if (userPassword.value.length < 6) {
    isError.value = "Password must be at least 6 characters long";
    setTimeout(() => {
      isError.value = "";
    }, 2000);
    return false;
  }

  const emailRegex = /.+@.+\..+/;
  if (!emailRegex.test(userEmail.value)) {
    isError.value = "Please enter a valid email address";
    return false;
  }

  return true;
};

const createAccount = async () => {
  isError.value = "";
  isCreated.value = "";

  if (!validateForm()) {
    return;
  }

  try {
    isLoading.value = true;
    const response = await $fetch("/api/user", {
      method: "POST",
      body: {
        username: username.value.trim(),
        email: userEmail.value.toLowerCase().trim(),
        password: userPassword.value,
      },
    });

    if (response.message) {
      isCreated.value = "Account created successfully!";
      // Wait a bit to show success message
      setTimeout(async () => {
        Notify.success("User created successfully", {
          position: "right-bottom",
          cssAnimationStyle: "zoom", // Example of adding a cool style
          cssAnimationDuration: 600,
          clickToClose: true,
          backgroundColor: "#4CAF50", // Custom background color
          fontSize: "16px", // Custom font size
          useIcon: true, // Show icon
        });
        await navigateTo("/login");
      }, 1500);
    }
  } catch (error) {
    console.error("Registration error:", error);
    isError.value =
      error?.data?.message || "Failed to create account. Please try again.";
  } finally {
    isLoading.value = false;
  }
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
