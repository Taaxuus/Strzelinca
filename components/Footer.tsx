"use client";

import { motion } from "framer-motion";
import {
	Facebook,
	Instagram,
	Youtube,
	Mail,
	Phone,
	MapPin,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const quickLinks = [
		{ name: "O nas", href: "#about" },
		{ name: "Zajęcia", href: "#services" },
		{ name: "Galeria", href: "#gallery" },
		{ name: "Kontakt", href: "#contact" },
	];

	const services = [
		{ name: "Kurs podstawowy", href: "#services" },
		{ name: "Trening zaawansowany", href: "#services" },
		{ name: "Strzelanie precyzyjne", href: "#services" },
		{ name: "Przygotowanie do zawodów", href: "#services" },
	];

	const socialLinks = [
		{ icon: Facebook, href: "#", label: "Facebook" },
		{ icon: Instagram, href: "#", label: "Instagram" },
		{ icon: Youtube, href: "#", label: "YouTube" },
	];

	return (
		<footer className="bg-gradient-to-b from-gray-900 to-black">
			<div className="container mx-auto py-24 lg:py-32">
				<div className="flex flex-wrap justify-center items-start gap-16 lg:gap-20 text-center max-w-7xl mx-auto">
					{/* Club Info */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="flex-1 min-w-64 max-w-sm flex flex-col items-center">
						<div className="flex items-center justify-center space-x-4 mb-8">
							<div className="relative">
								<Image
									src="/images/strzelka_logo_white.png"
									alt="Klub Strzelecki Strzelka Logo"
									width={64}
									height={64}
									className="w-14 h-14 lg:w-16 lg:h-16 object-contain"
								/>
							</div>
							<div className="text-center">
								<h3 className="text-2xl lg:text-3xl font-bold text-white">
									Klub Strzelecki
								</h3>
								<p className="text-red-500 font-semibold text-xl">STRZELKA</p>
							</div>
						</div>
						<p className="text-gray-400 mb-10 leading-relaxed text-lg lg:text-xl text-center">
							Profesjonalne szkolenia strzeleckie, nowoczesne stanowiska i
							pasjonaci strzelectwa w jednym miejscu.
						</p>
						<div className="flex justify-center space-x-8">
							{socialLinks.map((social, index) => (
								<motion.a
									key={social.label}
									href={social.href}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ delay: index * 0.1, duration: 0.6 }}
									viewport={{ once: true }}
									whileHover={{ scale: 1.1 }}
									className="w-16 h-16 lg:w-18 lg:h-18 bg-red-600/20 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group">
									<social.icon className="w-8 h-8 lg:w-9 lg:h-9 text-red-500 group-hover:text-white transition-colors" />
								</motion.a>
							))}
						</div>
					</motion.div>

					{/* Quick Links */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1, duration: 0.6 }}
						viewport={{ once: true }}
						className="flex-1 min-w-52 max-w-xs flex flex-col items-center">
						<h4 className="text-xl lg:text-2xl font-semibold text-white mb-10 text-center">
							Szybkie linki
						</h4>
						<div className="flex flex-col items-center space-y-5">
							{quickLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									className="text-gray-400 hover:text-red-500 transition-colors duration-300 relative group text-lg">
									{link.name}
									<motion.div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
								</a>
							))}
						</div>
					</motion.div>

					{/* Services */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						viewport={{ once: true }}
						className="flex-1 min-w-64 max-w-xs flex flex-col items-center">
						<h4 className="text-xl lg:text-2xl font-semibold text-white mb-10 text-center">
							Nasze zajęcia
						</h4>
						<div className="flex flex-col items-center space-y-5">
							{services.map((service) => (
								<a
									key={service.name}
									href={service.href}
									className="text-gray-400 hover:text-red-500 transition-colors duration-300 relative group text-lg text-center">
									{service.name}
									<motion.div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
								</a>
							))}
						</div>
					</motion.div>

					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.6 }}
						viewport={{ once: true }}
						className="flex-1 min-w-64 max-w-xs flex flex-col items-center">
						<h4 className="text-xl lg:text-2xl font-semibold text-white mb-8 text-center">
							Kontakt
						</h4>
						<div className="flex flex-col items-center space-y-6">
							<div className="flex flex-col items-center space-y-2 text-center">
								<MapPin className="w-7 h-7 text-red-500 flex-shrink-0" />
								<div className="text-gray-400">
									<p className="text-lg">ul. Strzelecka 15</p>
									<p className="text-lg">00-001 Warszawa</p>
								</div>
							</div>
							<div className="flex flex-col items-center space-y-2 text-center">
								<Phone className="w-7 h-7 text-red-500 flex-shrink-0" />
								<a
									href="tel:+48123456789"
									className="text-gray-400 hover:text-red-500 transition-colors text-lg">
									+48 123 456 789
								</a>
							</div>
							<div className="flex flex-col items-center space-y-2 text-center">
								<Mail className="w-7 h-7 text-red-500 flex-shrink-0" />
								<a
									href="mailto:info@strzelka.pl"
									className="text-gray-400 hover:text-red-500 transition-colors text-lg">
									info@strzelka.pl
								</a>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Bottom Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.6 }}
					viewport={{ once: true }}
					className="border-t border-gray-800 mt-16 lg:mt-20 pt-10 lg:pt-12">
					<div className="flex flex-col md:flex-row justify-center items-center text-center space-y-6 md:space-y-0 md:space-x-8 max-w-6xl mx-auto">
						<p className="text-gray-400 text-lg">
							© {currentYear} Klub Strzelecki Strzelka. Wszystkie prawa
							zastrzeżone.
						</p>
					</div>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
