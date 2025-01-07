import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { MovieType } from '../../types/MovieType';
import Genre from './Genre';
import Movie from './Movie';

interface MoviePageProps {
	movie: MovieType | undefined;
}

const MoviePage = ({ movie }: MoviePageProps) => {
	const { user } = useAuth();
	const [movieDetails, setMovieDetails] = useState<MovieType | undefined>();

	useEffect(() => {
		setMovieDetails(movie);
	}, [movie]);

	return (
		<div className="row bg-dark d-flex align-items-center mt-2 position-relative">
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
