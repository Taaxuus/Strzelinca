"use client";

import { motion } from "framer-motion";
import { Shield, Trophy, BookOpen, Users2 } from "lucide-react";
import Image from "next/image";

const About = () => {
	const features = [
		{
			icon: Shield,
			title: "Bezpieczeństwo",
			description:
				"Najwyższe standardy bezpieczeństwa i profesjonalne wyposażenie ochronne.",
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
			description:
				"Kompleksowe programy szkoleniowe dla członków klubu prowadzone przez wykwalifikowanych instruktorów.",
		},
		{
			icon: Users2,
			title: "Wspólnota",
			description:
				"Prężna wspólnota członków klubu, regularne spotkania i uczestnictwo w zawodach sportowych.",
		},
	];

	return (
		<section id="about" className="bg-gray-900" style={{ padding: "4rem 0" }}>
			<div className="max-w-7xl mx-auto" style={{ padding: "0 1rem" }}>
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center"
					style={{ marginBottom: "6rem" }}>
					<h2
						className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
						style={{ marginBottom: "1rem" }}>
						O naszym klubie
					</h2>
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="flex justify-center"
						style={{ marginBottom: "2rem" }}>
						<Image
							src="/images/strzelka_logo_white.png"
							alt="Klub Strzelecki Strzelka Logo"
							width={80}
							height={80}
							className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-80"
						/>
					</motion.div>
					<div
						className="w-24 sm:w-32 h-1 sm:h-1.5 bg-red-600 mx-auto"
						style={{ marginBottom: "2.5rem" }}></div>
					<p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
						Klub Strzelecki Strzelka to tradycyjna organizacja sportowa z
						15-letnią historią, zrzeszająca pasjonatów sportu strzeleckiego.
						Oferujemy członkom kompleksowe szkolenia, uczestnictwo w zawodach
						oraz rozwój umiejętności w przyjaznej atmosferze.
					</p>
				</motion.div>

				{/* Mission and Stats Section */}
				<div
					className="flex flex-col lg:flex-row justify-center items-center gap-12 md:gap-16 lg:gap-24 max-w-6xl mx-auto"
					style={{ marginBottom: "6rem" }}>
					{/* Mission Text */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="flex-1 w-full max-w-2xl"
						style={{ padding: "0 1rem" }}>
						<h3
							className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center"
							style={{ marginBottom: "3rem" }}>
							Nasza misja
						</h3>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "1.5rem",
							}}>
							<p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center">
								Naszym celem jest promocja bezpiecznego i odpowiedzialnego
								strzelectwa sportowego. Oferujemy kompleksowe szkolenia dla
								początkujących oraz zaawansowane kursy dla doświadczonych
								strzelców.
							</p>
							<p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center">
								Dysponujemy nowoczesnymi stanowiskami strzeleckimi,
								profesjonalnym wyposażeniem oraz zespołem doświadczonych
								instruktorów, którzy zapewnią Ci bezpieczne i efektywne
								szkolenie.
							</p>
						</div>
					</motion.div>

					{/* Stats Card */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="flex-1 w-full max-w-lg"
						style={{ padding: "0 1rem" }}>
						<div
							className="bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-2xl md:rounded-3xl backdrop-blur-sm border border-red-600/30 text-center"
							style={{ padding: "3rem" }}>
							<div
								className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-red-500"
								style={{ marginBottom: "1.5rem" }}>
								15+
							</div>
							<div
								className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
								style={{ marginBottom: "2rem" }}>
								Lat doświadczenia
							</div>
							<div className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
								Setki przeszkolonych strzelców i tysiące przeprowadzonych zajęć
							</div>
						</div>
					</motion.div>
				</div>

				{/* Features Section */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="flex justify-center">
					<div
						className="flex flex-wrap justify-center items-stretch max-w-6xl"
						style={{ gap: "3rem" }}>
						{features.map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1, duration: 0.6 }}
								viewport={{ once: true }}
								className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300"
								style={{ width: "300px", padding: "0 1rem" }}>
								<div
									className="inline-flex items-center justify-center bg-red-600/20 rounded-full group-hover:bg-red-600/40 transition-all duration-300 group-hover:scale-110"
									style={{
										width: "9rem",
										height: "9rem",
										marginBottom: "3rem",
									}}>
									<feature.icon
										className="text-red-500"
										style={{ width: "4rem", height: "4rem" }}
									/>
								</div>
								<h4
									className="font-semibold text-white leading-tight"
									style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
									{feature.title}
								</h4>
								<p
									className="text-gray-400 leading-relaxed"
									style={{ fontSize: "1.125rem" }}>
									{feature.description}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
