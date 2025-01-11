import { createBrowserRouter } from 'react-router';
import ErrorPage from '../components/Home/ErrorPage';
import Layout from '../components/Home/Layout';
import { Users } from '../components/admin';
import UserDetail from '../components/admin/UserDetail';
import { Counters } from '../components/counters';
import { MovieList } from '../components/movies';
import MoviePage from '../components/movies/MoviePage';
import { TaskList } from '../components/tasks';
import PrivateRoutes from '../components/Home/PrivateRoutes';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: 'counters', element: <Counters /> },
			{
				element: <PrivateRoutes />,
				children: [
					{ path: 'users', element: <Users /> },
					{ path: 'users/:id', element: <UserDetail /> },
					{ path: 'movies', element: <MovieList /> },
					{ path: 'movies/:id', element: <MoviePage /> },
					{ path: 'tasks', element: <TaskList /> }
				]
			}
		]
	}
]);

export default router;
