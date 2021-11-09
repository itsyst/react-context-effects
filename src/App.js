import { Component } from 'react'
import Movie from './components/Movie'
import Genre from './components/Genre'
import Counter from './components/Counter'
import CounterF from './components/CounterF'
import CounterH from './hooks/CounterH'
import Users from './hooks/Users'
import MoviePage from './context/MoviePage'
import UserContext from './context/userContext'
import './App.css';

class App extends Component {
  state = {
    currentUser: {
      name: "Khaled",
      email: "khaled@domain.com"
    }
  }
  render() {
    return (
      <UserContext.Provider value={this.state.currentUser}>
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
    );
  }
}

export default App;
