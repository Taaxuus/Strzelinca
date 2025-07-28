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
		<section id="services" className="py-24 lg:py-32 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-20 lg:mb-24">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
						Aktywności klubowe
					</h2>
					<div className="w-32 h-1.5 bg-red-600 mx-auto mb-10"></div>
					<p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
						Klub oferuje różnorodne formy aktywności sportowej i szkoleniowej
						dla członków na każdym poziomie zaawansowania.
					</p>
				</motion.div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16 lg:mb-20">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							viewport={{ once: true }}
							className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200">
							<div className="text-center">
								<div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-red-600/20 transition-colors">
									<service.icon className="w-8 h-8 text-red-600" />
								</div>
								<h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
									{service.title}
								</h3>
								<div className="flex items-center justify-center space-x-4 mb-6">
									<div className="text-red-600 bg-red-50 px-3 py-1 rounded-full">
										<span className="text-sm font-semibold">
											{service.price}
										</span>
									</div>
									<div className="flex items-center text-gray-500 text-sm">
										<Clock className="w-4 h-4 mr-1" />
										{service.duration}
									</div>
								</div>
								<p className="text-gray-600 leading-relaxed mb-6">
									{service.description}
								</p>
								<div>
									<h4 className="text-lg font-semibold text-gray-900 mb-4">
										Co obejmuje:
									</h4>
									<ul className="space-y-2">
										{service.features.map((feature, idx) => (
											<li
												key={idx}
												className="flex items-center text-gray-600 text-sm">
												<CheckCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
												{feature}
											</li>
										))}
									</ul>
								</div>
							</div>
						</motion.div>
					))}
				</div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center">
					<p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
						Zainteresowany dołączeniem do naszego klubu? Skontaktuj się z nami!
					</p>
					<motion.a
						href="#contact"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-red-600/25 inline-block">
						Dołącz do klubu
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
