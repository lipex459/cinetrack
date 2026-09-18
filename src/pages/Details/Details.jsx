import { useEffect, useState } from 'react'
import { FiBookmark, FiCheck, FiStar } from 'react-icons/fi'
import { useLocation, useParams } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
import { BACKDROP_URL, IMAGE_URL, getFromTMDB } from '../../services/tmdb'
import './Details.css'

function Details({ addToList, watchlist }) {
  const { id } = useParams()
  const location = useLocation()
  const type = location.pathname.startsWith('/tv/') ? 'tv' : 'movie'
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadDetails() {
      try {
        setLoading(true)
        setError('')
        const data = await getFromTMDB(`/${type}/${id}?language=pt-BR`)
        setContent(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadDetails()
  }, [id, type])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <div className="page-container section"><p className="status-message error-message">{error}</p></div>
  }

  if (!content) {
    return null
  }

  const title = content.title || content.name
  const releaseDate = content.release_date || content.first_air_date
  const alreadySaved = watchlist.some(
    (item) => item.id === content.id && item.media_type === type,
  )

  const backdropStyle = content.backdrop_path
    ? { backgroundImage: `linear-gradient(90deg, rgba(10,11,15,.97) 30%, rgba(10,11,15,.55)), url(${BACKDROP_URL}${content.backdrop_path})` }
    : undefined

  function handleAdd() {
    addToList({
      id: content.id,
      media_type: type,
      title: content.title,
      name: content.name,
      poster_path: content.poster_path,
      vote_average: content.vote_average,
    })
  }

  return (
    <section className="details" style={backdropStyle}>
      <div className="page-container details__content">
        <div className="details__poster-wrap">
          {content.poster_path ? (
            <img
              src={`${IMAGE_URL}${content.poster_path}`}
              alt={`Poster de ${title}`}
              className="details__poster"
            />
          ) : (
            <div className="details__poster details__poster--empty">Sem imagem</div>
          )}
        </div>

        <div className="details__info">
          <span className="details__eyebrow">{type === 'movie' ? 'Filme' : 'Série'}</span>
          <h1>{title}</h1>

          <div className="details__meta">
            <span><FiStar /> {Number(content.vote_average || 0).toFixed(1)}</span>
            {releaseDate && <span>{releaseDate.slice(0, 4)}</span>}
            {content.runtime && <span>{content.runtime} min</span>}
          </div>

          <div className="details__genres">
            {content.genres?.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>

          <p className="details__overview">
            {content.overview || 'Este conteúdo ainda não possui descrição em português.'}
          </p>

          <button
            className="details__button"
            onClick={handleAdd}
            disabled={alreadySaved}
          >
            {alreadySaved ? <FiCheck /> : <FiBookmark />}
            {alreadySaved ? 'Adicionado à lista' : 'Adicionar à minha lista'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Details
