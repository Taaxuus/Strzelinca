"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const Gallery = () => {
	const [selectedImage, setSelectedImage] = useState<number | null>(null);

	// Generuj ścieżki do wszystkich 31 zdjęć
	const images = Array.from({ length: 31 }, (_, index) => {
		const imageNumber = index + 1;
		// Obsługa specjalnego przypadku dla pliku "3jpg.jpg"
		const fileName = imageNumber === 3 ? "3jpg.jpg" : `${imageNumber}.jpg`;
		return {
			src: `/images/gallery/${fileName}`,
			alt: `Zdjęcie galerii ${imageNumber}`,
		};
	});

	// Obsługa klawiszy strzałek
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (selectedImage === null) return;
			
			if (e.key === "ArrowLeft") {
				setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
			} else if (e.key === "ArrowRight") {
				setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
			} else if (e.key === "Escape") {
				setSelectedImage(null);
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [selectedImage, images.length]);

	const goToPrevious = () => {
		if (selectedImage === null) return;
		setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
	};

	const goToNext = () => {
		if (selectedImage === null) return;
		setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
	};

	return (
		<>
			<section id="gallery" className="py-24 lg:py-32 bg-white">
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

					{/* Siatka zdjęć */}
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
						{images.map((image, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ delay: index * 0.02, duration: 0.6 }}
								viewport={{ once: true }}
								className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-gray-100"
								onClick={() => setSelectedImage(index)}>
								<Image
									src={image.src}
									alt={image.alt}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-110"
									sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
								/>
								<div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
									<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
											<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
											</svg>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Modal powiększonego zdjęcia */}
			{selectedImage !== null && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
					onClick={() => setSelectedImage(null)}>
					
					{/* Przycisk zamknij */}
					<button
						onClick={() => setSelectedImage(null)}
						className="absolute top-6 right-6 z-10 text-white hover:text-red-500 transition-colors">
						<X className="w-8 h-8" />
					</button>

					{/* Strzałka w lewo */}
					<button
						onClick={(e) => {
							e.stopPropagation();
							goToPrevious();
						}}
						className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-red-500 transition-colors">
						<ChevronLeft className="w-12 h-12" />
					</button>

					{/* Strzałka w prawo */}
					<button
						onClick={(e) => {
							e.stopPropagation();
							goToNext();
						}}
						className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-red-500 transition-colors">
						<ChevronRight className="w-12 h-12" />
					</button>

					{/* Zdjęcie */}
					<motion.div
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0.8 }}
						className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center"
						onClick={(e) => e.stopPropagation()}>
						<div className="relative w-full h-full">
							<Image
								src={images[selectedImage].src}
								alt={images[selectedImage].alt}
								fill
								className="object-contain"
								sizes="90vw"
								priority
							/>
						</div>
					</motion.div>

					{/* Licznik zdjęć */}
					<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-lg">
						{selectedImage + 1} / {images.length}
					</div>
				</motion.div>
			)}
		</>
	);
};

export default Gallery;
