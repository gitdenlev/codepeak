<template>
  <div class="error-container">
    <div class="error-code">
      {{ error.statusCode }}
    </div>
    <h2 class="message">{{ error.message }}</h2>
    <div class="cta-container">
      <NuxtLink to="/" class="cta-button">
        <span class="cta-text">Return to safety</span>
        <span class="cta-icon">→</span>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
defineProps(["error"]);
</script>
<style scoped>
.error-container {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(17, 24, 39);
  color: white;
  overflow: hidden;
  z-index: 9999;
}
.error-code {
  font-size: 8rem;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -2px;
  color: white;
  margin-bottom: 2rem;
  position: relative;
}
.message {
  font-size: clamp(1rem, 4vw, 1.5rem);
  font-weight: 300;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0.8;
}
.cta-container {
  margin-top: 1rem;
}
.cta-button {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.75rem 2rem;
  background: transparent;
  color: #f5f5f5;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;
}
.cta-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}
.cta-button:hover {
  border-color: transparent;
  color: rgb(17, 24, 39);
}
.cta-button:hover::before {
  opacity: 1;
}
.cta-text {
  position: relative;
  z-index: 1;
}
.cta-icon {
  margin-left: 0.5rem;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}
.cta-button:hover .cta-icon {
  transform: translateX(4px);
}
@media (max-width: 768px) {
  .error-code {
    font-size: 5rem;
  }
}
@media (max-width: 480px) {
  .error-code {
    font-size: 3.5rem;
  }
}
</style>
