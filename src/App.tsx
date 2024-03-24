import React, { useState } from "react";
import "./App.css";
import colorData from "./color_data.json";
import ColorList from "./ColorList";
import AddColorForm from "./form/addColorForm";
import { v4 } from "uuid";

function App() {
	const [colors, setColors] = useState(colorData);
	return (
		<div className="App">
			<div>test</div>
			<header className="App-header">
				<>
					<ColorList
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
					<AddColorForm
						onNewColor={(title: string, color: string) => {
							const newColors = [
								...colors,
								{
									id: v4(),
									title,
									color,
									rating: 0,
								},
							];
							setColors(newColors);
						}}
					/>
				</>
			</header>
		</div>
	);
}

export default App;
