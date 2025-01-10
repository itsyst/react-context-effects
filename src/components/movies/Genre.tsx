import withTooltip from '../utils/withTooltip';
import { ActorType, GenreType } from './MovieType';
import useMovieStore from './store';

const Genre = ({ showTooltip }: { showTooltip?: boolean }) => {
	const { movie } = useMovieStore();
	return (
		<>
			<div className="d-flex flex-row bd-highlight mb-3 ms-5" role="button">
				{movie && (
					<>
						<div className="flex-column">
							<div>
								<h2 className="text-light">Genres</h2>
								<ul>
									{movie.genre.map((genre: GenreType) => (
										<li key={genre.id} className="text-light">
											{genre.name}
										</li>
									))}
								</ul>
							</div>
							<div className="ms-5 mt-5">
								<h2 className="text-light">Actors</h2>
								<ul>
									{movie.actors.map((actor: ActorType) => (
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
								<b>Awards: {movie?.boxOffice}</b>
								<img
									src={movie?.poster}
									className="img-thumbnail rounded-circle"
									style={{ width: '50px', height: '50px' }}
									alt={movie.title}
								/>
							</div>
						)}
					</>
				)}
			</div>
		</>
	);
};

const WrappedGenre = withTooltip(Genre);
export default WrappedGenre;
