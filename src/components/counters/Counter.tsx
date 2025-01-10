import { userCounterStore } from './store';

const Counter = () => {
	const { counter, increment, reset } = userCounterStore();

	return (
		<>
			<div className="d-flex align-items-center justify-content-between mb-5">
				<div className="text-white pe-2"> Count: {counter} </div>
				<div>
					<button className="btn btn-primary m-2" onClick={increment}>
						Increase
					</button>
					<button className="btn btn-danger m-2" onClick={reset}>
						Reset
					</button>
				</div>
			</div>
			<hr className="text-white" />
		</>
	);
};

export default Counter;
