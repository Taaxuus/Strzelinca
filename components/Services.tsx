"use client";
import { motion } from "framer-motion";
import {
	Target,
	Crosshair,
	Award,
	GraduationCap,
	Clock,
	CheckCircle,
} from "lucide-react";
const Services = () => {
	const services = [
		{
			icon: GraduationCap,
			title: "Kurs podstawowy",
			price: "299 zł",
			duration: "4 godziny",
			description:
				"Idealny start dla początkujących - teoria, bezpieczeństwo i pierwsze strzały.",
			features: [
				"Szkolenie z bezpieczeństwa",
				"Podstawy obsługi broni",
				"Pierwszy trening praktyczny",
				"Certyfikat ukończenia",
			],
		},
		{
			icon: Target,
			title: "Trening zaawansowany",
			price: "199 zł",
			duration: "2 godziny",
			description:
				"Dla doświadczonych strzelców chcących podnieść swoje umiejętności.",
			features: [
				"Techniki celowania",
				"Pozycje strzeleckie",
				"Analiza wyników",
				"Indywidualne wskazówki",
			],
		},
		{
			icon: Crosshair,
			title: "Strzelanie precyzyjne",
			price: "249 zł",
			duration: "3 godziny",
			description:
				"Specjalistyczny trening dla miłośników strzelectwa precyzyjnego.",
			features: [
				"Broń długa precyzyjna",
				"Techniki oddychania",
				"Stabilizacja pozycji",
				"Analiza celności",
			],
		},
		{
			icon: Award,
			title: "Przygotowanie do zawodów",
			price: "399 zł",
			duration: "6 godzin",
			description:
				"Kompleksowe przygotowanie do startów w zawodach strzeleckich.",
			features: [
				"Symulacja zawodów",
				"Trening pod presją czasu",
				"Techniki mentalne",
				"Plan treningowy",
			],
		},
	];
	return (
		<section id="services" className="py-24 lg:py-32 bg-black">
			{" "}
			<div className="container mx-auto">
				{" "}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="flex flex-col items-center text-center mb-24 lg:mb-32">
					{" "}
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
						{" "}
						Nasze zajęcia{" "}
					</h2>{" "}
					<div className="w-32 h-1.5 bg-red-600 mx-auto mb-10"></div>{" "}
					<p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
						{" "}
						Oferujemy szeroki wybór zajęć strzeleckich dostosowanych do różnych
						poziomów zaawansowania i potrzeb naszych członków.{" "}
					</p>{" "}
				</motion.div>{" "}
				<div className="flex flex-wrap justify-center items-stretch gap-16 lg:gap-20 mb-32 lg:mb-40">
					{" "}
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							viewport={{ once: true }}
							className="flex w-full sm:w-96 lg:w-[480px] max-w-lg">
							{" "}
							<div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 lg:p-12 border border-gray-700 hover:border-red-600/50 transition-all duration-300 hover:transform hover:scale-105 text-center w-full flex flex-col group">
								{" "}
								<div className="flex flex-col items-center mb-10">
									{" "}
									<div className="inline-flex items-center justify-center w-28 h-28 lg:w-32 lg:h-32 bg-red-600/20 rounded-full mb-8 group-hover:bg-red-600/40 transition-all duration-300 group-hover:scale-110">
										{" "}
										<service.icon className="w-14 h-14 lg:w-16 lg:h-16 text-red-500" />{" "}
									</div>{" "}
									<div className="text-center">
										{" "}
										<h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
											{" "}
											{service.title}{" "}
										</h3>{" "}
										<div className="flex items-center justify-center space-x-6 text-base md:text-lg text-gray-400">
											{" "}
											<span className="flex items-center">
												{" "}
												<Clock className="w-5 h-5 mr-2" /> {service.duration}{" "}
											</span>{" "}
											<span className="text-red-500 font-semibold text-xl lg:text-2xl">
												{" "}
												{service.price}{" "}
											</span>{" "}
										</div>{" "}
									</div>{" "}
								</div>{" "}
								<p className="text-gray-300 mb-12 leading-relaxed text-lg md:text-xl text-center">
									{" "}
									{service.description}{" "}
								</p>{" "}
								<div className="flex flex-col space-y-5 mb-14 flex-grow">
									{" "}
									{service.features.map((feature, featureIndex) => (
										<div
											key={featureIndex}
											className="flex items-center justify-center text-center">
											{" "}
											<CheckCircle className="w-6 h-6 text-red-500 mr-4 flex-shrink-0" />{" "}
											<span className="text-gray-300 text-lg">{feature}</span>{" "}
										</div>
									))}{" "}
								</div>{" "}
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="w-full bg-red-600 hover:bg-red-700 text-white py-5 px-8 rounded-xl font-semibold text-lg lg:text-xl transition-colors duration-300 shadow-lg hover:shadow-red-600/25 mt-auto">
									{" "}
									Zapisz się{" "}
								</motion.button>{" "}
							</div>{" "}
						</motion.div>
					))}{" "}
				</div>{" "}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="flex justify-center">
					{" "}
					<div className="bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-3xl p-12 backdrop-blur-sm border border-red-600/30 text-center max-w-4xl">
						{" "}
						<h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
							{" "}
							Zajęcia grupowe i indywidualne{" "}
						</h3>{" "}
						<p className="text-gray-300 mb-10 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
							{" "}
							Oferujemy możliwość uczestnictwa w zajęciach grupowych oraz
							indywidualnych treningach dostosowanych do Twoich potrzeb i
							grafiku.{" "}
						</p>{" "}
						<motion.a
							href="#contact"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="inline-block bg-white text-black px-12 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
							{" "}
							Skontaktuj się z nami{" "}
						</motion.a>{" "}
					</div>{" "}
				</motion.div>{" "}
			</div>{" "}
		</section>
	);
};
export default Services;
