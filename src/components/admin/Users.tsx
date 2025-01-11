import { useEffect } from 'react';
import { Link } from 'react-router';
import useAuthStore from './store';
import { UserType } from './UserType';

const Users = () => {
	const { users, fetchUsers } = useAuthStore();

	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]);

	return (
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
					{users.map((user: UserType) => (
						<tr key={user.id}>
							<th scope="row">{user.id}</th>
							<th scope="row">
								<Link to={`/users/${user.id}`}>{user.name}</Link>
							</th>
							<th scope="row">{user.email}</th>
							<th scope="row">{user.website}</th>
							<th scope="row">{user.phone}</th>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Users;
