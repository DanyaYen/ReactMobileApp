import { useState } from "react";

export default function useNotes() {
  const [notes, setNotes] = useState<
    Array<{ id: number; title: string; description: string }>
  >([]);

  const addNote = (title: string, description: string) => {
    const newNote = { id: Date.now(), title, description };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id: number) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((note) => note.id !== id);
      return updatedNotes;
    });
  };

  const editNote = (
    id: number,
    updatedTitle: string,
    updatedDescription: string
  ) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id
          ? { ...note, title: updatedTitle, description: updatedDescription }
          : note
      )
    );
  };

  return {
    notes,
    addNote,
    deleteNote,
    editNote,
  };
}
