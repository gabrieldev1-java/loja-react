import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', texto: 'Início' },
  { to: '/produtos', texto: 'Jogos' },
  { to: '/sobre', texto: 'Sobre' },
  { to: '/contato', texto: 'Contato' }
]

export default function Menu() {
  return (
    <nav className="menu" aria-label="Principal">
      {links.map((l) => (
        <NavLink key={l.to} to={l.to} end className={({ isActive }) => (isActive ? 'ativo' : '')}>
          {l.texto}
        </NavLink>
      ))}
    </nav>
  )
}
