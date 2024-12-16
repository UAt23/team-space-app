import Link from "next/link";
import { getNotes } from "@/lib/notes";

const NotesSidebar = () => {
	const notes = getNotes();

	return (
		<div className="w-1/4 h-full bg-gray-100 p-4">
			<h2 className="text-xl font-bold mb-4">Notes</h2>
			{notes.map((note) => (
				<div key={note.id} className="mb-2">
					<Link
						href={`/notes/${note.id}`}
						className="text-blue-500 hover:underline"
					>
						{note.title}
					</Link>
				</div>
			))}
			<Link
				href="/notes/new"
				className="block text-green-500 mt-4 hover:underline"
			>
				+ New Note
			</Link>
		</div>
	);
};

export default NotesSidebar;
