<template>
  <div class="note">
    <h2>{{ note.title }}</h2>
    <ul>
      <li
        class="note-todo__item"
        v-for="todo in note.todos.slice(0, 3)"
        :key="todo.id"
      >
        <input type="checkbox" v-model="todo.isCompleted" />
        {{ todo.title }}
      </li>
    </ul>

    <div class="note-actions">
      <VButton class="edit-button" @click="goToEdit(note.id)"
        >Редактировать</VButton
      >
      <VButton @click="deleteNote(note.id)">Удалить</VButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import VButton from '~/components/ui/VButton.vue';
import type { Note } from '~/types/note';

type Props = {
  note: Note;
};

defineProps<Props>();

const router = useRouter();
const emits = defineEmits(['removeNote']);

const goToEdit = async (noteId: number) => {
  await router.push(`/note/${noteId}`);
};

const deleteNote = (noteId: number) => {
  emits('removeNote', noteId);
};
</script>

<style scoped>
.note {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}

.note-todo__item {
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 0.3rem;
  pointer-events: none;
}

.note-actions {
  margin-top: 1rem;
  display: flex;
}

.edit-button {
  margin-right: 0.4rem;
}
</style>
