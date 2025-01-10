import { userCounterStoreH } from './store';

const Counter = () => {
	const { name, handleChange, counter, increment, reset } = userCounterStoreH();

	return (
		<>
			<div className="d-flex flex-column flex-md-row justify-content-between mt-2">
				<div className='col col-md-6'>
					<input
						className="form-control mb-3" // Reduced width
						type="text"
						value={name}
						onChange={handleChange}
						placeholder="Enter name"
					/>
				</div>
				<div className="d-flex flex-column flex-md-row align-items-center">
					<div className="text-white font-weight-bold">{`${
						name || 'Anonym'
					} has clicked ${counter} times!`}</div>
					<div>
						<button className="btn btn-secondary m-2" onClick={increment}>
							Increase
						</button>
						<button className="btn btn-danger m-2" onClick={reset}>
							Reset
						</button>
					</div>
				</div>
			</div>
			<hr className="text-white" />
		</>
	);
};

export default Counter;
