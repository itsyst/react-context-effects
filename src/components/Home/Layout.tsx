import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';

const Layout = () => {
	return (
		<>
			<Navbar />
			<div id="main">
				<Outlet />
			</div>
		</>
	);
};

export default Layout;
