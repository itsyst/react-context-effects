import Movie from './components/Movie'
import Genre from './components/Genre'
import Counter from './components/Counter'
import CounterF from './components/CounterF'
import CounterH from './hooks/CounterH'
import Users from './hooks/Users'
import './App.css';

function App() {
  return (
    <div className="App">
      <Movie id={1} />
      <Genre id={2} />

      <Counter />
      <CounterF />
      <CounterH />
      <Users />
    </div>
  );
}

export default App;
