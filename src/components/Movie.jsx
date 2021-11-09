import React, { Component } from 'react';
import withTooltip from './withTooltip';

class Movie extends Component {
	render() {
		return (
			<div>
				<h1>Movie</h1>
				{this.props.showTooltip && <p>Show tooltip</p>}
			</div>
		);
	}
}

export default withTooltip(Movie);
