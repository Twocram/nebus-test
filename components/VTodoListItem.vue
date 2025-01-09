<template>
  <li class="todo-item">
    <VCheckbox class="todo-checkbox" v-model="todo.isCompleted" />
    <VInput
      class="todo-input"
      v-model="todo.title"
      placeholder="Текст задачи"
    />
    <VButton class="todo-remove" @click="emits('removeTodo', todo.id)">
      Удалить
    </VButton>
  </li>
</template>

<script setup lang="ts">
import type { Todo } from '../types/note';
import VButton from './ui/VButton.vue';
import VCheckbox from './ui/VCheckbox.vue';
import VInput from './ui/VInput.vue';

type Props = {
  todo: Todo;
};

defineProps<Props>();

const emits = defineEmits(['removeTodo']);
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.todo-checkbox {
  transform: scale(1.2);
}

.todo-input {
  flex: 1;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.todo-remove {
  padding: 5px 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.todo-remove:hover {
  background-color: #ff1a1a;
}

@media (max-width: 768px) {
  .todo-remove {
    font-size: 0.8rem;
    padding: 8px 12px;
  }

  .todo-input {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .todo-remove {
    font-size: 0.7rem;
    padding: 5px 10px;
  }

  .todo-input {
    font-size: 0.8rem;
    padding: 6px;
  }
}
</style>
