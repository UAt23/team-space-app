"use client";

import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useDispatch } from "react-redux";
import { addNote } from "@/app/store/slices/notesSlice";
import { useRouter } from "next/navigation";

// type NoteEditorProps = {
//   onSave: (title: string, content: string) => void;
// };

const NoteEditor = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSave = () => {
    if (title && content) {
      dispatch(addNote({ title, content }));
      router.push("/notes")
      alert("Note saved successfully!");
    } else {
      alert("Please fill in both title and content.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <SimpleMDE
        value={content}
        onChange={(value) => setContent(value)}
        placeholder="Write your note in Markdown..."
      />
      <button onClick={handleSave} style={{ marginTop: "10px" }}>
        Save Note
      </button>
    </div>
  );
};

export default NoteEditor;
