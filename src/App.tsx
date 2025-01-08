import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Users from './components/admin/Users';
import Counters from './components/counters/Counters';
import MovieList from './components/movies/MovieList';
 
import AuthProvider from './components/admin/providers/AuthProvider';
import CartProvider from './components/cart/providers/CartProvider';
import useDocumentTitle from './components/hoc/hooks/useDocumentTitle';
import TasksProvider from './components/tasks/provider/TasksProvider';
import TaskList from './components/tasks/TaskList';
 

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
