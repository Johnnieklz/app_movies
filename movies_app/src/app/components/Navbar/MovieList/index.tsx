'use client';
import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';

export interface MovieType {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

export default function MovieList() {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day', {
        params: {
          api_key: '4f144526ac92c2ac1c178d4289f006e3',
          language: 'pt-BR',
        },
      });
      setMovies(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  };

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

interface MovieCardProps {
  movie: MovieType;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <li className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      <span>Nota: {movie.vote_average}</span>
    </li>
  );
}
