"use client";
import { motion } from "framer-motion";
import {
	MapPin,
	Phone,
	Mail,
	Clock,
	Send,
	Facebook,
	CheckCircle,
	AlertCircle,
} from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");
	const [submitMessage, setSubmitMessage] = useState("");
	const recaptchaRef = useRef<ReCAPTCHA>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Sprawdź reCAPTCHA
		const recaptchaValue = recaptchaRef.current?.getValue();
		if (!recaptchaValue) {
			setSubmitStatus("error");
			setSubmitMessage("Proszę potwierdzić, że nie jesteś robotem.");
			return;
		}

		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			// Konfiguracja EmailJS - zastąp swoimi kluczami
			const serviceId =
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
			const templateId =
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
			const publicKey =
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

			const templateParams = {
				from_name: formData.name,
				from_email: formData.email,
				phone: formData.phone,
				message: formData.message,
				to_email: "strzelkaks@gmail.com",
				"g-recaptcha-response": recaptchaValue,
			};

			await emailjs.send(serviceId, templateId, templateParams, publicKey);

			setSubmitStatus("success");
			setSubmitMessage(
				"Wiadomość została wysłana pomyślnie! Odpowiemy w ciągu 24 godzin."
			);
			setFormData({ name: "", email: "", phone: "", message: "" });
			recaptchaRef.current?.reset();
		} catch (error) {
			console.error("Error sending email:", error);
			setSubmitStatus("error");
			setSubmitMessage(
				"Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub skontaktuj się bezpośrednio."
			);
		} finally {
			setIsSubmitting(false);
		}
	};
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const contactInfo = [
		{
			icon: MapPin,
			title: "Adres",
			details: ["ul. Złota 65", "Głogów Małopolski, Poland"],
			link: "https://maps.google.com",
		},
		{
			icon: Phone,
			title: "Telefon",
			details: ["+48 502 523 887"],
			link: "tel:+48502523887",
		},
		{
			icon: Mail,
			title: "Email",
			details: ["strzelkaks@gmail.com"],
			link: "mailto:strzelkaks@gmail.com",
		},
		{
			icon: Clock,
			title: "Godziny treningów",
			details: ["Każdy drugi wtorek miesiąca: 18:00-20:00"],
			link: null,
		},
	];

	const socialLinks = [
		{
			icon: Facebook,
			href: "https://www.facebook.com/p/Klub-Strzelecki-Strzelka-100064567940959/?locale=pl_PL",
			label: "Facebook",
		},
	];

	return (
		<section id="contact" className="py-24 lg:py-32 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-20 lg:mb-24">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
						Kontakt
					</h2>
					<div className="w-32 h-1.5 bg-red-600 mx-auto mb-10"></div>
					<p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
						Masz pytania? Chcesz dołączyć do klubu? Skontaktuj się z nami!
					</p>
				</motion.div>

				<div className="flex flex-col lg:flex-row justify-center items-stretch gap-20 lg:gap-24 max-w-7xl mx-auto">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="flex-1 flex flex-col items-center text-center max-w-2xl">
						<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
							Informacje kontaktowe
						</h3>

						<div className="flex flex-col items-center space-y-8 lg:space-y-10 mb-12 lg:mb-16 w-full">
							{contactInfo.map((info, index) => (
								<motion.div
									key={info.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1, duration: 0.6 }}
									viewport={{ once: true }}
									className="flex flex-col items-center space-y-4 group text-center w-full max-w-sm">
									<div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-red-600/20 rounded-full flex items-center justify-center group-hover:bg-red-600/40 transition-all duration-300 group-hover:scale-110">
										<info.icon className="w-8 h-8 lg:w-10 lg:h-10 text-red-500" />
									</div>
									<div className="text-center">
										<h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
											{info.title}
										</h4>
										{info.details.map((detail, detailIndex) => (
											<p
												key={detailIndex}
												className="text-gray-600 text-lg leading-relaxed">
												{info.link && detailIndex === 0 ? (
													<a
														href={info.link}
														className="hover:text-red-500 transition-colors">
														{detail}
													</a>
												) : (
													detail
												)}
											</p>
										))}
									</div>
								</motion.div>
							))}
						</div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.6 }}
							viewport={{ once: true }}
							className="text-center w-full">
							<h4 className="text-xl md:text-2xl font-semibold text-white mb-8">
								Śledź nas w mediach społecznościowych
							</h4>
							<div className="flex justify-center space-x-6">
								{socialLinks.map((social, index) => (
									<motion.a
										key={social.label}
										href={social.href}
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ delay: index * 0.1, duration: 0.6 }}
										viewport={{ once: true }}
										whileHover={{ scale: 1.1 }}
										className="w-14 h-14 lg:w-16 lg:h-16 bg-red-600/20 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group">
										<social.icon className="w-7 h-7 lg:w-8 lg:h-8 text-red-500 group-hover:text-white transition-colors" />
									</motion.a>
								))}
							</div>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="flex-1 bg-white rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-lg max-w-2xl">
						<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
							Wyślij wiadomość
						</h3>

						<form onSubmit={handleSubmit} className="space-y-8">
							<div className="grid sm:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="name"
										className="block text-lg font-medium text-gray-900 mb-3">
										Imię i nazwisko *
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all text-lg"
										placeholder="Jan Kowalski"
									/>
								</div>

								<div>
									<label
										htmlFor="phone"
										className="block text-lg font-medium text-gray-900 mb-3">
										Telefon
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all text-lg"
										placeholder="+48 123 456 789"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-lg font-medium text-gray-900 mb-3">
									Email *
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all text-lg"
									placeholder="jan@example.com"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-lg font-medium text-gray-900 mb-3">
									Wiadomość *
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={6}
									className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all resize-none text-lg"
									placeholder="Jak mogę dołączyć do klubu? Jakie są koszty członkostwa?..."
								/>
							</div>

							{/* reCAPTCHA */}
							<div className="flex justify-center">
								<ReCAPTCHA
									ref={recaptchaRef}
									sitekey={
										process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
										"6LfRKZorAAAAAFFjqqKJNptk7Sz2DtF7DR1pvrYQ"
									}
									theme="light"
								/>
							</div>

							{/* Status wiadomości */}
							{submitStatus !== "idle" && (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className={`p-4 rounded-xl flex items-center space-x-3 ${
										submitStatus === "success"
											? "bg-green-50 text-green-800 border border-green-200"
											: "bg-red-50 text-red-800 border border-red-200"
									}`}>
									{submitStatus === "success" ? (
										<CheckCircle className="w-5 h-5 text-green-600" />
									) : (
										<AlertCircle className="w-5 h-5 text-red-600" />
									)}
									<p className="text-sm font-medium">{submitMessage}</p>
								</motion.div>
							)}

							<motion.button
								type="submit"
								disabled={isSubmitting}
								whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
								whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
								className={`w-full py-5 px-8 rounded-xl font-semibold text-lg lg:text-xl transition-colors duration-300 flex items-center justify-center space-x-3 shadow-lg ${
									isSubmitting
										? "bg-gray-400 cursor-not-allowed"
										: "bg-red-600 hover:bg-red-700 hover:shadow-red-600/25"
								} text-white`}>
								{isSubmitting ? (
									<>
										<div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
										<span>Wysyłanie...</span>
									</>
								) : (
									<>
										<Send className="w-6 h-6" />
										<span>Wyślij wiadomość</span>
									</>
								)}
							</motion.button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
