import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <section className="hero">
      <h1>404</h1>
      <p>Esta página não existe. Volte ao início e continue explorando.</p>
      <Button to="/">Voltar ao início</Button>
    </section>
  )
}
