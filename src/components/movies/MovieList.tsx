import MovieRow from './MovieRow';
import { MovieType } from './MovieType';
import useMovieStore from './store';

const MovieList = () => {
	const { movies, handleSelectedMovie } = useMovieStore();

	return (
		<>
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
				{movies.map((movie: MovieType) => (
					<MovieRow
						movie={movie}
						key={movie.id}
						onSelect={() => handleSelectedMovie(movie)}
					/>
				))}
			</div>
		</>
	);
};

export default MovieList;
