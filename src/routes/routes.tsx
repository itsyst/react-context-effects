import { createBrowserRouter } from 'react-router';
import { Users } from '../components/admin';
import { Counters } from '../components/counters';
import { MovieList } from '../components/movies';
import { TaskList } from '../components/tasks';
import Layout from '../components/Home/Layout';
 
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/counters', element: <Counters title="Counters" /> },
			{ path: '/users', element: <Users title="Users" /> },
			{ path: '/movies', element: <MovieList title="Movies" /> },
			{ path: '/tasks', element: <TaskList /> }
		]
	}
]);

export default router;
