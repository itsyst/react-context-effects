import { Component } from 'react'
import Movie from './components/Movie'
import Genre from './components/Genre'
import Counter from './components/Counter'
import CounterF from './components/CounterF'
import CounterH from './hooks/CounterH'
import Users from './hooks/Users'
import MoviePage from './context/MoviePage'
import UserContext from './context/userContext'
import CartContext from './context/cartContext'
import './App.css';

class App extends Component {
  state = { currentUser: null, cart: ["cart1", "cart2"] }

  handleLogin = (username) => {
    console.log("User: ", username);
    this.setState({ currentUser: username })
  }


  render() {
    return (
      <CartContext.Provider value={{ cart: this.state.cart }
      }>
        <UserContext.Provider value={
          {
            currentUser: this.state.currentUser,
            onLogin: this.handleLogin
          }}>
          <div className="App">
            <Movie id={1} />
            <Genre id={2} />
            <Counter />
            <CounterF />
            <CounterH />
            <Users />
            <MoviePage />
          </div>
        </UserContext.Provider>
      </CartContext.Provider >
    );
  }
}

export default App;
