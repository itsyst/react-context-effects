import { createBrowserRouter } from 'react-router';
import Layout from '../components/Home/Layout';
import { Users } from '../components/admin';
import UserDetail from '../components/admin/UserDetail';
import { Counters } from '../components/counters';
import { MovieList } from '../components/movies';
import { TaskList } from '../components/tasks';
import MoviePage from '../components/movies/MoviePage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: 'counters', element: <Counters /> },
			{ path: 'users', element: <Users /> },
			{ path: 'users/:id', element: <UserDetail /> },
			{ path: 'movies', element: <MovieList /> },
			{ path: 'movies/:id', element: <MoviePage /> },
			{ path: 'tasks', element: <TaskList /> }
		]
	}
]);

export default router;
