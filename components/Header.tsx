"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navigation = [
		{ name: "O klubie", href: "#about" },
		{ name: "Aktywności", href: "#services" },
		{ name: "Galeria", href: "#gallery" },
		{
			name: "Statut klubu",
			href: "/files/Statut_KS_Strzelka.pdf",
			isDownload: true,
		},
		{ name: "Kontakt", href: "#contact" },
	];

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
			}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16 md:h-20">
					{/* Logo */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
						className="flex items-center space-x-3">
						<div className="relative flex items-center space-x-2">
							{/* Pulsing viewfinder */}
							<motion.div
								animate={{
									scale: [1, 1.2, 1],
									opacity: [0.5, 0.8, 0.5],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: "easeInOut",
								}}>
								<Image
									src="/images/celownik.png"
									alt="Celownik"
									width={32}
									height={32}
									className="w-6 h-6 md:w-8 md:h-8 object-contain"
								/>
							</motion.div>
							<Image
								src="/images/strzelka_logo_white.png"
								alt="Klub Strzelecki Strzelka Logo"
								width={40}
								height={40}
								className="w-8 h-8 md:w-10 md:h-10 object-contain"
							/>
						</div>
						<div>
							<h1 className="text-lg md:text-xl font-bold text-white">
								Klub Strzelecki
							</h1>
							<p className="text-sm text-red-500 font-semibold">STRZELKA</p>
						</div>
					</motion.div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{navigation.map((item, index) => (
							<motion.a
								key={item.name}
								href={item.href}
								{...(item.isDownload && { download: true, target: "_blank" })}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 + index * 0.1 }}
								className="text-white hover:text-red-500 transition-colors duration-300 font-medium relative group">
								{item.name}
								<motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
							</motion.a>
						))}
						{/* Right Logo and Viewfinder */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.8 }}
							className="ml-6 flex items-center space-x-2">
							{/* Pulsing viewfinder */}
							<motion.div
								animate={{
									scale: [1, 1.3, 1],
									opacity: [0.7, 1, 0.7],
								}}
								transition={{
									duration: 2.5,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 0.5,
								}}
								className="opacity-70 hover:opacity-100 transition-opacity duration-300">
								<Image
									src="/images/celownik.png"
									alt="Celownik"
									width={24}
									height={24}
									className="w-5 h-5 md:w-6 md:h-6 object-contain"
								/>
							</motion.div>
						</motion.div>
					</nav>

					{/* Mobile Menu Button */}
					<motion.button
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
						className="md:hidden text-white hover:text-red-500 transition-colors"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						{isMobileMenuOpen ? (
							<X className="w-6 h-6" />
						) : (
							<Menu className="w-6 h-6" />
						)}
					</motion.button>
				</div>

				{/* Mobile Navigation */}
				<motion.nav
					initial={{ opacity: 0, height: 0 }}
					animate={{
						opacity: isMobileMenuOpen ? 1 : 0,
						height: isMobileMenuOpen ? "auto" : 0,
					}}
					className="md:hidden overflow-hidden bg-black/95 backdrop-blur-md">
					<div className="py-4 space-y-2">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								{...(item.isDownload && { download: true, target: "_blank" })}
								className="block px-4 py-2 text-white hover:text-red-500 hover:bg-gray-800/50 transition-colors duration-300"
								onClick={() => setIsMobileMenuOpen(false)}>
								{item.name}
							</a>
						))}
						{/* Mobile Logo and Viewfinder */}
						<div className="flex justify-center items-center space-x-3 pt-4 pb-2">
							<motion.div
								animate={{
									scale: [1, 1.2, 1],
									opacity: [0.7, 1, 0.7],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="opacity-70">
								<Image
									src="/images/celownik.png"
									alt="Celownik"
									width={24}
									height={24}
									className="w-6 h-6 object-contain"
								/>
							</motion.div>
						</div>
					</div>
				</motion.nav>
			</div>
		</motion.header>
	);
};

export default Header;
