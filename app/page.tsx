"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import News from "@/components/News";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="min-h-screen bg-white overflow-x-hidden">
			<Header />
			<Hero />
			<News />
			<About />
			<Services />
			<Gallery />
			<Contact />
			<Footer />
		</main>
	);
}
