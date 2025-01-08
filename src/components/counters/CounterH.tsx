import { useState } from 'react';
import userCounterStore from './store';

const Counter = () => {
	const [name, setName] = useState('');
	const { counter, increment } = userCounterStore();

	return (
		<div className="d-flex align-items-center justify-content-start mt-2 mb-3">
			<input
				className="form-control w-50 col-6" // Reduced width
				type="text"
				onChange={(e) => setName(e.target.value)}
				placeholder="Enter name"
			/>
			<div className="d-flex align-items-center justify-content-space-between ms-2 col-6">
				<div className="text-white font-weight-bold">{`${name} has clicked ${counter} times!`}</div>

				<button className="btn btn-secondary ms-2" onClick={increment}>
					Increase
				</button>
			</div>
		</div>
	);
};

export default Counter;
