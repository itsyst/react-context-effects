import useUser from '../../hooks/useUser';

const Logout = () => {
	const currentUser = useUser();

	return (
		<button
			className="btn btn-secondary"
			onClick={() => currentUser && currentUser.onLogout({})}
		>
			Logout
		</button>
	);
};

export default Logout;
