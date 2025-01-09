<template>
  <ul class="todo-list">
    <VTodoListItem
      v-for="todo in todos"
      :key="todo.id"
      :todo
      @remove-todo="emits('removeTodo', $event)"
    />
  </ul>
</template>

<script setup lang="ts">
import type { Todo } from '../types/note';
import VTodoListItem from './VTodoListItem.vue';
type Props = {
  todos: Todo[];
};

defineProps<Props>();

const emits = defineEmits(['removeTodo']);
</script>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
