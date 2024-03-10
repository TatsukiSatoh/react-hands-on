import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = (f: any) => f }) => (
	<FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

export default function StarRating({ totalStars = 5, style = {}, ...props }) {
	const [selectedStars, setSelectedStars] = useState(0);
	return (
		<div style={{ padding: "5px", ...style }} {...props}>
			{[...Array(totalStars)].map((n, i) => (
				<Star
					key={i.toString()}
					selected={selectedStars > i}
					onSelect={() => setSelectedStars(i + 1)}
				/>
			))}
			<p>
				{selectedStars} of {totalStars} stars
			</p>
		</div>
	);
}
