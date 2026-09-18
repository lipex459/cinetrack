import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="page-container" style={{ padding: '34px 0 46px', color: '#858995' }}>
        CineTrack · Projeto acadêmico · Dados fornecidos pelo TMDB. Este produto não é endossado ou certificado pelo TMDB.
      </footer>
    </>
  )
}

export default MainLayout
