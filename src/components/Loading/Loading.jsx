import './Loading.css'

function Loading() {
  return (
    <div className="loading" role="status" aria-live="polite">
      <span className="loading__dot" />
      Carregando...
    </div>
  )
}

export default Loading
