import React, { useState } from "react";

// example of the difference between a state variable (hook variable in functions) and a simple function variable
export function Home() {
	var number = 12;
	const [numberHook, setNumberHook] = useState(12);

	return (
		<div className="text-center">
			<h2>Example of state vs non-state (hook vs non-hook) behavior</h2>
			<br />
			<br />
			This is my number: <h1>{numberHook}</h1>
			{/* if using simple variable 'number' the page does not re-render; switching to the hook variable 'numberHook' causes re-render and the displayed number updates */}
			<br />
			<br />
			<br />
			<button
				className="btn btn-outline-success btn-lg"
				onClick={() => {
					number = 13;
					setNumberHook(16);
					console.log(number);
				}}>
				Change number
			</button>
		</div>
	);
}
