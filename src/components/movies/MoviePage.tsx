import Movie from './Movie';
import useMovieStore from './store';

const MoviePage = () => {
	const { user } = useMovieStore();
	return (
		<div className="row d-flex align-items-center mt-5 pt-3">
			<div className="px-2">
				{user ? (
					<div className="d-flex flex-column">
						<Movie />
					</div>
				) : (
					<div className="alert alert-warning text-start py-0" role="alert">
						Please log in to view the movie page.
					</div>
				)}
			</div>
		</div>
	);
};

export default MoviePage;
