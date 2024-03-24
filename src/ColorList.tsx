import { useContext } from "react";
import { ColorContext } from "./context";
import Color from "./Color";

export default function ColorList({
	// colors = [],
	onRemove,
	onRate,
}: {
	// colors: { id: string; title: string; color: string; rating: number }[];
	onRemove: (id: string) => void;
	onRate: (id: string, rating: number) => void;
}) {
	const { colors } = useContext(ColorContext);
	if (!colors || !colors.length) return <div>No Colors Listed.</div>;
	return (
		<div>
			{colors.map((color) => (
				<Color key={color.id} {...color} onRemove={onRemove} onRate={onRate} />
			))}
		</div>
	);
}
