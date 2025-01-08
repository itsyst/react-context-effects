import useAuthStore from './store/store';

const Logout = () => {
	const { onLogout } = useAuthStore();

	return (
		<button className="btn btn-secondary" onClick={onLogout}>
			Logout
		</button>
	);
};

export default Logout;
