import useUser from '../../hooks/useUser';
import { UserType } from '../../types/UserType';

const Login = () => {
	const currentUser = useUser();
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
