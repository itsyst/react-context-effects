import { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	const increaseCount = () => {
		setCount(count + 1);
	};

	return (
		<div className="d-flex align-items-center">
			<div className="pe-2 text-white"> Count: {count} </div>
			<button className="btn btn-primary" onClick={increaseCount}>
				Increase
			</button>
			<p className="text-white">{}</p>
		</div>
	);
};

export default Counter;
