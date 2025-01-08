import { MovieType } from '../movies/types/MovieType';
import Genre from './Genre';
import Movie from './Movie';
import useMovie from './hooks/useMovie';

interface MoviePageProps {
	movie: MovieType | null;
}

const MoviePage = ({ movie }: MoviePageProps) => {
	const { user, movieDetails } = useMovie({ movie });

	return (
		<div className="row d-flex align-items-center mt-2 position-relative">
			<h1 className="text-left mb-4 text-uppercase text-light">Movie Page</h1>
			<div className="px-2">
				{user ? (
					<div className="d-flex flex-column">
						<Movie movie={movieDetails} />
						<Genre movie={movieDetails} />
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
