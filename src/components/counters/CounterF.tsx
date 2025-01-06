import { useState } from 'react';

const CounterF = () => {
	const [count, setCount] = useState(0);
	return (
		<div className="d-flex align-items-center justify-content-start mx-2">
			<div className="pe-2 text-white"> Count: {count} </div>
			<button className="btn btn-secondary" onClick={() => setCount(count + 1)}>
				Increase
			</button>
		</div>
	);
};

export default CounterF;
