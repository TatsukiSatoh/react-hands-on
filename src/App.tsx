import React, { useState, createContext } from "react";
import "./App.css";
import colorData from "./color_data.json";
import ColorList from "./ColorList";
import AddColorForm from "./form/addColorForm";
import { v4 } from "uuid";

type Color = {
	id: string;
	title: string;
	color: string;
	rating: number;
};

export const ColorContext = createContext<{ colors: Color[] | null }>({
	colors: null,
});

function App() {
	const [colors, setColors] = useState(colorData);
	return (
		<ColorContext.Provider value={{ colors: colors }}>
			<div className="App">
				<div>test</div>
			</div>
		</ColorContext.Provider>
	);
}

export default App;
