import { useReducer } from 'react';
import counterReducer from '../reducers/counterReducer';

const CounterF = () => {
	const [value, dispatch] = useReducer(counterReducer, 0);

	return (
		<div className="d-flex align-items-center justify-content-start mx-2">
			<div className="pe-2 text-white"> Count: {value} </div>
			<button
				className="btn btn-secondary"
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

export default CounterF;
