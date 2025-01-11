import MovieRow from './MovieRow';
import { MovieType } from './MovieType';
import useMovieStore from './store';

const MovieList = () => {
	const { user, movies, handleSelectedMovie } = useMovieStore();

	return (
		<>
			{user ? (
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
					{movies.map((movie: MovieType) => (
						<MovieRow
							movie={movie}
							key={movie.id}
							onSelect={() => handleSelectedMovie(movie)}
						/>
					))}
				</div>
			) : (
				<div className="alert alert-warning text-center" role="alert">
					Please log in to view the movies.
				</div>
			)}
		</>
	);
};

export default MovieList;
