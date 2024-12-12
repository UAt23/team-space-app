"use client"

import React, { useState } from "react";
import { Note } from "../../types";

const Notes: React.FC = () => {
	const [notes, setNotes] = useState<Note[]>([]);

	const addNote = (note: Note) => {
		setNotes([...notes, { ...note, id: Date.now().toString() }]);
	};

	return (
		<div className="p-4">
			<h1 className="text-xl font-bold">Notes</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					const formData = new FormData(e.target as HTMLFormElement);
					const newNote = {
						title: formData.get("title") as string,
						content: formData.get("content") as string,
					};
					addNote(newNote as Note);
					// e.target.reset();
				}}
			>
				<input
					type="text"
					name="title"
					placeholder="Title"
					className="p-2 border"
				/>
				<textarea
					name="content"
					placeholder="Content"
					className="p-2 border"
				></textarea>
				<button
					type="submit"
					className="px-4 py-2 bg-blue-500 text-white"
				>
					Add Note
				</button>
			</form>
			<div>
				{notes.map((note) => (
					<div key={note.id} className="p-2 border my-2">
						<h2 className="font-bold">{note.title}</h2>
						<p>{note.content}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Notes;
