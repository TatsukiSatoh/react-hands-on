import { useState, createContext } from "react";
import colorData from "../color_data.json";

type Color = {
	id: string;
	title: string;
	color: string;
	rating: number;
};

type ColorContextType = {
	colors: Color[] | null;
	addColor: (title: string, color: string) => void;
	rateColor: (id: string, rating: number) => void;
	removeColor: (id: string) => void;
};

const defaultContextValue: ColorContextType = {
	colors: null,
	addColor: () => console.warn("addColor not implemented"),
	rateColor: () => console.warn("rateColor not implemented"),
	removeColor: () => console.warn("removeColor not implemented"),
};

export const ColorContext =
	createContext<ColorContextType>(defaultContextValue);

export default function ColorProvider({
	children,
}: { children: React.ReactNode }) {
	const [colors, setColors] = useState<Color[] | null>(colorData);

	const addColor = (title: string, color: string) => {
		if (!colors) return console.error("No colors");
		setColors([
			...colors,
			{
				id: String(colors.length + 1),
				title,
				color,
				rating: 0,
			},
		]);
	};

	const rateColor = (id: string, rating: number) => {
		if (!colors) return console.error("No colors");

		setColors(
			colors.map((color) => (color.id === id ? { ...color, rating } : color)),
		);
	};

	const removeColor = (id: string) => {
		if (!colors) return console.error("No colors");

		setColors(colors.filter((color) => color.id !== id));
	};

	return (
		<ColorContext.Provider value={{ colors, addColor, rateColor, removeColor }}>
			{children}
		</ColorContext.Provider>
	);
}
