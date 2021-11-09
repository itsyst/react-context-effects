import React, { useContext } from 'react';
import withTooltip from '../components/withTooltip';
import Login from './Login';
import UserContext from './userContext';
import CartContext from './cartContext';

function MovieRow(props) {
	const currentUser = useContext(UserContext);
	const cartContext = useContext(CartContext);
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
			<div>
				<ul>
					{cartContext.cart.map((cart) => (
						<li key={cart}>{cart}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default withTooltip(MovieRow);
