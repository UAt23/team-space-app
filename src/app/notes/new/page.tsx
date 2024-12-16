"use client"

import NoteEditor from "../../../components/NoteEditor";

const NewNotePage = () => {
	const handleSave = (title: string, content: string) => {
		// TODO: Replace with actual save logic
		console.log("Note saved:", { title, content });
	};

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">New Note</h1>
			<NoteEditor onSave={handleSave} />
		</div>
	);
};

export default NewNotePage;
