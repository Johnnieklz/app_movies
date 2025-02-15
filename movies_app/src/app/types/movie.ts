export interface Movie {
  id: number;
  title: string;
  poster_path?: string; // Pode ser undefined, então usamos `?`
  overview: string;
  vote_average?: number; // Pode ser undefined, então usamos `?`
}
