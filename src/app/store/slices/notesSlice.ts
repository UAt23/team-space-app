import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Note {
    id: string;
    title: string;
    content: string;
}

interface NotesState {
    notes: Note[];
}

const initialState: NotesState = {
    notes: [],
};

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (
            state,
            action: PayloadAction<{ title: string; content: string }>
        ) => {
            const newNote: Note = {
                id: String(Date.now()), // Generate a unique ID
                title: action.payload.title,
                content: action.payload.content,
            };
            state.notes.push(newNote);
        },
        updateNote: (
            state,
            action: PayloadAction<{ id: string; title: string; content: string }>
        ) => {
            const index = state.notes.findIndex(
                (note) => note.id === action.payload.id
            );
            if (index !== -1) {
                state.notes[index] = action.payload;
            }
        },
        deleteNote: (state, action: PayloadAction<string>) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload);
        },
    },
});

export const { addNote, updateNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
