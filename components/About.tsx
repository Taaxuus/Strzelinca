"use client";

import { motion } from "framer-motion";
import { Shield, Trophy, BookOpen } from "lucide-react";
import Image from "next/image";

const About = () => {
	const features = [
		{
			icon: Shield,
			title: "Bezpieczeństwo",
			description: "Najwyższe standardy bezpieczeństwa.",
		},
		{
			icon: Trophy,
			title: "Tradycja",
			description:
				"15 lat tradycji klubowej i bogate doświadczenie w rozwijaniu sportu strzeleckiego.",
		},
		{
			icon: BookOpen,
			title: "Szkolenia",
			description: "Kompleksowe programy szkoleniowe dla członków klubu.",
		},
	];

	return (
		<section id="about" className="bg-white py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4">
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-20 lg:mb-24">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
						O naszym klubie
					</h2>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.8 }}
						viewport={{ once: true }}
						className="flex justify-center mb-6">
						<div className="relative">
							<Image
								src="/images/strzelka_logo.png"
								alt="Klub Strzelecki Strzelka Logo"
								width={80}
								height={80}
								className="w-16 h-16 md:w-20 md:h-20 object-contain"
							/>
						</div>
					</motion.div>
					<div className="w-32 h-1.5 bg-red-600 mx-auto mb-10"></div>
					<p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
						Tradycyjny klub strzelecki z 15-letnią historią, zrzeszający
						pasjonatów sportu strzeleckiego. Oferujemy członkom kompleksowe
						szkolenia, uczestnictwo w zawodach oraz rozwój umiejętności w
						przyjaznej atmosferze.
					</p>
				</motion.div>

				{/* Mission and Stats Section */}
				<div className="flex flex-col lg:flex-row justify-center items-center gap-12 md:gap-16 lg:gap-24 max-w-6xl mx-auto mb-20 lg:mb-24">
					{/* Mission */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="flex-1 text-center lg:text-left">
						<h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
							Nasza misja
						</h3>
						<p className="text-lg text-gray-600 leading-relaxed">
							Rozwijamy sport strzelecki, promujemy bezpieczeństwo i budujemy
							społeczność pasjonatów. Naszym celem jest kształtowanie
							odpowiedzialnych i wykwalifikowanych strzelców sportowych.
						</p>
					</motion.div>

					{/* Stats */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="flex-1 grid grid-cols-3 gap-6 lg:gap-8">
						<div className="text-center">
							<div className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-2">
								15+
							</div>
							<div className="text-sm md:text-base text-gray-600">
								Lat doświadczenia
							</div>
						</div>
						<div className="text-center">
							<div className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-2">
								60+
							</div>
							<div className="text-sm md:text-base text-gray-600">
								Członków klubu
							</div>
						</div>
						<div className="text-center">
							<div className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-2">
								8
							</div>
							<div className="text-sm md:text-base text-gray-600">
								Stanowisk
							</div>
						</div>
						{/* <div className="text-center">
							<div className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-2">
								3
							</div>
							<div className="text-sm md:text-base text-gray-600">
								Instruktorów
							</div>
						</div> */}
					</motion.div>
				</div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							viewport={{ once: true }}
							className="text-center group">
							<div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-red-600/10 rounded-full mb-6 group-hover:bg-red-600/20 transition-colors">
								<feature.icon className="w-8 h-8 lg:w-10 lg:h-10 text-red-600" />
							</div>
							<h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
								{feature.title}
							</h3>
							<p className="text-gray-600 leading-relaxed">
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
