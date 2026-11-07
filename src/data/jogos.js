// Imagens geradas em SVG (data URI) para o projeto funcionar sem internet.
const capa = (cor1, cor2, letra) =>
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${cor1}"/><stop offset="1" stop-color="${cor2}"/></linearGradient></defs><rect width="400" height="240" fill="url(#g)"/><text x="200" y="150" font-size="110" font-family="Georgia,serif" font-weight="700" fill="rgba(255,255,255,.85)" text-anchor="middle">${letra}</text></svg>`
  )

export const jogos = [
  { id: 1, titulo: 'Rota do Frevo', categoria: 'Ritmo', preco: 79.9, imagem: capa('#c2410c', '#f59e0b', 'R'), descricao: 'Siga a batida do frevo e vença os desafios de cada bloco de carnaval.' },
  { id: 2, titulo: 'Mangue Quest', categoria: 'Aventura', preco: 119.9, imagem: capa('#0f766e', '#14b8a6', 'M'), descricao: 'Explore manguezais e resolva enigmas ecológicos numa aventura em mundo aberto.' },
  { id: 3, titulo: 'Cangaço Tático', categoria: 'Estratégia', preco: 99.5, imagem: capa('#7c2d12', '#b45309', 'C'), descricao: 'Planeje emboscadas e gerencie recursos em batalhas por turnos no sertão.' },
  { id: 4, titulo: 'Maré Alta Racing', categoria: 'Corrida', preco: 149.0, imagem: capa('#1d4ed8', '#38bdf8', 'M'), descricao: 'Corridas de jangada e lancha pelo litoral, com clima dinâmico e maré variável.' },
  { id: 5, titulo: 'Bumba Puzzle', categoria: 'Quebra-cabeça', preco: 39.9, imagem: capa('#6d28d9', '#ec4899', 'B'), descricao: 'Mais de 200 fases de lógica inspiradas em festas e cores populares.' },
  { id: 6, titulo: 'Sertão RPG', categoria: 'RPG', preco: 189.9, imagem: capa('#365314', '#a3e635', 'S'), descricao: 'Crie seu personagem, escolha alianças e decida o destino de uma vila no agreste.' }
]
