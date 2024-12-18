"use client";

import React, { FC } from "react";
import { useRouter, usePathname } from "next/navigation";

const NavigationBar: FC = () => {
	const router = useRouter();
	const pathname = usePathname();

	// Function to handle the back navigation
	const handleBack = () => {
		if (window.history.length > 1) {
			router.back(); // Go back if there is history
		} else {
			router.push("/"); // Fallback to home page or default route
		}
	};

	// Conditional rendering logic: show NavigationBar only for subpaths like /notes/new-note
	if (!pathname.startsWith("/notes/")) {
		return null; // Don't render anything if not under the /notes path
	}

	return (
		<div className="flex justify-between items-center px-4 py-2 shadow-sm">
			<div
				className="text-gray-700 cursor-pointer hover:text-gray-950"
				onClick={handleBack}
			>
				Back
			</div>
		</div>
	);
};

export default NavigationBar;
