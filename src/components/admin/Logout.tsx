import { useContext } from 'react';
import UserContext from '../../contexts/userContext';
import { UserContextType } from '../../types/UserType';

const Logout = () => {
	const currentUser = useContext<UserContextType | undefined>(UserContext);

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
