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
			title: "Treningi dla nowych członków",
			price: "Składka klubowa",
			duration: "Regularne sesje",
			description:
				"Program wprowadzający dla nowych członków klubu - podstawy bezpieczeństwa i techniki.",
			features: [
				"Szkolenie z bezpieczeństwa",
				"Podstawy sportu strzeleckiego",
				"Treningi grupowe",
				"Opieka instruktora",
			],
		},
		{
			icon: Target,
			title: "Treningi dla zaawansowanych",
			price: "Składka klubowa",
			duration: "Sesje tematyczne",
			description: "Zaawansowane treningi klubowe dla doświadczonych członków.",
			features: [
				"Doskonalenie techniki",
				"Pozycje sportowe",
				"Analiza wyników",
				"Przygotowanie do zawodów",
			],
		},
		{
			icon: Crosshair,
			title: "Sport strzelecki",
			price: "Udział w klubie",
			duration: "Sezon sportowy",
			description:
				"Uczestnictwo w zawodach sportowych i reprezentowanie klubu.",
			features: [
				"Zawody lokalne",
				"Turnieje regionalne",
				"Klasyfikacja sportowa",
				"Reprezentacja klubu",
			],
		},
		{
			icon: Award,
			title: "Kursy instruktorskie",
			price: "Program klubowy",
			duration: "Cykl szkoleniowy",
			description:
				"Szkolenia dla członków chcących zostać instruktorami klubowymi.",
			features: [
				"Metodyka nauczania",
				"Przepisy bezpieczeństwa",
				"Psychologia sportu",
				"Certyfikat instruktora",
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
						Aktywności klubowe{" "}
					</h2>{" "}
					<div className="w-32 h-1.5 bg-red-600 mx-auto mb-10"></div>{" "}
					<p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
						{" "}
						Klub oferuje różnorodne formy aktywności sportowej i szkoleniowej
						dla członków na każdym poziomie zaawansowania.{" "}
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
							className="flex flex-col bg-gray-900 rounded-3xl p-12 max-w-sm w-full mx-auto border border-gray-800 hover:border-red-600 hover:bg-gray-800 transition-all duration-300 group">
							{" "}
							<div className="flex flex-col items-center text-center h-full">
								{" "}
								<div className="w-20 h-20 bg-red-600/20 rounded-full flex items-center justify-center mb-8 group-hover:bg-red-600/40 transition-colors">
									{" "}
									<service.icon className="w-10 h-10 text-red-500" />{" "}
								</div>{" "}
								<h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
									{" "}
									{service.title}{" "}
								</h3>{" "}
								<div className="flex items-center justify-center space-x-8 mb-8">
									{" "}
									<div className="flex items-center text-red-500 bg-red-600/10 px-4 py-2 rounded-full">
										{" "}
										<span className="text-xl lg:text-2xl font-bold">
											{" "}
											{service.price}{" "}
										</span>{" "}
									</div>{" "}
									<div className="flex items-center text-gray-400">
										{" "}
										<Clock className="w-5 h-5 mr-2" /> {service.duration}{" "}
									</div>{" "}
								</div>{" "}
								<p className="text-gray-400 text-lg leading-relaxed mb-10 flex-grow">
									{" "}
									{service.description}{" "}
								</p>{" "}
								<div className="w-full">
									{" "}
									<h4 className="text-xl font-semibold text-white mb-6">
										{" "}
										Co obejmuje:{" "}
									</h4>{" "}
									<ul className="space-y-4">
										{" "}
										{service.features.map((feature, idx) => (
											<li
												key={idx}
												className="flex items-start text-gray-300 text-lg">
												{" "}
												<CheckCircle className="w-6 h-6 text-red-500 mr-4 flex-shrink-0" />{" "}
												{feature}{" "}
											</li>
										))}{" "}
									</ul>{" "}
								</div>{" "}
							</div>{" "}
						</motion.div>
					))}{" "}
				</div>{" "}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center">
					{" "}
					<p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
						{" "}
						Zainteresowany dołączeniem do naszego klubu? Skontaktuj się z nami!{" "}
					</p>{" "}
					<motion.a
						href="#contact"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full font-semibold text-xl transition-all duration-300 shadow-2xl hover:shadow-red-600/50 inline-block">
						{" "}
						Dołącz do klubu{" "}
					</motion.a>{" "}
				</motion.div>{" "}
			</div>{" "}
		</section>
	);
};
export default Services;
