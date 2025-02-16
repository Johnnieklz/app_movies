'use client';
import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { Movie } from '@/app/types/movie';

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

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

      console.log("Dados da API:", response.data); // Verifica a resposta completa
      console.log("Filmes recebidos:", response.data.results); // Verifica a lista de filmes

      setMovies(response.data.results || []); // Evita problemas caso `results` seja undefined
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  };

  return (
    <ul className="movie-list">
      {movies.map((movie) => {
        console.log("Filme enviado para MovieCard:", movie); // ✅ Log para depuração
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </ul>
  );
}

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <li className="movie-card">
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/placeholder.jpg"}
        alt={movie.title ?? "Título não disponível"}
      />
      <h3>{movie.title ?? "Título desconhecido"}</h3>
      <p>{movie.overview ?? "Descrição não disponível"}</p>
      <span>Nota: {movie.vote_average !== undefined ? movie.vote_average : "Sem avaliação"}</span>
    </li>
  );
}
