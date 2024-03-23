import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import StarRating from "./StarRating";
import colorData from "./color_data.json";
import ColorList from "./ColorList";

function App() {
	const [colors, setColors] = useState(colorData);
	return (
		<div className="App">
			<header className="App-header">
				<>
					<ColorList
						colors={colors}
						onRemove={(id: string) => {
							const newColors = colors.filter((color) => color.id !== id);
							setColors(newColors);
						}}
						onRate={(id: string, rating: number) => {
							const newColors = colors.map((color) =>
								color.id === id ? { ...color, rating } : color,
							);
							setColors(newColors);
						}}
					/>
				</>
			</header>
		</div>
	);
}

export default App;
