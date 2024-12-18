"use client";

import NotesList from "../../components/NotesList";

export default function NotesPage() {

	return (
		<div className="flex h-screen">
			<div className="flex-grow p-6">
				<h1 className="text-2xl font-bold mb-4">Notes</h1>
				<NotesList />
			</div>
		</div>
	);
}
