import Button from '../components/Button.jsx'

export default function Home() {
  return (
    <section className="hero">
      <h1>Jogos feitos com a cara do Nordeste</h1>
      <p>
        A Torre de Jogos reúne títulos independentes inspirados na cultura, na música e nas
        paisagens da região. Este site foi construído com React usando componentes, Props e rotas.
      </p>
      <div className="acoes">
        <Button to="/produtos">Ver catálogo</Button>
        <Button to="/contato" variante="secundario">Falar conosco</Button>
      </div>
    </section>
  )
}
