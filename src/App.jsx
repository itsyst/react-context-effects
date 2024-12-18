import { useState } from 'react';
import Movie from './components/Movie';
import Genre from './components/Genre';
import Counter from './components/Counter';
import CounterF from './components/CounterF';
import CounterH from './hooks/CounterH';
import Users from './hooks/Users';
import MoviePage from './context/MoviePage';
import UserContext from './context/userContext';
import CartContext from './context/cartContext';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
	const [currentUser, setCurrentUser] = useState(null);
	const cart = ['cart1', 'cart2'];

	const handleLogin = (username) => {
		console.log('User: ', username);
		setCurrentUser(username);
	};

	return (
		<CartContext.Provider value={{ cart }}>
			<UserContext.Provider value={{ currentUser, onLogin: handleLogin }}>
				<div className="App">
					<Movie id={1}/>
					<Genre id={2} />
					<Counter />
					<CounterF />
					<CounterH />
					<Users />
					<MoviePage />
				</div>
			</UserContext.Provider>
		</CartContext.Provider>
	);
};

export default App;
