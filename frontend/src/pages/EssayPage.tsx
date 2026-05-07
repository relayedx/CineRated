import type { Movie } from '../data/movies'
import { formatRating } from '../utils/formatRating'

type EssayPageProps = {
  movie: Movie
}

export function EssayPage({ movie }: EssayPageProps) {
  return (
    <article className="essay-page">
      <a className="back-link" href={`#/movies/${movie.id}`}>
        Back to rating
      </a>

      <header className="essay-header">
        <p className="eyebrow">
          {movie.title} / {formatRating(movie.rating)} out of 5
        </p>
        <h1>{movie.reviewTitle}</h1>
        <div className="essay-meta">
          <span>{movie.year}</span>
          <span>{movie.genre}</span>
          <span>{movie.reviewer}</span>
        </div>
      </header>

      <div className="essay-body">
        {movie.essay.map((paragraph, index) => (
          <p key={`${movie.id}-paragraph-${index}`}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}
