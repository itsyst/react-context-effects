import { userCounterStoreH } from './store';

const Counter = () => {
	const { name, handleChange, counter, increment, reset } = userCounterStoreH();

	return (
		<div className="d-flex align-items-center justify-content-start mt-2 mb-3">
			<input
				className="form-control w-50 col-6" // Reduced width
				type="text"
				value={name}
				onChange={handleChange}
				placeholder="Enter name"
			/>
			<div className="d-flex align-items-center justify-content-space-between ms-2 col-6">
				<div className="text-white font-weight-bold">{`${
					name || 'Anonym'
				} has clicked ${counter} times!`}</div>

				<button className="btn btn-secondary ms-2" onClick={increment}>
					Increase
				</button>
				<button className="btn btn-danger ms-2" onClick={reset}>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Counter;
