import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../admin/store';

const PrivateRoutes = () => {
	const { user } = useAuthStore();
	if (!user) return <Navigate to={`/`} />; // Redirect to the login page.

	return <Outlet />;
};

export default PrivateRoutes;
