import React, { Component } from 'react';
import withTooltip from './withTooltip';

class Genre extends Component {
	render() {
		return (
			<div>
				<h1>Genre</h1>
				{this.props.showTooltip && <p>Show tooltip</p>}
			</div>
		);
	}
}

export default withTooltip(Genre);
