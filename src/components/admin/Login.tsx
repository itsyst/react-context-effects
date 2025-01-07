import { useContext } from 'react';
import UserContext from '../../contexts/userContext';
import { UserContextType, UserType } from '../../types/UserType';

const Login = () => {
	const currentUser = useContext<UserContextType | undefined>(UserContext);
	const user: UserType = {
		name: 'Nishitha Rao',
		email: 'nishitha.rao@example.com'
	};

	return (
		<button
			className="btn btn-primary me-2"
			onClick={() => currentUser && currentUser.onLogin(user)}
		>
			Login
		</button>
	);
};

export default Login;
