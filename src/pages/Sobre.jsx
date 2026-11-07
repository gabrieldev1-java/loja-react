export default function Sobre() {
  return (
    <section className="texto">
      <h2>Sobre a aplicação</h2>
      <p>Esta aplicação apresenta um catálogo fictício de jogos e foi criada para praticar três conceitos do React:</p>
      <ul>
        <li><strong>Componentes:</strong> Header, Menu, Footer, Card e Button, cada um em seu arquivo.</li>
        <li><strong>Props:</strong> o componente Card recebe título, imagem, descrição, preço e categoria.</li>
        <li><strong>Rotas:</strong> navegação com react-router-dom, sem recarregar a página.</li>
      </ul>
    </section>
  )
}
