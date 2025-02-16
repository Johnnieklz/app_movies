import { Movie } from "../../types/movie";
import StarRating from "../StarRating";
import './index.scss';

export interface Props {
    movie: Movie;
}

export default function MovieCard({ movie }: Props) { // Correção da tipagem
    console.log("Movie:", movie);

    return (
      <li className="movie-card"> {/* Removido `key` porque `MovieCard` não está em um `.map()` */}
        <div className="movie-poster">
          <img
            src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : "/placeholder.jpg"}
            alt={movie.title ?? "Imagem do filme"}
          />
        </div>

        <div className="movie-infos">
          <p className="movie-title">{movie.title}</p>

          {/* Certifique-se de que vote_average é um número */}
          <StarRating rating={movie.vote_average ?? 0} />

          {movie.overview && (
            <div className="hidden-content">
              <p className="description">{movie.overview}</p>

              <button className="btn-default"> 
                  Ver mais!
              </button>
            </div>
          )}
        </div>
      </li>
    );
}
