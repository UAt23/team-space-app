"use client";

import { useSelector } from "react-redux";
import { RootState } from "../app/store/store";
import Link from "next/link";
import NoteCard from "./NoteCard";

// interface NotesListProps {
//   onNoteClick: (noteId: string) => void;
// }

const NotesList: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);

  if (!notes || notes.length === 0) {
    return <p>No notes available. Create your first note!</p>;
  }

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link href={`/notes/${note.id}`}>
              <NoteCard note={note}/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
