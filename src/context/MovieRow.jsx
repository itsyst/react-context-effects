import React, { useContext } from 'react';
import withTooltip from '../components/withTooltip';
import Login from './Login';
import UserContext from './userContext';

function MovieRow(props) {
	const currentUser = useContext(UserContext);
	return (
		<div>
			<h1>Movie Row</h1>
			<ul>
				<li>
					{currentUser.currentUser
						? currentUser.currentUser.name
						: '...'}
				</li>
				{props.showTooltip && (
					<li>
						{currentUser.currentUser
							? currentUser.currentUser.email
							: '...'}
					</li>
				)}
			</ul>
			<Login />
		</div>
	);
}

export default withTooltip(MovieRow);
