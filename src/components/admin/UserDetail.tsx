import { Link, useParams } from 'react-router';
import useAuthStore from './store';

const UserDetail = () => {
	const users = useAuthStore((s) => s.users);
	const { id } = useParams();
	const user = users.find((u) => String(u.id) === id);

	return (
		<div className="container my-5">
			<div
				className="card shadow-lg"
				style={{ maxWidth: '540px', margin: 'auto' }}
			>
				<div className="d-flex flex-column flex-md-row g-0">
					<img
						src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
						className="img-fluid w-100"
						style={{ objectFit: 'cover' }}
						alt={user?.name}
					/>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{user?.name}</h5>
							<p className="card-text">
								<strong>Username:</strong> {user?.username}
							</p>
							<p className="card-text">
								<strong>Email:</strong>{' '}
								<Link
									to={`mailto:${user?.email}`}
									className="text-decoration-none"
								>
									{user?.email}
								</Link>
							</p>
							<p className="card-text">
								<strong>Phone:</strong>{' '}
								<Link to={`tel:${user?.phone}`} className="text-decoration-none">
									{user?.phone}
								</Link>
							</p>
							<p className="card-text">
								<strong>Website:</strong>{' '}
								<Link
									to={`${user?.website}`}
									target="_blank"
									className="text-decoration-none"
								>
									{user?.website}
								</Link>
							</p>
							<p className="card-text">
								<strong>Company:</strong> {user?.company?.name}
							</p>
						</div>
					</div>
				</div>
				<div className="card-footer bg-light">
					<p className="mb-1">
						<strong>Address:</strong>
					</p>
					<p className="mb-1">
						{user?.address?.street}, {user?.address?.suite}
					</p>
					<p className="mb-1">
						{user?.address?.city}, {user?.address?.zipcode}
					</p>
					<p className="mb-0">
						<small>
							<strong>Geo:</strong> Lat: {user?.address?.geo.lat}, Lng:
							{user?.address?.geo.lng}
						</small>
					</p>
				</div>
			</div>
		</div>
	);
};

export default UserDetail;
