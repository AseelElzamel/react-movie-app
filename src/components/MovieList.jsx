import Movie from './Movie';
import movies from '../movies.json';

function MovieList() {
  return (
    <div>
      {movies.map((movie, index) => (
        <Movie
          key={index}
          name={movie.name}
          year={movie.year}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default MovieList;
