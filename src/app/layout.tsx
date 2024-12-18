"use client"

import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { Provider } from "react-redux";
import { store } from "./store/store";
import NotesSidebar from "@/components/NotesSidebar";
import NavigationBar from '../components/NavigationBar';

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
						<div className="flex flex-col w-full mb-1">
							<NavigationBar />
							{children}
						</div>
					</Provider>
				</div>
			</body>
		</html>
	);
}
