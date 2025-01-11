import {
	isRouteErrorResponse,
	useNavigate,
	useRouteError
} from 'react-router-dom';

const ErrorPage = () => {
	const navigate = useNavigate();
	const error = useRouteError();
	return (
		<div className="d-flex flex-column justify-content-center align-items-center text-center p-2 vh-100 bg-light">
			<h1 className="fs-2 mb-3" style={{ color: '#e74c3c' }}>
				Oops! Something Went Wrong
			</h1>
			<p className="mb-2" style={{ color: '#555' }}>
				{!isRouteErrorResponse(error)
					? 'We are sorry, but an unexpected error has occurred. Please try again later or contact support if the issue persists.'
					: 'Invalid page'}
			</p>
			<button
				className="px-3 py-1 fs-3 bg-primary border border-none rounded-3 text-light mt-5"
				onClick={() => navigate('/counters')}
			>
				Return
			</button>
		</div>
	);
};

export default ErrorPage;
