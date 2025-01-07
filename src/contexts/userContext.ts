import { createContext } from 'react';
import { UserContextType } from '../types/UserType';
 
const UserContext = createContext<UserContextType>({} as UserContextType);
UserContext.displayName = "UserContext";

export default UserContext;
