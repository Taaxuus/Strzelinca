"use client";
import { motion } from "framer-motion";
import { Calendar, Eye, ArrowRight } from "lucide-react";

const News = () => {
	// Funkcja do obliczania następnego drugiego wtorku miesiąca
	const getNextSecondTuesday = () => {
		const now = new Date();
		const year = now.getFullYear();
		const month = now.getMonth();

		// Znajdź pierwszy dzień miesiąca
		const firstDay = new Date(year, month, 1);
		// Znajdź pierwszy wtorek miesiąca (wtorek = 2)
		const daysUntilFirstTuesday = (2 - firstDay.getDay() + 7) % 7;
		const firstTuesday = new Date(year, month, 1 + daysUntilFirstTuesday);

		// Drugi wtorek to pierwszy wtorek + 7 dni
		const secondTuesday = new Date(firstTuesday);
		secondTuesday.setDate(firstTuesday.getDate() + 7);

		// Jeśli drugi wtorek tego miesiąca już minął, oblicz dla następnego miesiąca
		if (secondTuesday <= now) {
			const nextMonth = month === 11 ? 0 : month + 1;
			const nextYear = month === 11 ? year + 1 : year;

			const nextFirstDay = new Date(nextYear, nextMonth, 1);
			const nextDaysUntilFirstTuesday = (2 - nextFirstDay.getDay() + 7) % 7;
			const nextFirstTuesday = new Date(
				nextYear,
				nextMonth,
				1 + nextDaysUntilFirstTuesday
			);
			const nextSecondTuesday = new Date(nextFirstTuesday);
			nextSecondTuesday.setDate(nextFirstTuesday.getDate() + 7);

			return nextSecondTuesday;
		}

		return secondTuesday;
	};

	const news = [
		{
			id: 1,
			title: "Trening Strzelecki - drugi wtorek miesiąca",
			excerpt: `Regularne treningi strzeleckie odbywają się w każdy drugi wtorek miesiąca. Następny trening: ${getNextSecondTuesday().toLocaleDateString(
				"pl-PL",
				{ day: "numeric", month: "long", year: "numeric" }
			)}. Zapraszamy wszystkich członków!`,
			date: getNextSecondTuesday().toISOString().split("T")[0],
			views: 124,
		},
		{
			id: 2,
			title: "II runda zawodów strzeleckich - 7 września",
			excerpt:
				"Zapraszamy wszystkich członków klubu na II rundę zawodów strzeleckich, które odbędą się 7 września. Szczegóły dotyczące rejestracji wkrótce.",
			date: "2025-09-07",
			views: 89,
		},
		{
			id: 3,
			title: "Trening specjalistyczny - Strzelnica Bór",
			excerpt:
				"Planujemy zorganizować specjalistyczny trening skupiony na strzelaniu TRAP na strzelnicy Bór. Termin zostanie ogłoszony wkrótce.",
			date: "wkrótce",
			views: 67,
		},
	];

	const formatDate = (dateString: string) => {
		// Jeśli data to string "wkrótce", zwróć go bez formatowania
		if (dateString === "wkrótce") {
			return "Termin zostanie ogłoszony wkrótce";
		}

		const date = new Date(dateString);
		return date.toLocaleDateString("pl-PL", {
			day: "numeric",
			month: "long",
			year: "numeric",
		});
	};

	return (
		<section id="news" className="py-24 lg:py-32 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-20 lg:mb-24">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
						Aktualności klubowe
					</h2>
					<div className="w-32 h-1.5 bg-red-600 mx-auto mb-10"></div>
					<p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
						Bądź na bieżąco z najnowszymi wydarzeniami i informacjami z naszego
						klubu
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
					{news.map((article, index) => (
						<motion.article
							key={article.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							viewport={{ once: true }}
							className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-200">
							<div className="relative h-48 overflow-hidden">
								<div className="w-full h-full bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center">
									<div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center">
										<Calendar className="w-8 h-8 text-red-600" />
									</div>
								</div>
								<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
									<div className="flex items-center space-x-1 text-sm text-gray-600">
										<Eye className="w-4 h-4" />
										<span>{article.views}</span>
									</div>
								</div>
							</div>

							<div className="p-6">
								<div className="flex items-center space-x-2 text-sm text-red-600 mb-3">
									<Calendar className="w-4 h-4" />
									<span>{formatDate(article.date)}</span>
								</div>

								<h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
									{article.title}
								</h3>

								<p className="text-gray-600 leading-relaxed mb-4">
									{article.excerpt}
								</p>

								<div className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors">
									<span className="mr-2">Czytaj więcej</span>
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</div>
							</div>
						</motion.article>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					viewport={{ once: true }}
					className="text-center mt-16">
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-red-600/25">
						Zobacz wszystkie aktualności
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
};

export default News;
