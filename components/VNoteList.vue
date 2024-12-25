<template>
  <VNoteListItem
    v-for="note in notes"
    :key="note.id"
    :note="note"
    @remove-note="emits('removeNote', $event)"
  />
</template>

<script setup lang="ts">
import type { Note } from '~/types/note';
import VNoteListItem from '~/components/VNoteListItem.vue';

type Props = {
  notes: Note[];
};

defineProps<Props>();

const emits = defineEmits(['removeNote']);
</script>

<style scoped></style>
