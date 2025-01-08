import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';
import movies from '../../data/movies-data';
import { UserType } from '../admin/UserType';
import { MovieType } from './MovieType';
import useAuthStore from '../admin/store';

interface MovieStore {
    user: UserType | null; // Adjust the type based on your auth state
    movie: MovieType | null;
    movies: MovieType[];
    handleSelectedMovie: (movie: MovieType) => void;
    setMovie: (movie: MovieType | null) => void;
}

const useMovieStore = create<MovieStore>((set) => ({
    user: null, // Placeholder for user; update via auth integration
    movie: null,
    movies: movies,
    handleSelectedMovie: (movie) => set(() => ({ movie })),
    setMovie: (movie) => set(() => ({ movie: movie })),
}));

// Watch for changes in AuthStore and initialize MovieStore
useAuthStore.subscribe((state) => {
    const { user } = state;

    if (user) useMovieStore.setState({ user, movies }); // Populate movies when a user is logged in
    else useMovieStore.setState({ user: null, movies: [], movie: null }); // Reset 
});

// Development tool for debugging
if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Movie Store', useMovieStore);
}

export default useMovieStore;