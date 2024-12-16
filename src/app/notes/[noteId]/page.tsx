"use client"

import { useRouter, useSearchParams } from "next/navigation";

const NoteDetail = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const noteId = searchParams;

	// Placeholder data; replace with a fetch call to get the note details
	const note = {
		id: noteId,
		title: "Meeting Notes",
		content: "Detailed notes from the meeting...",
	};

	return (
		<div className="p-6">
			<h1 className="text-3xl font-bold mb-4">{note.title}</h1>
			<p className="text-gray-700">{note.content}</p>
		</div>
	);
};

export default NoteDetail;
