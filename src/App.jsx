

import './App.css';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import movies from './movies.json'; // if you're passing movie data

function App() {
  return (
    <div>
      <NavBar />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
