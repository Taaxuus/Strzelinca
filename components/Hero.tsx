"use client";

import { motion } from "framer-motion";
import { Target, Award, Users, MapPin } from "lucide-react";
import Image from "next/image";

const Hero = () => {
	const stats = [
		{ icon: Target, label: "Lat tradycji klubowej", value: "15+" },
		{ icon: Award, label: "Wykwalifikowanych instruktorów", value: "3" },
		{ icon: Users, label: "Aktywnych członków klubu", value: "60+" },
		{ icon: MapPin, label: "Stanowisk treningowych", value: "8" },
	];

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-4 sm:pt-18 sm:pb-6 md:pt-20 md:pb-8 lg:pt-24 lg:pb-12 xl:py-0">
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
				className="absolute top-12 right-4 sm:top-16 sm:right-6 md:top-20 md:right-8 lg:right-20 xl:right-24 z-10">
				<Image
					src="/images/celownik.png"
					alt="Celownik"
					width={80}
					height={80}
					className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 object-contain"
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
				className="absolute bottom-12 left-4 sm:bottom-16 sm:left-6 md:bottom-20 md:left-8 lg:left-20 xl:left-24 z-10">
				<Image
					src="/images/celownik.png"
					alt="Celownik"
					width={72}
					height={72}
					className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 xl:w-18 xl:h-18 object-contain"
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
				className="absolute top-1/3 right-2 sm:right-4 md:top-1/2 md:right-6 lg:right-10 xl:right-16 z-10">
				<Image
					src="/images/celownik.png"
					alt="Celownik"
					width={40}
					height={40}
					className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 object-contain"
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
				className="absolute top-1/4 left-2 sm:left-4 md:top-1/3 md:left-6 lg:left-16 xl:left-20 z-10">
				<Image
					src="/images/celownik.png"
					alt="Celownik"
					width={48}
					height={48}
					className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 object-contain"
				/>
			</motion.div>

			<div className="relative z-20 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
					<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
						<span className="block mb-1">Klub Strzelecki</span>
						<motion.span
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.5, duration: 0.8 }}
							className="text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black tracking-wider">
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
						className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
						Tradycyjny klub strzelecki z bogatą historią, profesjonalną kadrą
						instruktorską i pasją do sportu strzeleckiego
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.2, duration: 0.8 }}
						className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-center items-center px-2 sm:px-4">
						<motion.a
							href="#contact"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl transition-all duration-300 shadow-2xl hover:shadow-red-600/50 w-full sm:w-auto sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px] xl:min-w-[220px] text-center">
							Dołącz do klubu
						</motion.a>

						<motion.a
							href="#about"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="border-2 border-white text-white hover:bg-white hover:text-black px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl transition-all duration-300 w-full sm:w-auto sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px] xl:min-w-[220px] text-center">
							O naszym klubie
						</motion.a>
					</motion.div>
				</motion.div>

				{/* Stats Section */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.5, duration: 0.8 }}
					className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 px-2 sm:px-4">
					{stats.map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
							className="text-center group">
							<div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-red-600/20 rounded-full mb-2 sm:mb-3 md:mb-4 lg:mb-5 group-hover:bg-red-600/40 transition-all duration-300 group-hover:scale-110">
								<stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-red-500" />
							</div>
							<div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-1 sm:mb-1.5 md:mb-2">
								{stat.value}
							</div>
							<div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 leading-tight px-1 sm:px-2">
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
				className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 transform -translate-x-1/2 z-20">
				<div className="w-6 h-10 sm:w-7 sm:h-11 md:w-8 md:h-12 border-2 border-white/70 rounded-full flex justify-center bg-black/20 backdrop-blur-sm">
					<motion.div
						animate={{ y: [0, 12, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
						className="w-1 sm:w-1.5 h-3 sm:h-4 bg-white/70 rounded-full mt-2 sm:mt-2.5 md:mt-3"
					/>
				</div>
				<p className="text-white/60 text-xs sm:text-sm md:text-base mt-2 sm:mt-3 font-medium">
					Przewiń w dół
				</p>
			</motion.div>
		</section>
	);
};

export default Hero;
