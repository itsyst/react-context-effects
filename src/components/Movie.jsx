import withTooltip from './withTooltip';
import PropTypes from 'prop-types';

const Movie = ({ showTooltip }) => {
	return (
		<div className="d-flex flex-row bd-highlight mb-3">
			<h2>Movie</h2>
			{showTooltip && <p className="px-2">Show tooltip Movie</p>}
		</div>
	);
};

Movie.prototype = {
	showTooltip: PropTypes.bool.isRequired
};

export default withTooltip(Movie);
