import { Link } from 'react-router';
import image from '../../assets/icon.png';
import links from '../../data/navlink-data';
import Register from '../admin/Register';
import useAuthStore from '../admin/store';

const Navbar = () => {
	const user = useAuthStore((selection) => selection.user);
	const filteredLinks = links.filter((link) => user || link.isAuthorized);

	return (
		<>
			<nav
				className="navbar d-flex justify-content-between  px-4"
				style={{ backgroundColor: '#DA498D' }}
			>
				<div className="d-flex justify-content-between align-items-center">
					<Link to="/counters">
						<img
							alt="Logo"
							src={image}
							className="bg-light rounded-circle logo"
						/>
					</Link>

					<div>
						{filteredLinks.map((link) => (
							<Link
								className="text-light fs-5 px-3 text-uppercase text-decoration-none"
								role="button"
								key={link.id}
								to={link.value}
							>
								{link.value}
							</Link>
						))}
					</div>
				</div>
				<Register />
			</nav>
		</>
	);
};

export default Navbar;
