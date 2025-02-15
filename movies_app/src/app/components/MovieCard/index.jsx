export default function MovieCard({ movie }: Props) {
    console.log("Movie:", movie);

    return (
      <li key={movie.id} className="movie-card">
        <div className="movie-poster">
          <img
            src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : "/placeholder.jpg"}
            alt={movie.title}
          />
        </div>

        <div className="movie-infos">
          <p className="movie-title">{movie.title}</p>
  
          {/* Certifique-se de que vote_average é um número */}
          <StarRating rating={movie.vote_average ?? 0} />
  
          <div className="hidden-content">
            <p className="description">{movie.overview}</p>
          </div>
        </div>
      </li>
    );
  }
  