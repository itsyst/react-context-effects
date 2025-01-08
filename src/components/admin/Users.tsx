 
import useUsers from './hooks/useUsers';
import useAuthStore from './store/store';
import { UserType } from './types/UserType';

interface UsersProps {
	title: string;
}

const Users = ({ title }: UsersProps) => {
	const { user } = useAuthStore();
	const { users, loading, error } = useUsers();

	if (!user) {
		return (
			<div className="alert alert-warning text-center" role="alert">
				Please log in to view the user list.
			</div>
		);
	}

	if (loading) return <div>Loading users...</div>;
	if (error) return <div className="alert alert-danger">{error}</div>;

	return (
		<>
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
						{users.map((user:UserType) => (
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
		</>
	);
};

export default Users;
