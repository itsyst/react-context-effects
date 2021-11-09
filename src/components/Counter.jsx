import React, { Component } from 'react';
import { Fragment } from 'react';
import UserContext from '../context/userContext';

export class Counter extends Component {
	state = {
		count: 0
	};

	increaseCount = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<UserContext.Consumer>
				{(userContext) => (
					<div>
						<Fragment>
							<div> Count: {this.state.count} </div>
							<button onClick={this.increaseCount}>
								Increase
							</button>
						</Fragment>
						<p>{userContext.name}</p>
					</div>
				)}
			</UserContext.Consumer>
		);
	}
}

export default Counter;
