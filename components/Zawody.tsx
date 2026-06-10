"use client";
import { motion } from "framer-motion";
import { MapPin, Clock, Calendar, Target, CheckCircle, Bell } from "lucide-react";

const COMPETITION_DATE = new Date("2026-06-28T13:00:00");

const disciplines = [
	{
		name: "Pistolet sportowy 10 strzałów",
		code: "Psp 10 TS-2",
		distance: "25 m",
		shots: "10 strzałów ocenianych do jednej tarczy TS-2",
		time: "5 minut",
	},
	{
		name: "Pistolet sportowy 13 strzałów",
		code: "Psp 10 z13 TS-2",
		distance: "25 m",
		shots: "10 strzałów ocenianych do jednej tarczy TS-",
		time: "5 minut",
	},
	{
		name: "Pistolet wojskowy 10 strzałów",
		code: "PW 10 TS-2",
		distance: "15 m",
		shots: "10 strzałów ocenianych do jednej tarczy TS-2",
		time: "30 sekund",
	},
	{
		name: "Pistolet centralnego zapłonu 10 strzałów",
		code: "PCZ 10 Żołnierz",
		distance: "15 m",
		shots:
			'mechaniczne przyrządy celownicze, 10 strzałów ocenianych do jednej tarczy „Żołnierz"',
		time: "30 sekund",
	},
	{
		name: "Karabin Centralnego Zapłonu 10 strzałów",
		code: "KCZ 10 TS-2",
		distance: "25 m",
		shots: "10 strzałów ocenianych do jednej tarczy TS-2",
		time: "1 minuta",
	},
	{
		name: "Karabin Wojskowy 10 strzałów",
		code: "KW 10 Żołnierz",
		distance: "25 m",
		shots:
			'mechaniczne przyrządy celownicze, 10 strzałów ocenianych do tarczy „Żołnierz"',
		time: "15 sekund",
	},
	{
		name: "Strzelba gładkolufowa 25 metrów",
		code: "Strzelba 5 Żołnierz",
		distance: "25 m",
		shots: '5 strzałów ocenianych do tarczy „Żołnierz"',
		time: "1 minuta",
	},
	{
		name: "Strzelba gładkolufowa 25 metrów",
		code: "Strzelba 5 TS-2",
		distance: "25 m",
		shots: "5 strzałów ocenianych do tarczy TS-2",
		time: "1 minuta",
	},
];

const Zawody = () => {
	const isFinished = new Date() > COMPETITION_DATE;

	return (
		<section id="zawody" className="py-24 lg:py-32 bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-20 lg:mb-24">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
						Zawody strzeleckie
					</h2>
					<div className="w-32 h-1.5 bg-red-600 mx-auto mb-10"></div>
					<p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
						{isFinished
							? "Informacje o kolejnych zawodach pojawią się wkrótce."
							: "Informacje o nadchodzących zawodach — termin, miejsce i program."}
					</p>
				</motion.div>

				{isFinished ? (
					/* Zawody zakończone */
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true }}
						className="flex flex-col items-center gap-8 text-center">
						<div className="flex items-center justify-center w-24 h-24 rounded-full bg-green-600/20 border border-green-600/30">
							<CheckCircle className="w-12 h-12 text-green-500" />
						</div>
						<div>
							<h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
								Zawody zakończone
							</h3>
							<p className="text-gray-400 text-lg max-w-xl">
								Zawody z dnia 28.06.2026 zostały zakończone. Dziękujemy wszystkim uczestnikom!
							</p>
						</div>
						<div className="flex items-center gap-3 bg-gray-800 border border-gray-700 rounded-2xl px-8 py-5">
							<Bell className="w-6 h-6 text-red-500 shrink-0" />
							<p className="text-gray-300">
								Informacje o kolejnych zawodach pojawią się wkrótce — śledź aktualności.
							</p>
						</div>
					</motion.div>
				) : (
					<>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="mb-16 lg:mb-20">
					<h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
						Termin i miejsce zawodów
					</h3>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Data */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							viewport={{ once: true }}
							className="flex items-start gap-4 bg-gray-800 rounded-2xl p-6 border border-gray-700">
							<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-600/20 shrink-0">
								<Calendar className="w-6 h-6 text-red-500" />
							</div>
							<div>
								<p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">
									Data i godzina
								</p>
								<p className="text-white font-semibold text-lg leading-snug">
									28.06.2026
								</p>
								<p className="text-gray-300 flex items-center gap-1 mt-1">
									<Clock className="w-4 h-4 text-red-500 shrink-0" />
									<span>godz. 8:00 – 13:00</span>
								</p>{" "}
								<p className="text-gray-400 flex items-center gap-1 mt-2 text-sm">
									<Clock className="w-3.5 h-3.5 text-red-500 shrink-0" />
									<span>
										Rejestracja do godz.{" "}
										<span className="text-red-400 font-semibold">10:00</span>
									</span>
								</p>{" "}
							</div>
						</motion.div>

						{/* Adres */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className="flex items-start gap-4 bg-gray-800 rounded-2xl p-6 border border-gray-700">
							<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-600/20 shrink-0">
								<MapPin className="w-6 h-6 text-red-500" />
							</div>
							<div>
								<p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">
									Adres strzelnicy
								</p>
								<p className="text-white font-semibold text-lg leading-snug">
									ul. Złota 65
								</p>
								<p className="text-gray-300">36-060 Głogów Młp.</p>
							</div>
						</motion.div>
					</div>
				</motion.div>

				{/* Program zawodów */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}>
					<h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
						Program zawodów
					</h3>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						{disciplines.map((d, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.07 }}
								viewport={{ once: true }}
								className="group bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-red-600/50 rounded-2xl p-6 transition-all duration-300">
								<div className="flex items-start gap-4">
									<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/20 group-hover:bg-red-600/30 shrink-0 transition-colors duration-300">
										<Target className="w-5 h-5 text-red-500" />
									</div>
									<div className="flex-1 min-w-0">
										<p className="text-white font-bold text-base leading-snug mb-1">
											{d.name}
										</p>
										<p className="text-red-400 text-sm font-semibold mb-3">
											({d.code})
										</p>
										<div className="space-y-1.5 text-sm text-gray-400">
											<p>
												<span className="text-gray-500">Dystans:</span>{" "}
												<span className="text-gray-300 font-medium">
													{d.distance}
												</span>
												{" · "}
												<span className="text-gray-500">
													Mechaniczne przyrządy celownicze
												</span>
											</p>
											<p>
												<span className="text-gray-500">Strzały:</span>{" "}
												<span className="text-gray-300">{d.shots}</span>
											</p>
											<p className="flex items-center gap-1.5">
												<Clock className="w-3.5 h-3.5 text-red-500 shrink-0" />
												<span className="text-gray-300 font-semibold">
													{d.time}
												</span>
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
				</>
				)}
			</div>
		</section>
	);
};

export default Zawody;
