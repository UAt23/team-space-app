"use client"

import React from "react";

const Logs: React.FC = () => {
	const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			console.log("Uploaded file:", file.name);
		}
	};

	return (
		<div className="p-4">
			<h1 className="text-xl font-bold">Log Analyzer</h1>
			<input
				type="file"
				onChange={handleFileUpload}
				className="my-4 p-2 border"
			/>
			<div>Analysis results will appear here.</div>
		</div>
	);
};

export default Logs;
