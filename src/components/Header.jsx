import { Link } from 'react-router-dom'
import Menu from './Menu.jsx'

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">Torre de Jogos</Link>
      <Menu />
    </header>
  )
}
