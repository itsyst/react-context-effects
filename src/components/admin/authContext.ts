import { createContext } from 'react';
import { UserContextType } from './UserType';
   
const AuthContext = createContext<UserContextType>({} as UserContextType);
AuthContext.displayName = "AuthContext";

export default AuthContext;
