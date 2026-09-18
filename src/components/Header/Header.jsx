import { FiBookmark, FiHome, FiSearch } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__content page-container">
        <NavLink to="/" className="header__brand">
          <span>Cine</span>Track
        </NavLink>

        <nav className="header__nav" aria-label="Navegação principal">
          <NavLink to="/" end>
            <FiHome /> <span>Início</span>
          </NavLink>
          <NavLink to="/buscar">
            <FiSearch /> <span>Buscar</span>
          </NavLink>
          <NavLink to="/minha-lista">
            <FiBookmark /> <span>Minha Lista</span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
