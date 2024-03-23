import React, { useRef, type FormEvent } from "react";

// uncontrolled component
export default function AddColorForm({
	onNewColor,
}: { onNewColor: (title: string, color: string) => void }) {
	const txtTitle = useRef<HTMLInputElement | null>(null);
	const hexColor = useRef<HTMLInputElement | null>(null);

	const submit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const title = txtTitle.current?.value ?? "";
		const color = hexColor.current?.value ?? "";
		onNewColor(title, color);
		if (txtTitle.current) {
			txtTitle.current.value = "";
		}
		if (hexColor.current) {
			hexColor.current.value = "";
		}
	};
	return (
		<form onSubmit={submit}>
			<input ref={txtTitle} type="text" placeholder="color title..." required />
			<input ref={hexColor} type="color" required />
			<button type="button">ADD</button>
		</form>
	);
}
