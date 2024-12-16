import Link from "next/link";

const NoteCard = ({
	note,
}: {
	note: { id: string; title: string; content: string };
}) => {
	return (
		<Link
			href={`/notes/${note.id}`}
			className="block p-4 bg-white shadow rounded"
		>
			<h3 className="font-bold text-lg mb-2">{note.title}</h3>
			<p className="text-gray-600 text-sm">
				{note.content.slice(0, 100)}...
			</p>
		</Link>
	);
};

export default NoteCard;
