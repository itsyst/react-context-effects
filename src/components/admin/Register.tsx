import { useContext } from 'react';
import Login from './Login';
import Logout from './Logout';
import UserContext from '../../contexts/userContext';

const Register = () => {
	// Using React's useContext hook to consume context
	const { user } = useContext(UserContext);

	return (
		<div
			className="mt-2 px-2 pb-2 rounded"
			style={{ backgroundColor: '#DA498D' }}
		>
			<h1 className="text-uppercase text-nowrap text-light">Login</h1>
			{user ? (
				<ul className="list-group mb-2">
					<li className="list-group-item">{user ? user?.name : '...'}</li>
					<li className="list-group-item">{user ? user?.email : '...'}</li>
				</ul>
			) : (
				<></>
			)}
			<div className="pt-2">
				<Login />
				<Logout />
			</div>
		</div>
	);
};

export default Register;
