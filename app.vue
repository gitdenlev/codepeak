<script setup>
import { Analytics } from "@vercel/analytics/nuxt";
</script>

<template>
  <Transition name="page-fade" mode="out-in">
    <div>
      <NuxtPage />
      <Analytics />
    </div>
  </Transition>
</template>

<style>
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.5s ease;
}
.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}
</style>
