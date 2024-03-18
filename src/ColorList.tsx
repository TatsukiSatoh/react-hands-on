import Color from "./Color";

export default function ColorList({
	colors = [],
}: { colors: { id: string; title: string; color: string; rating: number }[] }) {
	if (!colors.length) return <div>No Colors Listed.</div>;
	return (
		<div>
			{colors.map((color) => (
				<Color key={color.id} {...color} />
			))}
		</div>
	);
}
