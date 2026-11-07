import Card from '../components/Card.jsx'
import { jogos } from '../data/jogos.js'

export default function Produtos() {
  return (
    <section>
      <h2>Catálogo de jogos</h2>
      <div className="grade">
        {jogos.map((jogo) => (
          <Card
            key={jogo.id}
            titulo={jogo.titulo}
            imagem={jogo.imagem}
            descricao={jogo.descricao}
            preco={jogo.preco}
            categoria={jogo.categoria}
          />
        ))}
      </div>
    </section>
  )
}
