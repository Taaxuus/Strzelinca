"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const Gallery = () => {
	const [selectedImage, setSelectedImage] = useState<number | null>(null);

	const images = [
		{
			src: "/api/placeholder/600/400",
			alt: "Nowoczesne stanowiska strzeleckie",
			title: "Stanowiska strzeleckie",
		},
		{
			src: "/api/placeholder/600/400",
			alt: "Trening z instruktorem",
			title: "Szkolenie z instruktorem",
		},
		{
			src: "/api/placeholder/600/400",
			alt: "Sala teoretyczna",
			title: "Sala szkoleniowa",
		},
		{
			src: "/api/placeholder/600/400",
			alt: "Wyposażenie klubu",
			title: "Profesjonalne wyposażenie",
		},
		{
			src: "/api/placeholder/600/400",
			alt: "Zawody strzeleckie",
			title: "Zawody klubowe",
		},
		{
			src: "/api/placeholder/600/400",
			alt: "Ceremonia wręczenia nagród",
			title: "Ceremonia nagród",
		},
	];

	return (
		<>
			<section id="gallery" className="py-24 lg:py-32 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-20 lg:mb-24">
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
							Galeria
						</h2>
						<div className="w-32 h-1.5 bg-red-600 mx-auto mb-10"></div>
						<p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
							Zobacz nasze nowoczesne zaplecze, profesjonalne stanowiska
							strzeleckie i atmosferę podczas zajęć i zawodów.
						</p>
					</motion.div>

					<div className="flex justify-center mb-24 lg:mb-32">
						<div className="flex flex-wrap justify-center items-stretch gap-16 lg:gap-20 max-w-6xl">
							{images.map((image, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ delay: index * 0.1, duration: 0.6 }}
									viewport={{ once: true }}
									className="group relative overflow-hidden rounded-3xl cursor-pointer w-full max-w-sm flex-grow-0 flex-shrink-0"
									onClick={() => setSelectedImage(index)}>
									<div className="bg-white rounded-3xl overflow-hidden w-full shadow-lg border border-gray-200">
										<div className="w-full h-80 lg:h-96 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
											<div className="text-center text-gray-700 px-8">
												<div className="w-20 h-20 lg:w-24 lg:h-24 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
													<ZoomIn className="w-10 h-10 lg:w-12 lg:h-12 text-red-600" />
												</div>
												<p className="font-semibold text-lg lg:text-xl mb-2 text-gray-900">
													{image.title}
												</p>
												<p className="text-sm md:text-base text-gray-600">
													Kliknij aby powiększyć
												</p>
											</div>
										</div>
									</div>

									<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-3xl">
										<div className="text-center text-white">
											<ZoomIn className="w-16 h-16 mx-auto mb-4" />
											<p className="font-semibold text-xl">{image.title}</p>
										</div>
									</div>

									<div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-red-500 rounded-3xl transition-all duration-300"></div>
								</motion.div>
							))}
						</div>
					</div>

					{/* <motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="flex justify-center">
						<div className="bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-3xl p-12 lg:p-16 backdrop-blur-sm border border-red-600/30 max-w-4xl w-full text-center">
							<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
								Odwiedź nas osobiście
							</h3>
							<p className="text-gray-300 mb-10 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl leading-relaxed">
								Zapraszamy do osobistego odwiedzenia naszego klubu. Chętnie
								pokażemy Ci nasze zaplecze i odpowiemy na wszystkie pytania.
							</p>
							<motion.a
								href="#contact"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="inline-block bg-red-600 hover:bg-red-700 text-white px-12 py-4 lg:px-16 lg:py-5 rounded-xl font-semibold text-lg lg:text-xl transition-colors duration-300">
								Umów wizytę
							</motion.a>
						</div>
					</motion.div> */}
				</div>
			</section>

			{/* Modal for enlarged image */}
			{selectedImage !== null && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
					onClick={() => setSelectedImage(null)}>
					<motion.div
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0.8 }}
						className="relative max-w-4xl max-h-full"
						onClick={(e) => e.stopPropagation()}>
						<button
							onClick={() => setSelectedImage(null)}
							className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors">
							<X className="w-8 h-8" />
						</button>

						<div className="bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-2xl p-8 backdrop-blur-sm border border-red-600/30">
							<h3 className="text-2xl font-bold text-white text-center mb-4">
								{images[selectedImage].title}
							</h3>
							<div className="w-full h-96 bg-gray-800 rounded-xl flex items-center justify-center">
								<div className="text-center text-white">
									<div className="w-20 h-20 bg-red-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
										<ZoomIn className="w-10 h-10" />
									</div>
									<p className="text-lg font-semibold">
										{images[selectedImage].title}
									</p>
									<p className="text-gray-300 mt-2">
										Zdjęcie będzie dostępne wkrótce
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</>
	);
};

export default Gallery;
