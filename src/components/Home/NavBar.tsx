import { NavLink } from 'react-router-dom';  
import image from '../../assets/icon.png';
import links from '../../data/nav-link-data';
import Register from '../admin/Register';
import useAuthStore from '../admin/store';

const Navbar = () => {
	const user = useAuthStore((selection) => selection.user);
	const filteredLinks = links.filter((link) => user || link.isAuthorized);

	return (
		<nav
			className="navbar d-flex justify-content-between px-4"
			style={{ backgroundColor: '#DA498D' }}
		>
			<div className="d-flex justify-content-between align-items-center">
				<NavLink to="/counters" className="nav-link">
					<img alt="Logo" src={image} className="bg-light rounded-circle logo" />
				</NavLink>

				{filteredLinks.map((link) => (
					<NavLink
						key={link.id}
						to={link.value}
						className={({ isActive }) =>
							`text-light fs-5 px-3 text-uppercase text-decoration-none nav-link ${
								isActive ? 'active-link' : ''
							}`
						}
					>
						{link.value}
					</NavLink>
				))}
			</div>
			<Register />
		</nav>
	);
};

export default Navbar;
