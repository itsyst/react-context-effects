import { createContext } from 'react';
import { UserContextType } from '../types/UserType';
 
const UserContext = createContext<UserContextType | undefined>(undefined);
UserContext.displayName = "UserContext";

export default UserContext;
