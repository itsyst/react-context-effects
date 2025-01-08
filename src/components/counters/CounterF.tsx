import { userCounterStoreF } from './store';

const CounterF = () => {
 	const { counter, increment, reset } = userCounterStoreF();

	return (
		<div className="d-flex align-items-center justify-content-start mx-2">
			<div className="pe-2 text-white"> Count: {counter} </div>
			<button className="btn btn-secondary" onClick={increment}>
				Increase
			</button>
			<button className="btn btn-danger ms-2" onClick={reset}>
				Reset
			</button>
		</div>
	);
};

export default CounterF;
