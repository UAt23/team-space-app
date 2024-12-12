export interface Note {
	id: string;
	title: string;
	content: string;
}

export interface Log {
	id: string;
	fileName: string;
	uploadDate: Date;
}

export interface TimeEntry {
	id: string;
	date: string;
	start: string;
	end: string;
}
