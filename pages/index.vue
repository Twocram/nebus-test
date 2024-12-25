<template>
  <div class="container">
    <h1 class="title">Заметки</h1>
    <VButton class="create-button" @click="goToCreate">Создать заметку</VButton>
    <VNoteList :notes="notes" @remove-note="removeNoteHandler($event)" />
  </div>
</template>

<script setup lang="ts">
import { useNotes } from '~/composables/useNotes';
import { useRouter } from 'vue-router';
import VNoteList from '~/components/VNoteList.vue';
import VButton from '~/components/ui/VButton.vue';

useHead({
  title: 'Home',
});

const { notes, removeNote } = useNotes();

const router = useRouter();

const goToCreate = async () => {
  await router.push('/note/new');
};

const removeNoteHandler = (noteId: number) => {
  if (confirm('Вы уверены, что хотите удалить заметку ?')) {
    removeNote(noteId);
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.create-button {
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .container {
    padding: 15px;
  }

  .title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 10px;
  }

  .title {
    font-size: 1.2rem;
  }
}
</style>
