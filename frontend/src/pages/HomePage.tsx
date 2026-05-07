import type { CSSProperties } from 'react'
import { MoviePoster } from '../components/MoviePoster'
import { movies } from '../data/movies'

export function HomePage() {
  return (
    <>
      <section className="site-hero">
        <p className="eyebrow">CineRated</p>
        <h1>Movie Reviews</h1>
        <p>Three sports films, one personal shelf of ratings and essays.</p>
      </section>

      <section className="movie-grid" aria-label="Movie review list">
        {movies.map((movie) => (
          <a
            className="movie-card"
            href={`#/movies/${movie.id}`}
            key={movie.id}
            style={{ '--movie-accent': movie.accent } as CSSProperties}
          >
            <MoviePoster movie={movie} />
            <div className="movie-card-body">
              <div>
                <h2>{movie.title}</h2>
                <p>{movie.year}</p>
              </div>
              <span>{movie.genre}</span>
            </div>
          </a>
        ))}
      </section>
    </>
  )
}
