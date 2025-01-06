import { useEffect, useState } from 'react';
import withTooltip from '../../hoc/withTooltip';
import { MovieType } from '../../types/MovieType';

interface GenreProps {
	showTooltip?: boolean;
	movie: MovieType | undefined;
}

const Genre = ({ showTooltip, movie }: GenreProps) => {
	const [movieDetails, setMovieDetails] = useState<MovieType | undefined>();

	useEffect(() => {
		setMovieDetails(movie);
	}, [movie]);

	return (
		<div className="d-flex flex-row bd-highlight mb-3 ps-4" role="button">
			{movieDetails && (
				<>
					<div className="flex-column">
						<div>
							<h2 className="text-light">Genres</h2>
							<ul>
								{movieDetails.genre.map((genre) => (
									<li key={genre.id} className="text-light">
										{genre.name}
									</li>
								))}
							</ul>
						</div>
						<div>
							<h2 className="text-light">Actors</h2>
							<ul>
								{movieDetails.actors.map((actor) => (
									<li key={actor.id} className="text-light text-nowrap">
										{actor.name}
									</li>
								))}
							</ul>
						</div>
					</div>
					{showTooltip && (
						<div
							className="badge bg-white text-success ms-2 d-flex flex-column text-start position-absolute"
							style={{ top: '240px', left: '120px' }}
						>
							<b>Awards: {movieDetails?.boxOffice}</b>
							<img
								src={movieDetails?.poster}
								className="img-thumbnail rounded-circle"
								style={{ width: '50px', height: '50px' }}
								alt={movieDetails.title}
							/>
						</div>
					)}
				</>
			)}
		</div>
	);
};

const WrappedGenre = withTooltip(Genre);
export default WrappedGenre;
