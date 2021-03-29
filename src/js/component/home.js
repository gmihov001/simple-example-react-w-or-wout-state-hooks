import React from "react";
import { useState } from "react";

// example of the difference between a state variable (hook variable in functions) and a simple function variable
export default function App() {
	var number = 12;
	const [numberHook, setNumberHook] = useState(12);

	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>
			This is my number: <h1>{numberHook}</h1>
			{/* if using simple variable 'number' the page does not re-render; switching to the hook variable 'numberHook' causes re-render and the displayed number updates */}
			<br />
			<br />
			<br />
			<button
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
