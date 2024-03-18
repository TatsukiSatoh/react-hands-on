import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import StarRating from "./StarRating";
import colorData from "./color_data.json";
import ColorList from "./ColorList";

function App() {
	const [colors] = useState(colorData);
	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a> */}
				<>
					<ColorList colors={colors} />
				</>
			</header>
		</div>
	);
}

export default App;
