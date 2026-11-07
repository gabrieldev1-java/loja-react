import Button from '../components/Button.jsx'

export default function Contato() {
  return (
    <section className="texto">
      <h2>Contato</h2>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <label>Nome
          <input type="text" name="nome" placeholder="Seu nome" />
        </label>
        <label>E-mail
          <input type="email" name="email" placeholder="voce@exemplo.com" />
        </label>
        <label>Mensagem
          <textarea name="mensagem" rows="5" placeholder="Escreva sua mensagem" />
        </label>
        <Button type="submit">Enviar mensagem</Button>
      </form>
    </section>
  )
}
