import { UserType } from './types/UserType';
import useAuthStore from './store/store';

const Login = () => {
	const { onLogin } = useAuthStore();

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
