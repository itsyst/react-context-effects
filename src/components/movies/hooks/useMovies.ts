import { useEffect, useState } from "react";
import { MovieType } from "../types/MovieType";
import moviesData from "../../../data/movies-data";
import useAuthStore from "../../admin/store/store";

const useMovies = () => {
    const { user } = useAuthStore();
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [movie, setMovie] = useState<MovieType | null>(null);


    const handleSelectedMovie = (movie: MovieType) => {
        setMovie(movie);
    };


    useEffect(() => {
        setMovies(moviesData as MovieType[]);
    }, [movies]);

    return { user, movies, movie, handleSelectedMovie };
}

export default useMovies;