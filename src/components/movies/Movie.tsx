import withTooltip from '../utils/withTooltip';
import useMovieStore from './store';
  
const Movie = ({ showTooltip}: {showTooltip?: boolean}) => {
	const { movie } = useMovieStore();
	return (
		<div className="d-flex bd-highlight mb-3 ps-4" role="button">
			{movie && (
				<>
					<div className="flex-column">
						<h2 className="text-light">Movie</h2>
						<p className="text-light text-nowrap">{movie.title}</p>
					</div>
					{showTooltip && (
						<div
							className="badge bg-white text-success ms-2 d-flex flex-column text-start position-absolute"
							style={{ top: '50px', left: '120px' }}
						>
							<b>Awards: {movie?.awards}</b>
							<b>Language: {movie?.language}</b>
						</div>
					)}
				</>
			)}
		</div>
	);
};

const MovieWithTooltip = withTooltip(Movie);
export default MovieWithTooltip;
