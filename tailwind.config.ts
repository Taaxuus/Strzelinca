import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1.5rem",
				sm: "2rem",
				lg: "3rem",
				xl: "4rem",
				"2xl": "5rem",
			},
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1400px",
			},
		},
		extend: {
			screens: {
				xs: "475px",
				"3xl": "1600px",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				red: {
					"50": "#fef2f2",
					"100": "#fee2e2",
					"200": "#fecaca",
					"300": "#fca5a5",
					"400": "#f87171",
					"500": "#ef4444",
					"600": "#dc2626",
					"700": "#b91c1c",
					"800": "#991b1b",
					"900": "#7f1d1d",
				},
			},
			fontFamily: {
				sans: ["var(--font-geist-sans)", "sans-serif"],
				mono: ["var(--font-geist-mono)", "monospace"],
			},
			animation: {
				"spin-slow": "spin 8s linear infinite",
				"bounce-slow": "bounce 2s infinite",
				"pulse-slow": "pulse 3s infinite",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			spacing: {
				"18": "4.5rem",
				"22": "5.5rem",
				"26": "6.5rem",
				"30": "7.5rem",
				"88": "22rem",
				"128": "32rem",
				"144": "36rem",
				"160": "40rem",
			},
			maxWidth: {
				"8xl": "88rem",
				"9xl": "96rem",
				"10xl": "104rem",
			},
		},
	},
	plugins: [],
} satisfies Config;
