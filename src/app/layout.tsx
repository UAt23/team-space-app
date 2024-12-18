"use client"

import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { Provider } from "react-redux";
import { store } from "./store/store";
import NotesSidebar from "@/components/NotesSidebar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<div className="flex h-screen">
					<Provider store={store}>
						<div className="flex">
							<Sidebar />
							<NotesSidebar />
						</div>
						{children}
					</Provider>
				</div>
			</body>
		</html>
	);
}
