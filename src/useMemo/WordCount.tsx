import { useMemo } from "react";

// childenプロパティが更新されない限り、子コンポーネントは再レンダリングされない
export function WordCount({ children }: { children: string }) {
	const words = useMemo(() => children.split(" "), [children]);
	return (
		<div>
			<p>
				<strong>{words.length}</strong> words
			</p>
		</div>
	);
}
