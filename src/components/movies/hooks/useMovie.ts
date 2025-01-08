import { useEffect, useState } from "react";
import { MovieType } from "../types/MovieType";
import useAuthStore from "../../admin/store/store";
 
interface MoviePageProps {
    movie: MovieType | null;
}


const useMovie = ({ movie }: MoviePageProps) => {
    const { user } = useAuthStore();
    const [movieDetails, setMovieDetails] = useState<MovieType | null>(null);

    useEffect(() => {
        setMovieDetails(movie);
    }, [movie]);

    return { user, movieDetails }
}

export default useMovie;