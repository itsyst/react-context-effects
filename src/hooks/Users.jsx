import { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			try {
				const result = await axios('https://jsonplaceholder.typicode.com/users');
				setUsers(result.data);
			} catch (error) {
				console.error('Error fetching users:', error);
			}
		};

		getUsers();
	}, []); // Empty dependency array ensures it runs only once on mount

	return (
		<div>
			<ul className="list-unstyled">
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Users;
