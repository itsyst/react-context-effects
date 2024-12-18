import { useState } from 'react';
import useDocumentTitle from './useDocumentTitle';

const Counter = () => {
	const [name, setName] = useState('');
	const [count, setCount] = useState(0);

	useDocumentTitle(`${name} has clicked ${count} times!`); // custom hook

	return (
		<div className="d-flex flex-row align-items-center mt-3 mb-3 justify-content-start">
			<input
				className="form-control me-3 w-25" // Reduced width
				type="text"
				onChange={(e) => setName(e.target.value)}
				placeholder="Enter name"
			/>
			<span className="ms-2 me-2">
				{name} has clicked <b>{count}</b> times!
			</span>
			<div className="btn btn-secondary p-0">
				<button className="btn btn-secondary ms-2" onClick={() => setCount(count + 1)}>
					Increase
				</button>
			</div>
		</div>
	);
};

export default Counter;
