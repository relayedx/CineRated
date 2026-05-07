import { MoviePoster } from '../components/MoviePoster'
import { StarRating } from '../components/StarRating'
import type { Movie } from '../data/movies'
import { formatRating } from '../utils/formatRating'

type RatingPageProps = {
  movie: Movie
}

export function RatingPage({ movie }: RatingPageProps) {
  return (
    <section className="rating-page">
      <a className="back-link" href="#/">
        Back to movies
      </a>

      <div className="rating-layout">
        <MoviePoster movie={movie} />

        <article className="rating-content">
          <p className="eyebrow">
            {movie.year} / {movie.genre}
          </p>
          <h1>{movie.title}</h1>
          <p className="movie-summary">{movie.summary}</p>

          <div className="rating-strip">
            <StarRating rating={movie.rating} />
            <strong>{formatRating(movie.rating)} / 5</strong>
            <span>Reviewed by {movie.reviewer}</span>
          </div>

          <a className="primary-action" href={`#/movies/${movie.id}/review`}>
            Find out why
          </a>
        </article>
      </div>
    </section>
  )
}
