import withTooltip from '../utils/withTooltip';
import Actors from './Actors';
import { GenreType } from './MovieType';
import useMovieStore from './store';

const Genre = () => {
	const { movie } = useMovieStore();
	return (
		<div className="d-flex mt-4">
			{movie && (
				<div className='col-4'>
					<h4 className="ms-3 fw-bold">Genres</h4>
					<ul>
						{movie.genre.map((genre: GenreType) => (
							<li key={genre.id} className="text-dark">
								{genre.name}
							</li>
						))}
					</ul>
				</div>
			)}
			<Actors />
 		</div>
	);
};

const WrappedGenre = withTooltip(Genre);
export default WrappedGenre;
