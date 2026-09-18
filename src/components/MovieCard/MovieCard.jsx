import { FiStar } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { IMAGE_URL } from '../../services/tmdb'
import './MovieCard.css'

function MovieCard({ id, title, poster, rating, type }) {
  const posterUrl = poster
    ? `${IMAGE_URL}${poster}`
    : 'https://placehold.co/500x750/171920/8c909c?text=Sem+imagem'

  return (
    <Link to={`/${type}/${id}`} className="movie-card">
      <div className="movie-card__poster-wrap">
        <img src={posterUrl} alt={`Poster de ${title}`} className="movie-card__poster" />
        <span className="movie-card__type">{type === 'movie' ? 'Filme' : 'Série'}</span>
      </div>
      <div className="movie-card__body">
        <h3>{title}</h3>
        <span className="movie-card__rating">
          <FiStar /> {Number(rating || 0).toFixed(1)}
        </span>
      </div>
    </Link>
  )
}

export default MovieCard
