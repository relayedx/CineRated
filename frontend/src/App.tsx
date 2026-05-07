import { useEffect, useMemo, useState } from 'react'
import { EssayPage } from './pages/EssayPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { RatingPage } from './pages/RatingPage'
import { movies } from './data/movies'
import './App.css'

type Page = 'home' | 'rating' | 'essay' | 'not-found'

function readRoute() {
  const parts = window.location.hash.replace(/^#\/?/, '').split('/').filter(Boolean)

  return {
    movieId: parts[0] === 'movies' ? parts[1] : undefined,
    isEssay: parts[0] === 'movies' && parts[2] === 'review',
  }
}

function App() {
  const [route, setRoute] = useState(readRoute)

  useEffect(() => {
    const onHashChange = () => setRoute(readRoute())

    if (!window.location.hash) {
      window.history.replaceState(null, '', '#/')
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const activeMovie = useMemo(
    () => movies.find((movie) => movie.id === route.movieId),
    [route.movieId],
  )

  const page: Page = !route.movieId
    ? 'home'
    : activeMovie
      ? route.isEssay
        ? 'essay'
        : 'rating'
      : 'not-found'

  return (
    <main className="app-shell">
      {page === 'home' && <HomePage />}
      {page === 'rating' && activeMovie && <RatingPage movie={activeMovie} />}
      {page === 'essay' && activeMovie && <EssayPage movie={activeMovie} />}
      {page === 'not-found' && <NotFoundPage />}
    </main>
  )
}

export default App
