"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import { RootState } from "@/app/store/store";
import { Note } from "@/types";

const NoteDetailPage = () => {
  const query = usePathname();
  const [note, setNote] = useState<Note | undefined>();
  const [loading, setLoading] = useState(true);

  const allNotes = useSelector((state: RootState) => state.notes.notes);

  useEffect(() => {
    const foundNote = allNotes.find((n) => n.id === query.split("/")[2]);
    console.log("foundNote", foundNote);

    setNote(foundNote);
    setLoading(false);
  }, [query, allNotes]);

  if (loading) return <div>Loading...</div>;
  if (note === undefined) return <div>Note not found!</div>;

  return (
    <div className="p-4">
      <h1>{note.title}</h1>
      <ReactMarkdown>{note.content}</ReactMarkdown>
    </div>
  );
};

export default NoteDetailPage;
