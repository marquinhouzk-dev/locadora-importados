import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <nav>
        <span>GARAGEM 47</span>
        <div>
          <Link to="/">Início</Link>
          <Link to="/carros">Carros</Link>
        </div>
      </nav>
    </header>
  )
}