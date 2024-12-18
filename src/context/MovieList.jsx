import { useContext, useEffect } from 'react';
import MovieRow from './MovieRow';
import UserContext from './userContext';

const MovieList = () => {
	const userContext = useContext(UserContext);

	useEffect(() => {
		console.log('context:', userContext);
	}, [userContext]);

	return (
		<div className="movie-list">
			<h1>Movie List</h1>
			<p>
				Name:
				{userContext.currentUser ? userContext.currentUser.name : '...'}
			</p>
			<p>
				Email:
				{userContext.currentUser ? userContext.currentUser.email : '...'}
			</p>
			<MovieRow />
		</div>
	);
};

// MovieList.contextType = UserContext; set the context type after creating the class

export default MovieList;
