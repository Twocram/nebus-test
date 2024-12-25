<template>
  <div class="container">
    <h1 class="title">
      {{ isNew ? 'Создание заметки' : 'Редактирование заметки' }}
    </h1>

    <VInput
      class="note-title"
      v-model="note.title"
      placeholder="Название заметки"
    />

    <ul class="todo-list">
      <li class="todo-item" v-for="todo in note.todos" :key="todo.id">
        <VInput
          class="todo-checkbox"
          v-model="todo.isCompleted"
          type="checkbox"
        />
        <VInput
          class="todo-input"
          v-model="todo.title"
          placeholder="Текст задачи"
        />
        <VButton class="todo-remove" @click="removeTodo(todo.id)">
          Удалить
        </VButton>
      </li>
    </ul>

    <VButton class="add-todo" @click="addTodo">Добавить пункт</VButton>

    <div class="actions">
      <VButton class="action-button save" @click="saveNote">Сохранить</VButton>
      <VButton class="action-button cancel" @click="cancel">Отмена</VButton>
      <VButton
        v-if="!isNew"
        class="action-button delete"
        @click="confirmDelete"
      >
        Удалить заметку
      </VButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useNotes } from '~/composables/useNotes';
import { useRouter, useRoute } from 'vue-router';
import type { Note } from '~/types/note';
import VButton from '~/components/ui/VButton.vue';
import VInput from '~/components/ui/VInput.vue';

const { notes, addNote, updateNote, removeNote } = useNotes();
const router = useRouter();
const route = useRoute();

const noteId = route.params.id;
const isNew = noteId === 'new';

useHead({
  title: isNew ? 'Create note' : 'Edit note',
});

const originalNote = isNew
  ? { id: Date.now(), title: '', todos: [] }
  : notes.value.find((note) => note.id === Number(noteId));

const note = ref<Note>({ ...(originalNote as Note) });

const saveNote = async () => {
  if (isNew) {
    addNote(note.value);
  } else {
    updateNote(note.value.id, note.value);
  }
  await router.push('/');
};

const cancel = async () => {
  if (confirm('Вы уверены, что хотите отменить изменения?')) {
    await router.push('/');
  }
};

const confirmDelete = async () => {
  if (confirm('Вы уверены, что хотите удалить заметку?')) {
    removeNote(Number(noteId));
    await router.push('/');
  }
};

const addTodo = () => {
  note.value.todos.push({ id: Date.now(), title: '', isCompleted: false });
};

const removeTodo = (todoId: number) => {
  note.value.todos = note.value.todos.filter((todo) => todo.id !== todoId);
};
</script>

<style scoped>
.container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
}

.note-title {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

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

.add-todo {
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.add-todo:hover {
  background-color: #555;
}

.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.action-button {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
}

.action-button.save {
  background-color: #4caf50;
}

.action-button.save:hover {
  background-color: #45a049;
}

.action-button.cancel {
  background-color: #f0ad4e;
}

.action-button.cancel:hover {
  background-color: #ec971f;
}

.action-button.delete {
  background-color: #d9534f;
}

.action-button.delete:hover {
  background-color: #c9302c;
}

@media (max-width: 768px) {
  .note-title,
  .todo-input {
    font-size: 0.9rem;
  }

  .todo-remove,
  .add-todo,
  .action-button {
    font-size: 0.8rem;
    padding: 8px 12px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 10px;
  }

  .title {
    font-size: 1.5rem;
  }

  .note-title,
  .todo-input {
    font-size: 0.8rem;
    padding: 6px;
  }

  .todo-remove,
  .add-todo,
  .action-button {
    font-size: 0.7rem;
    padding: 5px 10px;
  }
}
</style>
