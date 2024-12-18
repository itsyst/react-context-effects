import { useState } from 'react';

const CounterF = () => {
	const [count, setCount] = useState(0);
	return (
		<div className="d-flex flex-row bd-highlight mb-3 align-items-center">
			<div className="pe-2"> Count: {count} </div>
			<button className="btn btn-secondary" onClick={() => setCount(count + 1)}>
				Increase
			</button>
		</div>
	);
};

export default CounterF;
