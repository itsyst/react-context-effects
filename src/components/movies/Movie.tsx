import { useEffect, useState } from 'react';
import withTooltip from '../../hoc/withTooltip';
import { MovieType } from '../../types/MovieType';

interface MovieProps {
	showTooltip?: boolean;
	movie: MovieType | undefined;
}

const Movie = ({ showTooltip, movie }: MovieProps) => {
	const [movieDetails, setMovieDetails] = useState<MovieType | undefined>();

	useEffect(() => {
		setMovieDetails(movie);
	}, [movie]);

	return (
		<div
			className="d-flex bd-highlight mb-3 ps-4"
			role="button"
		>
			{movieDetails && (
				<>
					<div className="flex-column">
						<h2 className="text-light">Movie</h2>
						<p className="text-light text-nowrap">{movieDetails.title}</p>
					</div>
					{showTooltip && (
						<div
							className="badge bg-white text-success ms-2 d-flex flex-column text-start position-absolute"
							style={ { top: '50px', left:'120px' }}
						>
							<b>Awards: {movieDetails?.awards}</b>
							<b>Language: {movieDetails?.language}</b>
						</div>
					)}
				</>
			)}
		</div>
	);
};

const MovieWithTooltip = withTooltip(Movie);
export default MovieWithTooltip;
