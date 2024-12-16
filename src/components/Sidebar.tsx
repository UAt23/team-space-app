import Link from "next/link";

const Sidebar: React.FC = () => (
	<div className="w-64 text-white p-4 bg-gray-500 h-full">
		<ul>
			<li>
				<Link href="/">Dashboard</Link>
			</li>
			<li>
				<Link href="/notes">Notes</Link>
			</li>
			<li>
				<Link href="/log-analyzer">Logs</Link>
			</li>
			<li>
				<Link href="/time-entries">Time Entries</Link>
			</li>
		</ul>
	</div>
);

export default Sidebar;
