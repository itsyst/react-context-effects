import React, { useContext } from 'react';
import withTooltip from '../components/withTooltip';
import UserContext from './userContext';

function MovieRow(props) {
	const currentUser = useContext(UserContext);
	return (
		<div>
			<h1>Movie Row</h1>
			<ul>
				<li>{currentUser.name}</li>
				{props.showTooltip && <li>{currentUser.email}</li>}
			</ul>
		</div>
	);
}

export default withTooltip(MovieRow);
