import { UserType } from './UserType';
import useAuthStore from './store';

const Login = () => {
	const { onLogin } = useAuthStore();
	const currentUser: UserType = {
		id: 1,
		name: 'Nishitha Rao'
	};

	return (
		<button
			className="btn btn-dark me-2 rounded-pill"
			onClick={() => {
				onLogin(currentUser);
			}}
		>
			Login
		</button>
	);
};

export default Login;
