import React, { useState } from 'react';
import useDocumentTitle from './useDocumentTitle';

function Counter(props) {
	const [name, setName] = useState('');
	const [count, setCount] = useState(0);

	useDocumentTitle(`${name} has clicked ${count} times!`); // custom hooks

	return (
		<div>
			<>
				<input type="text" onChange={(e) => setName(e.target.value)} />
				<div>
					{name} has clicked {count} times!
				</div>
				<button onClick={() => setCount(count + 1)}> Increase </button>
			</>
		</div>
	);
}

export default Counter;
