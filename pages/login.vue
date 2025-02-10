<template>
  <Transition name="fade" mode="out-in">
    <div class="mx-auto mt-40 p-4 flex flex-col items-center">
      <!-- Logo Section -->
      <div class="mb-8 flex gap-2 items-center justify-center">
        <Icon name="game-icons:mountaintop" size="40" />
        <h1 class="text-2xl">codepeak</h1>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="w-full max-w-md">
        <div class="flex flex-col gap-4 items-center">
          <!-- Email Input -->
          <div class="relative w-2/3 text-black/70">
            <input
              v-model="email"
              type="email"
              placeholder="Email address"
              required
              class="overflow-x-scroll pl-10 pr-4 py-2 rounded-md border-none outline-none border-gray-300 w-full"
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
              v-model="password"
              :type="isShowPassword ? 'text' : 'password'"
              placeholder="Password"
              required
              class="overflow-x-scroll pl-10 pr-10 py-2 rounded-md border-none outline-none border-gray-300 w-full"
            />
            <Icon
              name="mdi:password"
              size="20"
              class="absolute left-3 top-1/2 -translate-y-1/2"
            />

            <Icon
              v-if="password.length > 0"
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
            <span v-else>Log In</span>
          </button>

          <!-- Success/Error Message -->
          <p v-if="isCreated" class="text-green-500 mt-2">{{ isCreated }}</p>
          <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
        </div>
      </form>

      <!-- Link to Sign Up -->
      <div class="text-center mt-6">
        <NuxtLink
          to="/register"
          class="text-blue-500 underline hover:text-blue-600"
        >
          Don't have an account? Sign up here
        </NuxtLink>
      </div>
    </div>
  </Transition>
</template>

<script setup>
useHead({
  title: "CodePeak - Login",
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

const isCreated = ref("");
const { login, user } = useAuth();
const email = ref("");
const password = ref("");
const error = ref("");
const isLoading = ref(false);
const router = useRouter();

const handleLogin = async () => {
  try {
    isLoading.value = true;
    const userResponse = await login({
      email: email.value,
      password: password.value,
    });

    if (userResponse && userResponse.success) {
      const tokenCookie = useCookie("token", {
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });
      tokenCookie.value = userResponse.token;

      const userCookie = useCookie("user", {
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });
      userCookie.value = JSON.stringify(userResponse.user);

      await router.push("/");
    } else {
      error.value = "Login failed. Please check your credentials.";
    }
  } catch (err) {
    error.value = err.data?.message || "Login failed";
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
