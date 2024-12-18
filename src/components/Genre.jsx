import withTooltip from './withTooltip';
import PropTypes from 'prop-types';

const Genre = ({ showTooltip }) => {
	return (
		<div className="d-flex flex-row bd-highlight mb-3">
			<h2>Genre</h2>
			{showTooltip && <p className="px-2">Show tooltip Genre</p>}
		</div>
	);
};

Genre.prototype = {
	showTooltip: PropTypes.bool.isRequired
};

export default withTooltip(Genre);
