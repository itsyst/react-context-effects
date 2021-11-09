import React, { useContext } from 'react';
import UserContext from './userContext';

function Login(props) {
	const currentUser = useContext(UserContext);
	const user = {
		name: 'Khaled',
		email: 'khaled@domain.com'
	};
	return (
		<div>
			<button onClick={() => currentUser.onLogin(user)}>Login</button>
		</div>
	);
}

export default Login;
