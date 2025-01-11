import Genre from './Genre';
import useMovieStore from './store';

const Movie = () => {
	const { movie } = useMovieStore();
	
	return (
		<div className=" mt-5">
			<div className="card mb-3 mx-auto">
				{movie && (
					<div className="row g-0">
						<div className="col-md-4">
							<img
								src={movie?.poster}
								alt={`${movie?.title} poster`}
								className="img-fluid w-100 h-100"
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h2 className="card-title fw-bold mb-3">{movie?.title}</h2>
								<p className="card-text">
									<strong>Director:</strong> {movie?.director} <br />
									<strong>Release Date:</strong> {movie.year} <br />
									<strong>Runtime:</strong> {movie?.runtime} <br />
									<strong>Rating:</strong> {movie?.rating} <br />
									<strong>Description:</strong> {movie.plot}
								</p>
							</div>
							<Genre />
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Movie;
