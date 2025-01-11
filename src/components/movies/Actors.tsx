import withTooltip from '../utils/withTooltip';
import { ActorType } from './MovieType';
import useMovieStore from './store';

const Actors = ({ showTooltip }: { showTooltip?: boolean }) => {
	const movie = useMovieStore((selection) => selection.movie);

	return (
		<div className="position-relative">
			<div className="col-8" role="button">
				<h4 className="text-dark fw-bold">Actors</h4>
				<ul>
					{movie?.actors.map((actor: ActorType) => (
						<li key={actor.id} className="text-dark text-nowrap">
							{actor.name}
						</li>
					))}
				</ul>
			</div>
			{showTooltip && (
				<div
					className="badge bg-white text-success ms-2 d-flex flex-column text-start position-absolute top-0"
					style={{ left: '100px' }}
				>
					<b>Awards: {movie?.boxOffice}</b>
					<img
						src={movie?.poster}
						className="img-thumbnail rounded-circle"
						style={{ width: '50px', height: '50px' }}
						alt={movie?.title}
					/>
				</div>
			)}
		</div>
	);
};

const WrappedActors = withTooltip(Actors);
export default WrappedActors;
