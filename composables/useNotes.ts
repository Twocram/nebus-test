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
    let note = notes.value.find((note: Note) => note.id === id);
    if (note) {
      note = { ...note, ...updatedNote };
      saveNotes();
    }
  };

  return { notes, addNote, removeNote, updateNote };
};
