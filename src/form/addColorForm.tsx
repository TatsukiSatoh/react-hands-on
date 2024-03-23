import { useInput } from "./hooks";

export default function AddColorForm({
	onNewColor,
}: { onNewColor: (title: string, color: string) => void }) {
	const [titleProps, resetTitle] = useInput("");
	const [colorProps, resetColor] = useInput("#000000");

	const submit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onNewColor(titleProps.value, colorProps.value);
		resetTitle();
		resetColor();
	};

	return (
		<form onSubmit={submit}>
			<input {...titleProps} placeholder="color title..." required />
			<input {...colorProps} required />
			<button type="button">ADD</button>
		</form>
	);
}
