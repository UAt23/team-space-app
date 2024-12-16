type Note = {
	id: string;
	title: string;
	content: string;
	createdAt: string;
};

export const getNotes = (): Note[] => {
	const notes = localStorage.getItem("notes");
	return notes ? JSON.parse(notes) : [];
};

export const getNote = (id: string): Note | null => {
	const notes = getNotes();
	return notes.find((note) => note.id === id) || null;
};

export const saveNote = (note: Note) => {
	const notes = getNotes();
	localStorage.setItem("notes", JSON.stringify([...notes, note]));
};

export const updateNote = (id: string, updatedNote: Partial<Note>) => {
	const notes = getNotes();
	const updatedNotes = notes.map((note) =>
		note.id === id ? { ...note, ...updatedNote } : note
	);
	localStorage.setItem("notes", JSON.stringify(updatedNotes));
};

export const deleteNote = (id: string) => {
	const notes = getNotes();
	const filteredNotes = notes.filter((note) => note.id !== id);
	localStorage.setItem("notes", JSON.stringify(filteredNotes));
};
