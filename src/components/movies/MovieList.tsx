import { useEffect, useState } from 'react';
import moviesData from '../../data/movies-data';
import useUser from '../../hooks/useUser';
import { MovieType } from '../../types/MovieType';
import Register from '../admin/Register';
import MoviePage from './MoviePage';
import MovieRow from './MovieRow';

interface MovieListProps {
	title: string;
}

const MovieList = ({ title }: MovieListProps) => {
	const [movies, setMovies] = useState<MovieType[]>([]);
	const [movie, setMovie] = useState<MovieType | undefined>(undefined);
	const { user } = useUser();

	const handleSelectedMovie = (movie: MovieType) => {
		setMovie(movie);
	};

	useEffect(() => {
		setMovies(moviesData as MovieType[]);
	}, [movies]);

	return (
		<div className="row bg-dark pb-4">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<h1 className="text-left mb-4 text-uppercase text-light">{title}</h1>
						{user ? (
							<div className="row row-cols-1 row-cols-md-3 g-4">
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
								Please log in to view the movie list.
							</div>
						)}
					</div>

					<div className="col-md-4">
						<Register />
						<MoviePage movie={movie} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieList;
