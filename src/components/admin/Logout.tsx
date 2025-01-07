import useAuth from '../../hooks/useAuth';

const Logout = () => {
	const {user, onLogout} = useAuth();

	return (
		<button className="btn btn-secondary" onClick={() => user && onLogout(user)}>
			Logout
		</button>
	);
};

export default Logout;
