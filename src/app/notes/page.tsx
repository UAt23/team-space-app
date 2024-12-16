"use client";

import NotesSidebar from "../../components/NotesSidebar";
import NotesList from "../../components/NotesList";

export default function NotesPage() {
	return (
		<div className="flex h-screen">
			{/* Sidebar for navigating folders and notes */}
			<NotesSidebar />

			{/* Main content: Notes list or note details */}
			<div className="flex-grow p-6">
				<h1 className="text-2xl font-bold mb-4">Notes</h1>
				<NotesList />
			</div>
		</div>
	);
}
