import { useNavigate } from 'react-router';
import { UserType } from './UserType';
import useAuthStore from './store';

const Login = () => {
	const { onLogin } = useAuthStore();
	const navigate = useNavigate();
	const currentUser: UserType = {
		name: 'Nishitha Rao'
	};

	return (
		<button
			className="btn btn-dark me-2 rounded-pill"
			onClick={() => {
				onLogin(currentUser);
				navigate('/counters');
			}}
		>
			Login
		</button>
	);
};

export default Login;
