import { userCounterStoreF } from './store';

const CounterF = () => {
	const { counter, increment, reset } = userCounterStoreF();

	return (
		<>
			<div className="d-flex align-items-center justify-content-between mb-5">
				<div className="pe-2 text-white"> Count: {counter} </div>
				<div>
					<button className="btn btn-secondary m-2" onClick={increment}>
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

export default CounterF;
