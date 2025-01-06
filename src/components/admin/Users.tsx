import axios from 'axios';
import { useEffect, useState } from 'react';
import { UserType } from '../../types/UserType';

interface UsersProps {
	title: string;
}

const Users = ({ title }: UsersProps) => {
	const [users, setUsers] = useState<UserType[]>([]);

	useEffect(() => {
		const getUsers = async () => {
			try {
				const result = await axios.get<UserType[]>(
					'https://jsonplaceholder.typicode.com/users'
				);
				setUsers(result.data);
			} catch (error) {
				console.error('Error fetching users:', error);
			}
		};

		getUsers();
	}, []); // Empty dependency array ensures it runs only once on mount

	return (
		<div className="row bg-dark">
			<h2 className="text-uppercase text-light">{title}</h2>
			<div className="table-responsive">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Email</th>
							<th scope="col">Website</th>
							<th scope="col">Phone</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user.id}>
								<th scope="row">{user.id}</th>
								<th scope="row">{user.name}</th>
								<th scope="row">{user.email}</th>
								<th scope="row">{user.website}</th>
								<th scope="row">{user.phone}</th>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Users;
