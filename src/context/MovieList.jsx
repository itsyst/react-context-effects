import React, { Component } from 'react';
import UserContext from './userContext';

class MovieList extends Component {
    static contextType = UserContext;
	componentDidMount() {
		console.log('context:', this.context);
	}

	render() {
		return (
			<UserContext.Consumer>
				{(userContext) => (
					<div>
						<h1>Movie List</h1>
						<p>Name: {userContext.name}</p>
						<p>Email: {userContext.email}</p>
					</div>
				)}
			</UserContext.Consumer>
		);
	}
}

// MovieList.contextType = UserContext; set the context type after creating the class

export default MovieList;
