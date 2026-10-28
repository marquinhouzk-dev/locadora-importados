import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const link = ({ isActive }) =>
    isActive ? "text-amber-400" : "hover:text-amber-300 transition"

  return (
    <header className="border-b border-neutral-800">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-bold tracking-widest text-lg">GARAGEM 47</span>
        <div className="flex gap-6 text-sm">
          <NavLink to="/" className={link}>Início</NavLink>
          <NavLink to="/carros" className={link}>Carros</NavLink>
        </div>
      </nav>
    </header>
  )
}