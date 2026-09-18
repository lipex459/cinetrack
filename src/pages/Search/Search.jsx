import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import Loading from '../../components/Loading/Loading'
import MovieCard from '../../components/MovieCard/MovieCard'
import { getFromTMDB } from '../../services/tmdb'
import './Search.css'

function Search() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searched, setSearched] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    if (!search.trim()) {
      return
    }

    try {
      setLoading(true)
      setError('')
      setSearched(true)

      const data = await getFromTMDB(
        `/search/multi?language=pt-BR&query=${encodeURIComponent(search)}&page=1&include_adult=false`,
      )

      const allowedResults = data.results.filter(
        (item) => item.media_type === 'movie' || item.media_type === 'tv',
      )

      setResults(allowedResults)
    } catch (err) {
      setError(err.message)
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page-container search-page section">
      <div className="search-page__heading">
        <h1>Buscar</h1>
        <p>Encontre filmes e séries pelo nome.</p>
      </div>

      <form className="search-form" onSubmit={handleSubmit}>
        <FiSearch />
        <input
          type="search"
          placeholder="Ex.: Interestelar, Breaking Bad..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Nome do filme ou série"
        />
        <button type="submit">Pesquisar</button>
      </form>

      {loading && <Loading />}
      {error && <p className="status-message error-message">{error}</p>}

      {!loading && !error && searched && results.length === 0 && (
        <p className="status-message">Nenhum resultado encontrado.</p>
      )}

      {!loading && results.length > 0 && (
        <div className="content-grid search-results">
          {results.map((item) => (
            <MovieCard
              key={`${item.media_type}-${item.id}`}
              id={item.id}
              title={item.title || item.name}
              poster={item.poster_path}
              rating={item.vote_average}
              type={item.media_type}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Search
