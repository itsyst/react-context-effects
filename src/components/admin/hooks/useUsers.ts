import axios from 'axios';
import { useEffect, useState } from "react";
import { UserType } from "../../admin/types/UserType";

const useUsers = () => {
    const [users, setUsers] = useState<UserType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const result = await axios.get<UserType[]>('https://jsonplaceholder.typicode.com/users');
                setUsers(result.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching users');
                setLoading(false);
                console.error('Error fetching users:', error);
            }
        };

        getUsers();
    }, []);

    return { users, loading, error };
}

export default useUsers;