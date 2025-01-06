import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Counters from './components/counters/Counters';
import MovieList from './components/movies/MovieList';
import Users from './components/admin/Users';
import CartProvider from './providers/CartProvider';
import UserProvider from './providers/UserProvider';
import useDocumentTitle from './hooks/useDocumentTitle';

function App() {
	useDocumentTitle('Hooks-Effects');
	return (
		<CartProvider>
			<UserProvider>
				<div className="App">
					<Counters title="Counters" />
					<Users title="Users" />
					<MovieList title="Movies" />
				</div>
			</UserProvider>
		</CartProvider>
	);
}

export default App;
