<template>
  <input v-model="modelValue" :placeholder :type class="v-input" />
</template>

<script setup lang="ts">
type Props = {
  placeholder?: string;
  type?: string;
};

defineProps<Props>();

const modelValue = defineModel();
</script>

<style scoped>
.v-input {
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .v-input {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .v-input {
    font-size: 0.8rem;
    padding: 6px;
  }
}
</style>
