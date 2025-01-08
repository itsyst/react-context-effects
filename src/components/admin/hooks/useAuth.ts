import { useContext } from "react";
import AuthContext from "../contexts/authContext";
import { UserContextType } from "../types/UserType";

const useAuth = () => useContext<UserContextType>(AuthContext);
export default useAuth;