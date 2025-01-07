import { useReducer } from 'react';
import counterReducer from '../reducers/counterReducer';

const Counter = () => {
	const [value, dispatch] = useReducer(counterReducer, 0);

	return (
		<div className="d-flex align-items-center">
			<div className="text-white pe-2 "> Count: {value} </div>
			<button
				className="btn btn-primary"
				onClick={() => dispatch({ type: 'INCREMENT' })}
			>
				Increase
			</button>
			<button
				className="btn btn-danger ms-2"
				onClick={() => dispatch({ type: 'RESET' })}
			>
				Reset
			</button>
		</div>
	);
};

export default Counter;
