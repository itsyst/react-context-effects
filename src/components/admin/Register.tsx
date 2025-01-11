import Login from './Login';
import Logout from './Logout';
import useAuthStore from './store';

const Register = () => {
	const { user } = useAuthStore();

	return (
		<div className="d-flex align-items-center py-2">
			{user ? (
				<p className="text-light fs-5 px-4 mb-0">{user ? user?.name : '...'}</p>
			) : (
				<></>
			)}
			<div>
				<Login />
				<Logout />
			</div>
		</div>
	);
};

export default Register;
