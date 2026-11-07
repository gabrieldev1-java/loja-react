// Recebe os dados do jogo via Props (desestruturadas).
export default function Card({ titulo, imagem, descricao, preco, categoria }) {
  return (
    <article className="card">
      <img src={imagem} alt={`Capa de ${titulo}`} />
      <div className="card-corpo">
        <span className="categoria">{categoria}</span>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        <strong className="preco">
          {preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </strong>
      </div>
    </article>
  )
}
