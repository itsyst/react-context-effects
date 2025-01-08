import { ReactNode, useState } from 'react';
import UserContext from '../contexts/authContext';
import { UserContextType, UserType } from '../types/UserType';

interface AuthProviderProps {
	children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<UserType | undefined>(undefined);

	const onLogin = (user: UserType) => {
		setUser(user);
		// Here save the user data to localStorage or make an API call
		localStorage.setItem('current-user', JSON.stringify(user));
	};

	const onLogout = () => {
		setUser(undefined);
		// Here localStorage or make an API call to logout
		localStorage.clear();
	};

	// Creating the context value which matches UserContextType
	const contextValue: UserContextType = {
		user,
		onLogin,
		onLogout
	};

	return (
		<UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
	);
};

export default AuthProvider;
