"use client"

import { useState } from "react";

interface NoteEditorProps {
	onSave: (title: string, content: string) => void;
}

const NoteEditor = ({ onSave }: NoteEditorProps) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleSave = () => {
		if (title.trim() && content.trim()) {
			onSave(title, content);
		} else {
			alert("Title and content are required!");
		}
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				className="block w-full border p-2 mb-4 rounded"
			/>
			<textarea
				placeholder="Write your note here..."
				value={content}
				onChange={(e) => setContent(e.target.value)}
				className="block w-full border p-2 h-40 rounded"
			></textarea>
			<button
				onClick={handleSave}
				className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
			>
				Save
			</button>
		</div>
	);
};

export default NoteEditor;
