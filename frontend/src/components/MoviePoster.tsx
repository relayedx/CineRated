import type { CSSProperties } from 'react'
import type { Movie } from '../data/movies'

type MoviePosterProps = {
  movie: Movie
}

export function MoviePoster({ movie }: MoviePosterProps) {
  return (
    <div
      className="poster-frame"
      style={{ '--movie-accent': movie.accent } as CSSProperties}
    >
      <img src={movie.poster} alt={`${movie.title} poster`} loading="lazy" />
    </div>
  )
}
