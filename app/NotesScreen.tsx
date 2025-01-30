import React from "react";
import { View, FlatList, StyleSheet, Alert } from "react-native";
import Header from "../components/ui/Header";
import useNotes from "../hooks/useNotes";
import NoteItem from "../components/ui/NoteItem";
import Additbtn from "../components/ui/Additbtn";

export default function NotesScreen() {
  const { notes, addNote, deleteNote, editNote } = useNotes();

  const handleAddNote = () => {
    addNote("New Note", "This is a new note.");
  };

  const handleDeleteNote = (id: number) => {
    deleteNote(id);
  };

  const handleEditNote = (
    id: number,
    updatedTitle: string,
    updatedDescription: string
  ) => {
    editNote(id, updatedTitle, updatedDescription);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Peashbl" />
      <View style={styles.container}>
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <NoteItem
              id={item.id}
              title={item.title}
              description={item.description}
              onDelete={handleDeleteNote}
              onEdit={handleEditNote}
            />
          )}
        />
        <Additbtn onPress={handleAddNote} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000626",
    padding: 15,
  },
});
