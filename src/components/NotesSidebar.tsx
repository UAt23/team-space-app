"use client"

import Link from "next/link";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

const NotesSidebar = () => {
	const router = usePathname();
	const notes = useSelector((state: RootState) => state.notes.notes);
	return (
		<div className={`${!router.includes("notes") ? "hidden" : "w-1/4 h-full min-w-32 w-56 bg-gray-100 p-4"}`}>
			<h2 className="text-xl font-bold  mb-4">Team Notes</h2>
			{notes.map((note) => (
				<div key={note.id} className="mb-1">
					<Link
						href={`/notes/${note.id}`}
						className="hover:underline"
					>
						{note.title}
					</Link>
				</div>
			))}
			<Link
				href="/notes/new"
				className="flex justify-center bg-green-500 text-white rounded-md mt-4 p-2 transition-all hover:-translate-y-0.5"
			>
				New Note
			</Link>
		</div>
	);
};

export default NotesSidebar;
