import { createContext } from "react";
import colorData from "../color_data.json";
import { render } from "react-dom";
import App from "../App";

type Color = {
	id: string;
	title: string;
	color: string;
	rating: number;
};

export const ColorContext = createContext<{ colors: Color[] | null }>({
	colors: null,
});

render(
	<ColorContext.Provider value={{ colors: colorData }}>
		<App />
	</ColorContext.Provider>,
	document.getElementById("root"),
);
