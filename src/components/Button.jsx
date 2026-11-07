import { Link } from 'react-router-dom'

// Se receber "to", vira um Link; caso contrário, um botão comum.
export default function Button({ children, to, type = 'button', variante = 'primario', onClick }) {
  const classe = `botao botao-${variante}`
  if (to) return <Link to={to} className={classe}>{children}</Link>
  return <button type={type} className={classe} onClick={onClick}>{children}</button>
}
