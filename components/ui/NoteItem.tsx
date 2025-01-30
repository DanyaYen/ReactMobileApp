import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

interface NoteItemProps {
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
  onEdit: (
    id: number,
    updatedTitle: string,
    updatedDescription: string
  ) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({
  id,
  title,
  description,
  onDelete,
  onEdit,
}) => {
  const [editableTitle, setEditableTitle] = useState(title);
  const [editableDescription, setEditableDescription] = useState(description);

  const handleBlur = () => {
    onEdit(id, editableTitle, editableDescription);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(id)}
      >
        <Text style={styles.deleteText}>×</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.title}
        value={editableTitle}
        onChangeText={setEditableTitle}
        onBlur={handleBlur}
        placeholder="Enter title"
      />

      <TextInput
        style={styles.description}
        value={editableDescription}
        onChangeText={setEditableDescription}
        onBlur={handleBlur}
        placeholder="Enter description"
        multiline
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    position: "relative",
  },
  deleteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#ff4d4d",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 10,
    padding: 5,
  },
  description: {
    fontSize: 14,
    padding: 5,
  },
});
export default NoteItem;
