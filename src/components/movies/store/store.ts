import { create } from "zustand";
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { MovieType } from "../types/MovieType";
import moviesData from "../../../data/movies-data";

interface MovieStore {
    movie: MovieType | null;
    movies: MovieType[];
    handleSelectedMovie: (movie: MovieType) => void;
}

const useMovieStore = create<MovieStore>((set) => ({
    movie: null,
    movies: [],
    handleSelectedMovie: (movie) => set(() => ({ movie }))
}));

// Initialize movies data once when the store is created
useMovieStore.setState({ movies: moviesData as MovieType[] });

// Development tool for debugging
if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Movie Store', useMovieStore);
}

export default useMovieStore;