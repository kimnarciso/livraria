const produtos = [
  {
    "id": 1,
    "titulo": "Jogos Vorazes",
    "autor": "Suzanne Collins",
    "resumo": "Em uma sociedade cruel, Katniss precisa lutar pela própria vida em um jogo mortal.",
    "preco": 75.90,
    "capa": "public/imagem/capa-jogos_vorazes.jpg"
  },
  {
    "id": 2,
    "titulo": " A Rainha Vermelha",
    "autor": "Victoria Aveyard ",
    "resumo": " Em um reino dividido pelo sangue, uma garota comum descobre um poder capaz de mudar tudo.",
    "preco": 54.99,
    "capa": "public/imagem/a-rainha_vermelha.jpg"
  },
  {
    "id": 3,
    "titulo": "Percy Jackson: O ladrão de raios",
    "autor": "Rick Riordan",
    "resumo": "Um jovem semideus descobre seu destino em uma missão cheia de perigos mitológicos",
    "preco": 43.98,
    "capa": "public/imagem/ladrao-de-raios.jpg"
  },
  {
    "id": 4,
    "titulo": "O príncipe cruel",
    "autor": "Holly Black",
    "resumo": "Em meio às intrigas do reino das fadas, Jude luta por poder e sobrevivência",
    "preco": 55.95,
    "capa": "public/imagem/principe-cruel.jpg"
  },
  {
    "id": 5,
    "titulo": "Percy Jackson: O mar de monstros",
    "autor": "Rick Riordan",
    "resumo": "Percy embarca em uma aventura épica para salvar o Acampamento Meio-Sangue.",
    "preco": 40.99,
    "capa": "public/imagem/o-mar-de-monstros.jpg"
  },
  {
    "id": 6,
    "titulo": "Em chamas",
    "autor": "Suzanne Collins",
    "resumo": " Katniss volta à arena em uma disputa ainda mais perigosa e cheia de revolta.",
    "preco": 20.99,
    "capa": "public/imagem/em _chamas.jpg"
  },
  {
    "id": 7,
    "titulo": "A biblioteca da meia noite",
    "autor": "Matt Haig",
    "resumo": "Entre vidas alternativas e escolhas do passado, Nora descobre o verdadeiro valor de viver",
    "preco": 70.54,
    "capa": "public/imagem/biblioteca_da_meia-noite.jpg"
  },
  {
    "id": 8,
    "titulo": "O vilarejo",
    "autor": "Raphael Monte",
    "resumo": "Sete histórias sombrias revelam os pecados escondidos em um misterioso vilarejo.",
    "preco": 80.99,
    "capa": "public/imagem/o-vilarejo.jpg"
  }
]

export default (produtos, carrinho);

//EXEMPLOO de estrutura para o nosso carrinho 
const carrinho = {
items: [
{
id: 1,
nome: 'Livro 1',
preco: 49.9,
quantidade: 1,
valorTotal: 49.9,
},
{
id: 2,
nome: 'Livro 2',
preco: 99.9,
quantidade: 2,
valorTotal: 199.8,
},
],
frete: 0,
desconto: 0,
total: 288.3,
};