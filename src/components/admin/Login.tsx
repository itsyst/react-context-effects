import useAuth from '../../hooks/useAuth';
import { UserType } from '../../types/UserType';

const Login = () => {
	const { onLogin } = useAuth();

	const currentUser: UserType = {
		name: 'Nishitha Rao',
		email: 'nishitha.rao@example.com'
	};

	return (
		<button
			className="btn btn-primary me-2"
			onClick={() => onLogin(currentUser)}
		>
			Login
		</button>
	);
};

export default Login;
