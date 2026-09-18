const API_URL = 'https://api.themoviedb.org/3'
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'
export const BACKDROP_URL = 'https://image.tmdb.org/t/p/original'

function getOptions() {
  const token = import.meta.env.VITE_TMDB_TOKEN

  if (!token) {
    throw new Error('Configure VITE_TMDB_TOKEN no arquivo .env.')
  }

  return {
    headers: {
      Authorization: `Bearer ${token}`,
      accept: 'application/json',
    },
  }
}

export async function getFromTMDB(endpoint) {
  const response = await fetch(`${API_URL}${endpoint}`, getOptions())

  if (!response.ok) {
    throw new Error('Não foi possível carregar os dados do TMDB.')
  }

  return response.json()
}
