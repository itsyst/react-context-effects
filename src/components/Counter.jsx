import React, { Component } from 'react';
import { Fragment } from 'react';
 
export class Counter extends Component {
	state = {
		count: 0
	};

	increaseCount = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<div>
				<Fragment>
					<div> Count: {this.state.count} </div>
					<button onClick={this.increaseCount}> Increase </button>
				</Fragment>
			</div>
		);
	}
}

export default Counter;
