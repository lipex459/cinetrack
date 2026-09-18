import { useEffect, useState } from 'react'
import { FiCompass } from 'react-icons/fi'
import MovieCard from '../../components/MovieCard/MovieCard'
import Loading from '../../components/Loading/Loading'
import { getFromTMDB } from '../../services/tmdb'
import './Home.css'

function Home() {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadContent() {
      try {
        setLoading(true)
        setError('')

        const [movieData, tvData] = await Promise.all([
          getFromTMDB('/movie/popular?language=pt-BR&page=1'),
          getFromTMDB('/tv/popular?language=pt-BR&page=1'),
        ])

        setMovies(movieData.results.slice(0, 12))
        setSeries(tvData.results.slice(0, 12))
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <section className="hero">
        <div className="page-container hero__content">
          <div className="hero__badge">
            <FiCompass /> Descubra o próximo favorito
          </div>
          <h1>Filmes e séries para assistir sem perder tempo procurando.</h1>
          <p>
            Veja o que está em alta, encontre títulos e monte uma lista pessoal para lembrar do que assistir depois.
          </p>
        </div>
      </section>

      <div className="page-container">
        {error && <p className="status-message error-message">{error}</p>}

        {!error && (
          <>
            <section className="section">
              <h2 className="section-title">Filmes populares</h2>
              <div className="content-grid">
                {movies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster={movie.poster_path}
                    rating={movie.vote_average}
                    type="movie"
                  />
                ))}
              </div>
            </section>

            <section className="section">
              <h2 className="section-title">Séries populares</h2>
              <div className="content-grid">
                {series.map((serie) => (
                  <MovieCard
                    key={serie.id}
                    id={serie.id}
                    title={serie.name}
                    poster={serie.poster_path}
                    rating={serie.vote_average}
                    type="tv"
                  />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </>
  )
}

export default Home
