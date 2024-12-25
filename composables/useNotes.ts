import type { Note } from '~/types/note';

export const useNotes = () => {
  const notes = ref<Note[]>(
    JSON.parse(localStorage.getItem('notes') || '[]') as Note[],
  );

  const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes.value));
  };

  const addNote = (note: Note) => {
    notes.value.push(note);
    saveNotes();
  };

  const removeNote = (id: number) => {
    notes.value = notes.value.filter((note: Note) => note.id !== id);
    saveNotes();
  };

  const updateNote = (id: number, updatedNote: Note) => {
    const index = notes.value.findIndex((note) => note.id === id);
    if (index !== -1) {
      notes.value[index] = updatedNote;
      saveNotes();
    }
  };

  return { notes, addNote, removeNote, updateNote };
};
