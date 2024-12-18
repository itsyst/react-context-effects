import { useContext } from 'react';
import withTooltip from '../components/withTooltip';
import Login from './Login';
import UserContext from './userContext';
import CartContext from './cartContext';
import PropTypes from 'prop-types';

const MovieRow = ({ showTooltip }) => {
	// Using React's useContext hook to consume context
	const currentUser = useContext(UserContext);
	const cartContext = useContext(CartContext);

	return (
		<div className="mt-2">
			<h1>Movie Row</h1>
			<ul>
				<li>{currentUser?.currentUser ? currentUser.currentUser.name : '...'}</li>
				{showTooltip && <li>{currentUser?.currentUser ? currentUser.currentUser.email : '...'}</li>}
			</ul>
			<Login />
			<div>
				<ul className="list-unstyled">
					{cartContext?.cart?.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

MovieRow.prototype = {
	showTooltip: PropTypes.bool.isRequired
};

export default withTooltip(MovieRow);
