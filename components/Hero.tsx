"use client";

import { motion } from "framer-motion";
import { Target, Award, Users, MapPin } from "lucide-react";
import Image from "next/image";

const Hero = () => {
	const stats = [
		{ icon: Target, label: "Lat doświadczenia", value: "15+" },
		{ icon: Award, label: "Certyfikowanych instruktorów", value: "8" },
		{ icon: Users, label: "Zadowolonych członków", value: "500+" },
		{ icon: MapPin, label: "Stanowisk strzeleckich", value: "12" },
	];

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-8 md:pt-20 md:pb-12 lg:py-0">
			{/* Background Video */}
			<div className="absolute inset-0 z-0">
				<video
					autoPlay
					loop
					muted
					playsInline
					className="absolute inset-0 w-full h-full object-cover">
					<source src="/videos/header_strzelka.mp4" type="video/mp4" />
				</video>
				{/* Video Overlay */}
				<div className="absolute inset-0 bg-black/70" />
				<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
			</div>

			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10 z-10">
				<div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent" />
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"radial-gradient(circle at 25% 25%, #dc2626 1px, transparent 1px)",
						backgroundSize: "50px 50px",
					}}
				/>
			</div>

			{/* Animated Background Elements - Pulsing Viewfinders */}
			<motion.div
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.3, 0.6, 0.3],
				}}
				transition={{
					duration: 3,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute top-16 right-8 md:top-20 md:right-20 z-10">
				<Image
					src="/images/celownik.png"
					alt="Celownik"
					width={80}
					height={80}
					className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
				/>
			</motion.div>

			<motion.div
				animate={{
					scale: [1, 1.3, 1],
					opacity: [0.25, 0.5, 0.25],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 0.5,
				}}
				className="absolute bottom-16 left-8 md:bottom-20 md:left-20 z-10">
				<Image
					src="/images/celownik.png"
					alt="Celownik"
					width={72}
					height={72}
					className="w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18 object-contain"
				/>
			</motion.div>

			<motion.div
				animate={{
					scale: [1, 1.4, 1],
					opacity: [0.2, 0.4, 0.2],
				}}
				transition={{
					duration: 5,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1,
				}}
				className="absolute top-1/3 right-4 md:top-1/2 md:right-10 z-10">
				<Image
					src="/images/celownik.png"
					alt="Celownik"
					width={40}
					height={40}
					className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain"
				/>
			</motion.div>

			<motion.div
				animate={{
					scale: [1, 1.1, 1],
					opacity: [0.15, 0.35, 0.15],
				}}
				transition={{
					duration: 3.5,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1.5,
				}}
				className="absolute top-1/4 left-4 md:top-1/3 md:left-16 z-10">
				<Image
					src="/images/celownik.png"
					alt="Celownik"
					width={48}
					height={48}
					className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
				/>
			</motion.div>

			<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="mb-8 lg:mb-10">
					<h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
						<span className="block mb-1">Klub Strzelecki</span>
						<motion.span
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.5, duration: 0.8 }}
							className="text-red-600 text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wider">
							STRZELKA
						</motion.span>
					</h1>

					{/* Club Logo with Rotating Viewfinder */}
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.8, duration: 0.8 }}
						className="flex justify-center mb-4 md:mb-6">
						<div className="relative">
							<Image
								src="/images/strzelka_logo_white.png"
								alt="Klub Strzelecki Strzelka Logo"
								width={90}
								height={90}
								className="w-18 h-18 md:w-20 md:h-20 lg:w-28 lg:h-28 object-contain relative z-10"
							/>
						</div>
					</motion.div>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8, duration: 0.8 }}
						className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
						Profesjonalne szkolenia strzeleckie, nowoczesne stanowiska i
						pasjonaci strzelectwa w jednym miejscu
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.2, duration: 0.8 }}
						className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
						<motion.a
							href="#contact"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base lg:text-lg transition-all duration-300 shadow-2xl hover:shadow-red-600/50 min-w-[180px] md:min-w-[220px]">
							Zapisz się na zajęcia
						</motion.a>

						<motion.a
							href="#about"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="border-2 border-white text-white hover:bg-white hover:text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base lg:text-lg transition-all duration-300 min-w-[180px] md:min-w-[220px]">
							Dowiedz się więcej
						</motion.a>
					</motion.div>
				</motion.div>

				{/* Stats Section */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.5, duration: 0.8 }}
					className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-10 lg:mt-12 px-2 md:px-4">
					{stats.map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
							className="text-center group">
							<div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-red-600/20 rounded-full mb-3 md:mb-4 group-hover:bg-red-600/40 transition-all duration-300 group-hover:scale-110">
								<stat.icon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-red-500" />
							</div>
							<div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-1 md:mb-2">
								{stat.value}
							</div>
							<div className="text-xs md:text-sm lg:text-base text-gray-300 leading-tight px-1">
								{stat.label}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				animate={{ y: [0, 10, 0] }}
				transition={{ duration: 2, repeat: Infinity }}
				className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
				<div className="w-6 h-8 border-2 border-white/70 rounded-full flex justify-center bg-black/20 backdrop-blur-sm">
					<motion.div
						animate={{ y: [0, 16, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
						className="w-1 h-3 bg-white/70 rounded-full mt-3"
					/>
				</div>
				<p className="text-white/60 text-sm  font-medium">Przewiń w dół</p>
			</motion.div>
		</section>
	);
};

export default Hero;
