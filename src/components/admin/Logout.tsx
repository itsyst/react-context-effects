import { useNavigate } from 'react-router';
import useAuthStore from './store';

const Logout = () => {
	const { onLogout } = useAuthStore();
	const navigate = useNavigate();

	return (
		<button
			className="btn btn-light rounded-pill"
			onClick={() => {
				onLogout();
				navigate('/counters');
			}}
		>
			Logout
		</button>
	);
};

export default Logout;
