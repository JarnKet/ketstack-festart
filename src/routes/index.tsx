import { createFileRoute } from "@tanstack/react-router";

// UI

import Hero from "@/components/sections/Hero";
import Navbar from "@/components/Navbar";

export const Route = createFileRoute("/")({
	component: IndexPage,
});

function IndexPage() {
	// Instance

	return (
		<main className="px-4 md:px-0">
			<Navbar />
			<Hero />
		</main>
	);
}
