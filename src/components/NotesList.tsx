import NoteCard from "./NoteCard";

const NotesList = () => {
	const notes = [
		{
			id: "1",
			title: "Meeting Notes",
			content: "Discussed project timelines...",
		},
		{ id: "2", title: "Shopping List", content: "Eggs, Milk, Bread..." },
	];

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{notes.map((note) => (
				<NoteCard key={note.id} note={note} />
			))}
		</div>
	);
};

export default NotesList;
