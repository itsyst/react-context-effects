import { Fragment, useState } from 'react';

function CounterF(props) {
	const [count, setCount] = useState(0);
	return (
		<div>
			<Fragment>
				<div> Count: {count} </div>
				<button onClick={() => setCount(count + 1)}> Increase </button>
			</Fragment>
		</div>
	);
}

export default CounterF;
