import useAuthStore from './store';

const Logout = () => {
	const { onLogout } = useAuthStore();

	return (
		<button className="btn btn-light rounded-pill" onClick={onLogout}>
			Logout
		</button>
	);
};

export default Logout;
