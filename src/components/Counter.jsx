import { useState } from 'react';
import UserContext from '../context/userContext';

const Counter = () => {
	const [count, setCount] = useState(0);

	const increaseCount = () => {
		setCount(count + 1);
	};

	return (
		<UserContext.Consumer>
			{(userContext) => (
				<div className="d-flex flex-row bd-highlight mb-3 align-items-center">
					<div className="pe-2"> Count: {count} </div>
					<button className="btn btn-primary" onClick={increaseCount}>
						Increase
					</button>
					<p>{userContext.name}</p>
				</div>
			)}
		</UserContext.Consumer>
	);
};

export default Counter;
