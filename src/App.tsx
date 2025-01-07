import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Counters from './components/counters/Counters';
import MovieList from './components/movies/MovieList';
import Users from './components/admin/Users';
import CartProvider from './providers/CartProvider';
import AuthProvider from './providers/AuthProvider';
import useDocumentTitle from './hooks/useDocumentTitle';
import TaskList from './components/tasks/TaskList';
import TasksProvider from './providers/TasksProvider';

function App() {
	useDocumentTitle('E-R-H-C');
	return (
		<CartProvider>
			<AuthProvider>
				<div className="App">
					<Counters title="Counters" />
					<Users title="Users" />

					<MovieList title="Movies" />
					<TasksProvider>
						<TaskList />
					</TasksProvider>
				</div>
			</AuthProvider>
		</CartProvider>
	);
}

export default App;
