// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },

  runtimeConfig: {
    mongodbUri: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    apiKey: process.env.NUXT_API_KEY,
  },

  mongoose: {
    uri: process.env.MONGO_URI,
    options: {},
    modelsDir: "server/models",
    devtools: false,
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  nitro: {
    preset: "vercel",
  },

  googleFonts: {
    families: {
      Kanit: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  colorMode: {
    preference: "system",
    fallback: "light",
    classPrefix: "",
  },

  modules: [
    "nuxt-mongoose",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@nuxt/ui",
    "@pinia/nuxt",
    "@nuxt/image",
  ],
});