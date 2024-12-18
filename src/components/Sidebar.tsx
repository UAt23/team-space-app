import Link from "next/link";

const Sidebar: React.FC = () => (
	<div className="w-64 text-white p-4 bg-gray-500 h-full">
		<h1 className="text-2xl mb-2 font-semibold">Team Space</h1>
		<ul>
			<li className="p-1 hover:shadow-lg ">
				<div className="flex items-center gap-2">
				<p>😊</p>
				<Link className="text-lg" href="/">Dashboard</Link>
				</div>
			</li>
			<li className="p-1 hover:shadow-lg">
				<div className="flex items-center gap-2">
				<p>😊</p>
				<Link className="text-lg" href="/notes">Notes</Link>
				</div>
			</li>
			<li className="p-1 hover:shadow-lg">
				<div className="flex items-center gap-2">
				<p>😊</p>
				<Link className="text-lg" href="/log-analyzer">Logs</Link>
				</div>
			</li>
			<li className="p-1 hover:shadow-lg">
				<div className="flex items-center gap-2">
				<p>😊</p>
				<Link className="text-lg" href="/time-entries">Time Entries</Link>
				</div>
			</li>
		</ul>
	</div>
);

export default Sidebar;
