import { FiTrash2 } from 'react-icons/fi'
import MovieCard from '../../components/MovieCard/MovieCard'
import './MyList.css'

function MyList({ watchlist, removeFromList }) {
  return (
    <div className="page-container section my-list">
      <div className="my-list__heading">
        <h1>Minha Lista</h1>
        <p>Conteúdos que você separou para assistir depois.</p>
      </div>

      {watchlist.length === 0 ? (
        <p className="status-message">Sua lista ainda está vazia. Abra um filme ou série e adicione por lá.</p>
      ) : (
        <div className="my-list__grid">
          {watchlist.map((item) => (
            <div className="my-list__item" key={`${item.media_type}-${item.id}`}>
              <MovieCard
                id={item.id}
                title={item.title || item.name}
                poster={item.poster_path}
                rating={item.vote_average}
                type={item.media_type}
              />
              <button
                className="my-list__remove"
                onClick={() => removeFromList(item.id, item.media_type)}
                aria-label={`Remover ${item.title || item.name} da lista`}
              >
                <FiTrash2 /> Remover
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyList
