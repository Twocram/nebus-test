<template>
  <button class="v-button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
.v-button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.v-button:hover {
  background-color: #555;
}

@media (max-width: 768px) {
  .v-button {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
}

@media (max-width: 480px) {
  .v-button {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
}
</style>
