"use client"

import React, { useState } from "react";
import { TimeEntry } from "../../types";

const TimeEntries: React.FC = () => {
	const [entries, setEntries] = useState<TimeEntry[]>([]);

	const addEntry = (entry: Omit<TimeEntry, "id">) => {
		setEntries([...entries, { ...entry, id: Date.now().toString() }]);
	};

	return (
		<div className="p-4">
			<h1 className="text-xl font-bold">Time Entries</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					const formData = new FormData(e.target as HTMLFormElement);
					const newEntry = {
						date: formData.get("date") as string,
						start: formData.get("start") as string,
						end: formData.get("end") as string,
					};
					addEntry(newEntry as Omit<TimeEntry, "id">);
					// e.target.reset();
				}}
			>
				<input type="date" name="date" className="p-2 border" />
				<input type="time" name="start" className="p-2 border mx-2" />
				<input type="time" name="end" className="p-2 border" />
				<button
					type="submit"
					className="px-4 py-2 bg-green-500 text-white"
				>
					Add Entry
				</button>
			</form>
			<div>
				{entries.map((entry) => (
					<div key={entry.id} className="p-2 border my-2">
						<p>Date: {entry.date}</p>
						<p>Start: {entry.start}</p>
						<p>End: {entry.end}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default TimeEntries;
