import { useContext } from 'react';
import UserContext from './userContext';

const Login = () => {
	const currentUser = useContext(UserContext);
	const user = {
		name: 'Khaled',
		email: 'khaled@domain.com'
	};
	return (
		<button className="btn btn-primary" onClick={() => currentUser.onLogin(user)}>
			Login
		</button>
	);
};

export default Login;
