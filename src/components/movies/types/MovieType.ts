export interface MovieType {
    id: number;
    title: string;
    year: number;
    genre: GenreType[];
    rating: number;
    director: string;
    actors: ActorType[];
    plot: string;
    poster: string;
    trailer: string;
    runtime: number;
    awards: string;
    country: string;
    language: string;
    boxOffice: string;
    production: string;
    website: string;
}

export interface GenreType {
    id: number;
    name: string
}

export interface ActorType {
    id: number;
    name: string;
}