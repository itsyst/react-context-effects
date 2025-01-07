import userCounterStore from './store';

const Counter = () => {
	const { counter, increment, reset } = userCounterStore();

	return (
		<div className="d-flex align-items-center">
			<div className="text-white pe-2 "> Count: {counter} </div>
			<button className="btn btn-primary" onClick={increment}>
				Increase
			</button>
			<button className="btn btn-danger ms-2" onClick={reset}>
				Reset
			</button>
		</div>
	);
};

export default Counter;
