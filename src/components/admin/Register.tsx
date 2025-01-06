import { useContext } from 'react';
import UserContext from '../../context/userContext';
import { UserContextType } from '../../types/UserType';
import Login from './Login';
import Logout from './Logout';

const Register = () => {
	// Using React's useContext hook to consume context
	const currentUser = useContext<UserContextType | undefined>(UserContext);

	return (
		<div
			className="mt-2 px-2 pb-2 rounded"
			style={{ backgroundColor: '#DA498D' }}
		>
			<h1 className="text-uppercase text-nowrap text-light">Login</h1>
			{currentUser?.user ? (
				<ul className="list-group mb-2">
					<li className="list-group-item">
						{currentUser ? currentUser.user?.name : '...'}
					</li>
					<li className="list-group-item">
						{currentUser ? currentUser.user?.email : '...'}
					</li>
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
