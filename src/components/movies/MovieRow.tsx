import { Link } from 'react-router';
import { MovieType } from './MovieType';

interface MovieRowProps {
	movie: MovieType;
	onSelect: (movie: MovieType) => void;
}

const MovieRow = ({ movie, onSelect }: MovieRowProps) => {
	return (
		<Link
			to={`/movies/${movie.id}`}
			className="col text-decoration-none"
			role="button"
			onClick={() => onSelect(movie)}
		>
			<div className="card h-100">
				<img
					src={movie.poster}
					className="card-img-top"
					alt={movie.title}
					style={{ height: '250px', objectFit: 'fill' }}
				/>
				<div className="card-body">
					<h5 className="card-title">{movie.title}</h5>
					<p className="card-text">
						<strong>Year:</strong> {movie.year}
						<br />
						<strong>Genre:</strong> {movie.genre.map((g) => g.name).join(', ')}
						<br />
						<strong>Rating:</strong> {movie.rating}
					</p>
				</div>
				<div className="card-footer">
					<small className="text-muted">{movie.plot.slice(0, 100)}...</small>
				</div>
			</div>
		</Link>
	);
};

export default MovieRow;
