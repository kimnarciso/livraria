const produtos = [
  {
    "id": 1,
    "titulo": "Jogos Vorazes",
    "autor": "Suzanne Collins",
    "resumo": "Em uma sociedade cruel, Katniss precisa lutar pela própria vida em um jogo mortal.",
    "preco": 75.90,
    "capa": "/imagem/capa-jogos_vorazes.jpg",
    "categoria": "Distopia",
    "detalhes": "Editora: Rocco Jovens Leitores, Data da publicação : 15 fevereiro 2012, Número de páginas  :  400 páginas, Idade de leitura  : Idade sugerida pelo cliente: 14 anos e acima"
  },
  {
    "id": 2,
    "titulo": " A Rainha Vermelha",
    "autor": "Victoria Aveyard ",
    "resumo": " Em um reino dividido pelo sangue, uma garota comum descobre um poder capaz de mudar tudo.",
    "preco": 54.99,
    "capa": "/imagem/a-rainha_vermelha.jpg",
    "categoria": "Fantasia",
    "detalhes": "Editora: Seguinte, Data da publicação : 9 junho 2015, Número de páginas  :  424 páginas, Idade de leitura  : Idade sugerida pelo cliente: 14 anos e acima"
  },
  {
    "id": 3,
    "titulo": "Percy Jackson: O ladrão de raios",
    "autor": "Rick Riordan",
    "resumo": "Um jovem semideus descobre seu destino em uma missão cheia de perigos mitológicos",
    "preco": 43.98,
    "capa": "/imagem/ladrao-de-raios.jpg",
    "categoria": "Aventura",
    "detalhes": "Editora:  Intrínseca, Data da publicação : 3 janeiro 2011, Número de páginas  : 400 páginas, Idade de leitura  : Idade sugerida pelo cliente: 12 anos e acima"
  },
  {
    "id": 4,
    "titulo": "O príncipe cruel",
    "autor": "Holly Black",
    "resumo": "Em meio às intrigas do reino das fadas, Jude luta por poder e sobrevivência",
    "preco": 55.95,
    "capa": "/imagem/principe-cruel.jpg",
    "categoria": "Romance",
    "detalhes": "Editora:  Galera, Data da publicação : 10 setembro 2018, Número de páginas  : 322  páginas, Idade de leitura  : 16 anos e acima"
  },
  {
    "id": 5,
    "titulo": "Percy Jackson: O mar de monstros",
    "autor": "Rick Riordan",
    "resumo": "Percy embarca em uma aventura épica para salvar o Acampamento Meio-Sangue.",
    "preco": 40.99,
    "capa": "/imagem/o-mar-de-monstros.jpg",
    "categoria": "Aventura",
    "detalhes": "Editora:  Intrínseca, Data da publicação : 17 abril 2009, Número de páginas  : 304  páginas, Idade de leitura  : Idade sugerida pelo cliente: 12 anos e acima"
  },
  {
    "id": 6,
    "titulo": "Em chamas",
    "autor": "Suzanne Collins",
    "resumo": " Katniss volta à arena em uma disputa ainda mais perigosa e cheia de revolta.",
    "preco": 20.99,
    "capa": "/imagem/em _chamas.jpg",
    "categoria": "Distopia",
    "detalhes": "Editora:  Rocco Jovens Leitores, Data da publicação : 15 fevereiro 2012, Número de páginas  : 416 páginas, Idade de leitura  : Idade sugerida pelo cliente: 14 anos e acima"
  },
  {
    "id": 7,
    "titulo": "A biblioteca da meia noite",
    "autor": "Matt Haig",
    "resumo": "Entre vidas alternativas e escolhas do passado, Nora descobre o verdadeiro valor de viver",
    "preco": 70.54,
    "capa": "/imagem/biblioteca_da_meia-noite.jpg",
    "categoria": "Fantasia",
    "detalhes": "Editora:  Bertrand Brasil, Data da publicação : 27 setembro 2021, Número de páginas  : 308 páginas, Idade de leitura  : Idade sugerida pelo cliente: 14 anos e acima"
  },
  {
    "id": 8,
    "titulo": "O vilarejo",
    "autor": "Raphael Monte",
    "resumo": "Sete histórias sombrias revelam os pecados escondidos em um misterioso vilarejo.",
    "preco": 80.99,
    "capa": "/imagem/o-vilarejo.jpg",
    "categoria": "Suspense/Terror",
    "detalhes": "Editora:  Suma, Data da publicação : 14 agosto 2015, Número de páginas  : 96 páginas, Idade de leitura  : Idade sugerida pelo cliente: 18 anos e acima"
  },
    {
    "id": 9,
    "titulo": "A esperança",
    "autor": "Suzanne Collins",
    "resumo": "Katniss lidera a revolução final contra o regime opressor de Panem.",
    "preco": 21.90,
    "capa": "/imagem/esperanca.png",
    "categoria": "Distopia",
    "detalhes": "Editora: Rocco Jovens Leitores, Data da publicação : 15 fevereiro 2012, Número de páginas  : 424 páginas, Idade de leitura  : Idade sugerida pelo cliente: 14 anos e acima"
  },
    {
    "id": 10,
    "titulo": "O Manifesto Comunista",
    "autor": "Karl Max e Friedaich Engels",
    "resumo": "Obra política que defende a luta de classes e a união dos trabalhadores contra o capitalismo.",
    "preco": 0.00,
    "capa": "/imagem/manifesto.png",
    "categoria": "História",
    "detalhes": "Editora: Paz & Terra, Data da publicação : 22 novembro 2021, Número de páginas  : 80 páginas, Idade de leitura  : Idade sugerida pelo cliente: 14 anos e acima"
  },
    {
    "id": 11,
    "titulo": "A cantiga dos pássaros e das serpentes",
    "autor": "Suzanne Collins",
    "resumo": "O jovem Coriolanus Snow tenta conquistar poder ao orientar uma tributo nos primeiros Jogos Vorazes.",
    "preco": 65.90,
    "capa": "/imagem/cantiga.png",
    "categoria": "Distopia",
    "detalhes": "Editora: Rocco Jovens Leitores, Data da publicação : 15 junho 2020, Número de páginas  : 575 páginas, Idade de leitura  : 14 anos e acima"
  },
    {
    "id": 12,
    "titulo": "Amanhecer na colheita",
    "autor": "Suzanne Collins",
    "resumo": "Durante uma edição especial dos Jogos Vorazes, jovens precisam lutar pela sobrevivência em meio à opressão da Capital.",
    "preco": 70.90,
    "capa": "/imagem/amanhecer.png",
    "categoria": "Distopia",
    "detalhes": "Editora: Rocco Jovens Leitores, Data da publicação : 18 março 2025, Número de páginas  : 452 páginas, Idade de leitura  : 14 anos e acima"
  },
    {
    "id": 13,
    "titulo": "O rei perverso",
    "autor": "Holly Black",
    "resumo": "Jude precisa enfrentar traições e disputas políticas no reino das fadas para manter seu poder e sobreviver.",
    "preco": 42.76,
    "capa": "/imagem/rei_perverso.png",
    "categoria": "Romance",
    "detalhes": "Editora: Galera, Data da publicação : 18 maio 2020, Número de páginas  : 352 páginas, Idade de leitura  : 14 anos e acima"
  },
    {
    "id": 14,
    "titulo": "IT a coisa",
    "autor": "Stephen King",
    "resumo": "Um grupo de amigos enfrenta uma entidade monstruosa que assume a forma dos maiores medos das pessoas na cidade de Derry.",
    "preco": 106.90,
    "capa": "/imagem/itacoisa.png",
    "categoria": "Suspense/Terror",
    "detalhes": "Editora: Suma, Data da publicação : 4 agosto 2014, Número de páginas  : 1645 páginas, Idade de leitura  : 17 anos e acima"
  },
    {
    "id": 15,
    "titulo": "Divergente",
    "autor": " Veronica Roth ",
    "resumo": "Em uma sociedade dividida por facções, Tris descobre que é divergente e ameaça o sistema criado para controlar a população.",
    "preco": 37.90,
    "capa": "/imagem/divergente.png",
    "categoria": "Ficção Científica",
    "detalhes": "Editora: MOLINO, Data da publicação : 13 junho 2013, Número de páginas  : 388 páginas, Idade de leitura  : 14 anos e acima"
  },
   {
    "id": 16,
    "titulo": "A hora da estrela",
    "autor": " Clarice Lispector ",
    "resumo": "A história acompanha Macabéa, uma jovem nordestina simples e invisível que tenta sobreviver no Rio de Janeiro.",
    "preco": 32.90,
    "capa": "/imagem/horaestrela.png",
    "categoria": "Clássicos",
    "detalhes": "Editora: Rocco, Data da publicação : 4 agosto 1998, Número de páginas  : 88 páginas, Idade de leitura  : 14 anos e acima"
  }
  ,
   {
    "id": 17,
    "titulo": "Percy Jackson: A maldição do titã",
    "autor": " Rick Riordan ",
    "resumo": "Percy Jackson embarca em uma missão perigosa para salvar a deusa Ártemis e impedir que uma antiga profecia destrua o Olimpo.",
    "preco": 40.90,
    "capa": "/imagem/maldicao.png",
    "categoria": "Aventura",
    "detalhes": "Editora: Intrínseca, Data da publicação : 13 de outubro de 2009, Número de páginas  : 336 páginas, Idade de leitura  : 12 anos e acima"
  }
  ,
   {
    "id": 18,
    "titulo": "A revolução dos bichos",
    "autor": " George Orwell ",
    "resumo": "Animais de uma fazenda se rebelam contra os humanos, mas acabam criando um governo tão opressor quanto o anterior",
    "preco": 20.30,
    "capa": "/imagem/bichos.png",
    "categoria": "Distopia",
    "detalhes": "Editora: Companhia das Letras, Data da publicação : 10 janeiro 2007, Número de páginas  : 152 páginas, Idade de leitura  : 15 anos e acima"
  }
  ,
   {
    "id": 19,
    "titulo": "Pai rico Pai pobre ",
    "autor": " Kiyosaki Robert  ",
    "resumo": "O autor compara os ensinamentos financeiros de dois “pais” para mostrar a importância da educação financeira e dos investimentos.",
    "preco": 67.67,
    "capa": "/imagem/pairico.png",
    "categoria": "AutoAjuda",
    "detalhes": "Editora: Alta Books, Data da publicação : 26 julho 2017, Número de páginas  : 336 páginas, Idade de leitura  : 15 anos e acima"
  }
  ,
   {
    "id": 20,
    "titulo": "Amor e Gelato ",
    "autor": "  Jenna Evans Welch ",
    "resumo": " Lina viaja para a Itália para realizar o último desejo da mãe e acaba descobrindo segredos do passado enquanto vive um romance inesquecível.",
    "preco": 34.92,
    "capa": "/imagem/gelato.png",
    "categoria": "Romance",
    "detalhes": "Editora: Intrínseca, Data da publicação : 21 julho 2017, Número de páginas  : 320 páginas, Idade de leitura  : 12 anos e acima" 
  }
  ,
  {
  "id": 21,
  "titulo": "Uma mulher no escuro",
  "autor": "Raphael Montes",
  "resumo": "Uma jovem enfrenta mistérios e perigos enquanto tenta sobreviver em meio à escuridão e ao desconhecido.",
  "preco": 57.63,
  "capa": "/imagem/uma-mulher-no-escuro.jpg",
  "categoria": "Suspense/Terror",
  "detalhes": "Editora: Companhia das Letras, Data da publicação: 13 agosto 2019, Número de páginas: 256 páginas, Idade de leitura: 16 anos e acima"
},
{
  "id": 22,
  "titulo": "Maze Runner: Correr ou Morrer",
  "autor": "James Dashner",
  "resumo": "Preso em um labirinto mortal, Thomas precisa encontrar uma saída antes que seja tarde demais.",
  "preco": 32.14,
  "capa": "/imagem/maze-runner.jpg",
  "categoria": "Distopia",
  "detalhes": "Editora: Vergara & Riba, Data da publicação: 1 outubro 2010, Número de páginas: 426 páginas, Idade de leitura: 14 anos e acima"
},
{
  "id": 23,
  "titulo": "O menino do pijama listrado",
  "autor": "John Boyne",
  "resumo": "Uma emocionante história de amizade e inocência durante um dos períodos mais sombrios da história.",
  "preco": 42.00,
  "capa": "/imagem/o-menino-do-pijama-listrado.jpg",
  "categoria": "Drama",
  "detalhes": "Editora: Seguinte, Data da publicação: 1 janeiro 2007, Número de páginas: 192 páginas, Idade de leitura: 12 anos e acima"
},
{
  "id": 24,
  "titulo": "O extraordinário",
  "autor": "R. J. Palacio",
  "resumo": "A história de Auggie Pullman, um garoto com uma condição facial rara que enfrenta os desafios de frequentar a escola pela primeira vez.",
  "preco": 38.41,
  "capa": "/imagem/extraordinario.jpg",
  "categoria": "Drama",
  "detalhes": "Editora: Intrínseca, Data da publicação: 1 fevereiro 2013, Número de páginas: 320 páginas, Idade de leitura: 10 anos e acima"
},
{
  "id": 25,
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "resumo": "Bentinho relembra sua história de amor com Capitu e questiona a fidelidade da mulher que marcou sua vida.",
  "preco": 29.90,
  "capa": "/imagem/dom-casmurro.jpg",
  "categoria": "Clássicos",
  "detalhes": "Editora: Principis, Data da publicação: 1 janeiro 2019, Número de páginas: 208 páginas, Idade de leitura: 14 anos e acima"
},
{
  "id": 26,
  "titulo": "Jantar Secreto",
  "autor": "Raphael Montes",
  "resumo": "Quatro amigos se envolvem em um negócio sombrio que foge completamente do controle.",
  "preco": 49.90,
  "capa": "/imagem/jantar-secreto.jpg",
  "categoria": "Suspense/Terror",
  "detalhes": "Editora: Companhia das Letras, Data da publicação: 14 novembro 2016, Número de páginas: 368 páginas, Idade de leitura: 18 anos e acima"
},
{
  "id": 27,
  "titulo": "Convergente",
  "autor": "Veronica Roth",
  "resumo": "Tris e seus amigos descobrem a verdade sobre o mundo além das facções.",
  "preco": 39.90,
  "capa": "/imagem/convergente.jpg",
  "categoria": "Ficção Científica",
  "detalhes": "Editora: Rocco Jovens Leitores, Data da publicação: 1 janeiro 2014, Número de páginas: 526 páginas, Idade de leitura: 14 anos e acima"
},
{
  "id": 28,
  "titulo": "Insurgente",
  "autor": "Veronica Roth",
  "resumo": "Após os acontecimentos de Divergente, Tris enfrenta conflitos e segredos que podem mudar tudo.",
  "preco": 39.90,
  "capa": "/imagem/insurgente.jpg",
  "categoria": "Ficção Científica",
  "detalhes": "Editora: Rocco Jovens Leitores, Data da publicação: 1 janeiro 2013, Número de páginas: 512 páginas, Idade de leitura: 14 anos e acima"
},
{
  "id": 29,
  "titulo": "Harry Potter e a Pedra Filosofal",
  "autor": "J. K. Rowling",
  "resumo": "Harry descobre que é um bruxo e inicia sua jornada em Hogwarts.",
  "preco": 44.90,
  "capa": "/imagem/pedra-filosofal.jpg",
  "categoria": "Fantasia",
  "detalhes": "Editora: Rocco, Data da publicação: 1 janeiro 2000, Número de páginas: 264 páginas, Idade de leitura: 10 anos e acima"
}
,
{
  "id": 30,
  "titulo": "Harry Potter e a Câmara Secreta",
  "autor": "J. K. Rowling",
  "resumo": "Estranhos ataques acontecem em Hogwarts enquanto Harry investiga a Câmara Secreta.",
  "preco": 44.90,
  "capa": "/imagem/camara-secreta.jpg",
  "categoria": "Fantasia",
  "detalhes": "Editora: Rocco, Data da publicação: 1 janeiro 2000, Número de páginas: 252 páginas, Idade de leitura: 10 anos e acima"
},
{
  "id": 31,
  "titulo": "Harry Potter e o Prisioneiro de Azkaban",
  "autor": "J. K. Rowling",
  "resumo": "Harry descobre segredos sobre seu passado enquanto um perigoso fugitivo escapa de Azkaban.",
  "preco": 44.90,
  "capa": "/imagem/prisioneiro-de-azkaban.jpeg",
  "categoria": "Fantasia",
  "detalhes": "Editora: Rocco, Data da publicação: 1 janeiro 2000, Número de páginas: 348 páginas, Idade de leitura: 10 anos e acima"
},
{
  "id": 32,
  "titulo": "Harry Potter e o Cálice de Fogo",
  "autor": "J. K. Rowling",
  "resumo": "Harry participa do Torneio Tribruxo e enfrenta desafios mortais.",
  "preco": 44.90,
  "capa": "/imagem/calice-de-fogo.jpg",
  "categoria": "Fantasia",
  "detalhes": "Editora: Rocco, Data da publicação: 1 janeiro 2001, Número de páginas: 584 páginas, Idade de leitura: 10 anos e acima"
},
{
  "id": 33,
  "titulo": "Harry Potter e a Ordem da Fênix",
  "autor": "J. K. Rowling",
  "resumo": "Harry lidera a resistência contra as forças que tentam negar o retorno de Voldemort.",
  "preco": 44.90,
  "capa": "/imagem/ordem-da-fenix.jpg",
  "categoria": "Fantasia",
  "detalhes": "Editora: Rocco, Data da publicação: 1 janeiro 2003, Número de páginas: 704 páginas, Idade de leitura: 10 anos e acima"
},
{
  "id": 34,
  "titulo": "Harry Potter e o Enigma do Príncipe",
  "autor": "J. K. Rowling",
  "resumo": "Harry descobre informações importantes sobre Voldemort enquanto se prepara para a batalha final.",
  "preco": 44.90,
  "capa": "/imagem/enigma-do-principe.jpg",
  "categoria": "Fantasia",
  "detalhes": "Editora: Rocco, Data da publicação: 1 janeiro 2005, Número de páginas: 512 páginas, Idade de leitura: 10 anos e acima"
},
{
  "id": 35,
  "titulo": "Harry Potter e as Relíquias da Morte",
  "autor": "J. K. Rowling",
  "resumo": "Harry, Rony e Hermione partem em uma missão decisiva para derrotar Voldemort.",
  "preco": 44.90,
  "capa": "/imagem/reliquias-da-morte.jpg",
  "categoria": "Fantasia",
  "detalhes": "Editora: Rocco, Data da publicação: 1 janeiro 2007, Número de páginas: 592 páginas, Idade de leitura: 10 anos e acima"
},
{
  "id": 36,
  "titulo": "Maze Runner: Prova de Fogo",
  "autor": "James Dashner",
  "resumo": "Thomas e os clareanos enfrentam um deserto mortal repleto de novos desafios.",
  "preco": 34.90,
  "capa": "/imagem/prova-de-fogo.jpg",
  "categoria": "Distopia",
  "detalhes": "Editora: Vergara & Riba, Data da publicação: 1 outubro 2011, Número de páginas: 400 páginas, Idade de leitura: 14 anos e acima"
},
{
  "id": 37,
  "titulo": "Maze Runner: A Cura Mortal",
  "autor": "James Dashner",
  "resumo": "A batalha final contra a organização C.R.U.E.L. coloca o futuro da humanidade em jogo.",
  "preco": 34.90,
  "capa": "/imagem/a-cura-mortal.jpg",
  "categoria": "Distopia",
  "detalhes": "Editora: Vergara & Riba, Data da publicação: 1 outubro 2013, Número de páginas: 344 páginas, Idade de leitura: 14 anos e acima"
},
{
  "id": 38,
  "titulo": "O Acordo",
  "autor": "Elle Kennedy",
  "resumo": "Um acordo inesperado aproxima Hannah e Garrett de uma forma que nenhum dos dois imaginava.",
  "preco": 39.90,
  "capa": "/imagem/o-acordo-nova-edicao.jpg",
  "categoria": "Romance",
  "detalhes": "Editora: Paralela, Data da publicação: 14 setembro 2021, Número de páginas: 360 páginas, Idade de leitura: 16 anos e acima"
},
{
  "id": 39,
  "titulo": "O Erro",
  "autor": "Elle Kennedy",
  "resumo": "Logan tenta conquistar a garota certa enquanto lida com os próprios conflitos.",
  "preco": 39.90,
  "capa": "/imagem/o-erro-nova-edicao.jpg",
  "categoria": "Romance",
  "detalhes": "Editora: Paralela, Data da publicação: 14 setembro 2021, Número de páginas: 336 páginas, Idade de leitura: 16 anos e acima"
},
{
  "id": 40,
  "titulo": "O Jogo",
  "autor": "Elle Kennedy",
  "resumo": "Dean e Allie vivem um relacionamento cheio de química, humor e desafios.",
  "preco": 39.90,
  "capa": "/imagem/o-jogo.jpg",
  "categoria": "Romance",
  "detalhes": "Editora: Paralela, Data da publicação: 14 setembro 2021, Número de páginas: 344 páginas, Idade de leitura: 16 anos e acima"
},
{
  "id": 41,
  "titulo": "O Legado",
  "autor": "Elle Kennedy",
  "resumo": "Os casais da série retornam para mostrar como suas histórias continuaram após a faculdade.",
  "preco": 39.90,
  "capa": "/imagem/o-legado-nova-edicao.jpg",
  "categoria": "Romance",
  "detalhes": "Editora: Paralela, Data da publicação: 7 março 2023, Número de páginas: 320 páginas, Idade de leitura: 16 anos e acima"
},
{
  "id": 42,
  "titulo": "A Conquista",
  "autor": "Elle Kennedy",
  "resumo": "Um romance universitário envolvente que mistura rivalidade, amizade e paixão inesperada.",
  "preco": 39.90,
  "capa": "/imagem/a-conquista.jpg",
  "categoria": "Romance",
  "detalhes": "Editora: Paralela, Data da publicação: 14 setembro 2021, Número de páginas: 328 páginas, Idade de leitura: 16 anos e acima"
},
{
  "id": 43,
  "titulo": "Vermelho, Branco e Sangue Azul",
  "autor": "Casey McQuiston",
  "resumo": "O filho da presidente dos Estados Unidos e um príncipe britânico transformam uma rivalidade pública em algo muito maior.",
  "preco": 44.90,
  "capa": "/imagem/vermelho-branco-e-sangue-azul.jpg",
  "categoria": "Romance",
  "detalhes": "Editora: Seguinte, Data da publicação: 16 setembro 2019, Número de páginas: 392 páginas, Idade de leitura: 16 anos e acima"
},
{
  "id": 44,
  "titulo": "Os sete maridos de Evelyn Hugo",
  "autor": "Taylor Jenkins Reid",
  "resumo": "Uma estrela de Hollywood revela os segredos de sua vida, carreira e de seus sete casamentos.",
  "preco": 49.90,
  "capa": "/imagem/os-sete-maridos.jpg",
  "categoria": "Romance",
  "detalhes": "Editora: Paralela, Data da publicação: 21 outubro 2019, Número de páginas: 360 páginas, Idade de leitura: 16 anos e acima"
}
]

export { produtos as listaProdutos }

 const autores = [
      {
    "id": 1,
    "nome": "Suzzane Collins ",
    "imagem": "  public/imagem/suzanne.jpg ",
    "resumo": " Suzanne Collins é uma escritora norte-americana conhecida mundialmente pela série Jogos Vorazes, uma das distopias mais populares da literatura jovem. Antes de se tornar romancista, trabalhou escrevendo roteiros para programas infantis de televisão. Seu maior sucesso veio com a história de Katniss Everdeen, que mistura crítica social, política e sobrevivência em uma sociedade controlada pela Capital. Além da trilogia original, Collins expandiu o universo com livros como A Cantiga dos Pássaros e das Serpentes e Amanhecer na Colheita. Suas obras são conhecidas pela tensão psicológica, personagens marcantes e críticas à desigualdade social.",
    "link": "https://www.suzannecollinsbooks.com"
   
  },
   {
    "id": 2,
    "nome": "Rick Riordan ",
    "imagem": " public/imagem/rick.jpg",
    "resumo": "Rick Riordan é um escritor norte-americano famoso por transformar a mitologia grega em aventuras modernas cheias de humor e ação. Ex-professor de história, Riordan criou a série Percy Jackson e os Olimpianos para incentivar o filho a gostar de leitura. O sucesso foi enorme, levando à criação de diversos universos inspirados em mitologias diferentes, como romana, egípcia e nórdica. Entre suas obras mais conhecidas estão O Ladrão de Raios, A Maldição do Titã e Os Heróis do Olimpo. Seus livros conquistaram milhões de leitores jovens ao combinar aventura, fantasia e referências mitológicas de forma divertida.",
    "link": "https://rickriordan.com"
  },
     {
    "id": 3,
    "nome": "Holly Black ",
    "imagem": "public/imagem/holly.jpg  ",
    "resumo": " Holly Black é uma escritora norte-americana reconhecida principalmente por seus livros de fantasia envolvendo fadas, magia e intrigas políticas. Seu grande destaque é a série O Povo do Ar, que inclui títulos como O Príncipe Cruel e O Rei Perverso. Suas histórias costumam apresentar protagonistas inteligentes, romances intensos e disputas pelo poder em mundos sombrios e fascinantes. Holly Black também escreveu outras obras populares de fantasia urbana e juvenil, tornando-se uma das autoras mais influentes do gênero na atualidade.",
    "link": "https://www.wook.pt/autor/holly-black/22673?srsltid=AfmBOoriwoR5TzwYCbQ12DGtIMABbxBSXlbfYZS11ZUuE2RiKhg-fgJv"
   
  }

  
 ]
 export {autores as listaAutores}

 const destaques = [
   {
    "id": 3,
    "titulo": "Percy Jackson: O ladrão de raios",
    "autor": "Rick Riordan",
    "capa": "public/imagem/ladrao-de-raios.jpg",
    "link": "/percy"
  },
   {
    "id": 1,
    "titulo": "Jogos Vorazes",
    "autor": "Suzanne Collins",
    "capa": "public/imagem/capa-jogos_vorazes.jpg",
    "link": "/jogosvorazes"
  },
  {
    "id": 19,
    "titulo": "Pai rico Pai pobre ",
    "autor": " Kiyosaki Robert  ",
    "capa": "public/imagem/pairico.png",
    "link": "/pairico"
  },
  {
    "id": 2,
    "titulo": " A Rainha Vermelha",
    "autor": "Victoria Aveyard ",
    "capa": "public/imagem/a-rainha_vermelha.jpg",
    "link": "/rainhavermelha"
  },
  {
    "id": 10,
    "titulo": "O Manifesto Comunista",
    "autor": "Karl Max e Friedaich Engels",
    "capa": "public/imagem/manifesto.png",
    "link": "/manifesto"
  },

 ]

 export {destaques as listaDestaques}

 const pequenos = [
   {
    "id": 1,
     "nome": "Clarice Lispector",
    "resumo": "Clarice Lispector foi uma das escritoras mais importantes da literatura brasileira. Nascida na Ucrânia e criada no Brasil, ficou conhecida por sua escrita introspectiva, emocional e filosófica, explorando profundamente os sentimentos humanos e a existência. Suas obras marcaram a literatura moderna brasileira pela linguagem sensível e inovadora.",
    "imagem": "public/imagem/clarice.png",
    "link": "https://site.claricelispector.ims.com.br"
  },
   {
    "id": 2,
     "nome": "Raphael Montes",
    "resumo": "Raphael Montes é um escritor brasileiro conhecido principalmente por suas obras de suspense, terror e investigação criminal. Nascido no Rio de Janeiro, ganhou destaque ainda jovem ao lançar livros com histórias sombrias e cheias de reviravoltas psicológicas. Seu estilo mistura violência, mistério e crítica social, tornando-o um dos autores contemporâneos mais populares do gênero no Brasil.",
    "imagem": "public/imagem/raphael.webp",
    "link": "https://www.raphaelmontes.com.br"
  },
  {
    "id": 3,
     "nome": "Stephen King",
    "resumo": "Stephen King é um dos escritores de terror mais famosos do mundo. Nascido nos Estados Unidos, construiu uma carreira gigantesca escrevendo histórias de suspense, horror psicológico e fantasia sombria. Suas obras frequentemente exploram medo, traumas e o lado obscuro da mente humana. Muitos de seus livros foram adaptados para o cinema e televisão.",
    "imagem": "public/imagem/stephen.jpg",
    "link": "https://stephenking-com.translate.goog/the-author/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc"
  },
   {
    "id": 4,
     "nome": "George Orwell",
    "resumo": "George Orwell foi um escritor e jornalista britânico famoso por suas críticas políticas e sociais. Suas obras discutem autoritarismo, manipulação e desigualdade, tornando-se referências mundiais da literatura distópica. Orwell usava suas histórias para alertar sobre os perigos do controle excessivo do Estado e da perda da liberdade individual.",
    "imagem": "public/imagem/george.jpg",
    "link": "https://www.casadosaber.com.br/autores/george-orwell"
  },
   {
    "id": 5,
     "nome": "Veronica Roth",
    "resumo": "Veronica Roth é uma escritora norte-americana conhecida mundialmente pela série distópica Divergente. Ela começou a escrever ainda jovem e alcançou enorme sucesso com histórias voltadas ao público jovem adulto, misturando ação, romance e crítica social. Suas obras abordam identidade, escolhas e liberdade em sociedades controladas.",
    "imagem": "public/imagem/veronica.jpeg",
    "link": "https://veronicarothbooks.com" 
  },
  {
    "id": 5,
     "nome": "Victoria Aveyard",
    "resumo": "Victoria Aveyard é uma escritora norte-americana conhecida principalmente por suas obras de fantasia e distopia voltadas ao público jovem adulto. Ela ganhou fama mundial com a série A Rainha Vermelha, que mistura realeza, poderes sobrenaturais, desigualdade social e disputas políticas. Antes de se tornar escritora, estudou roteiro e cinema, o que influencia bastante seu estilo dinâmico e cheio de reviravoltas. Seus livros costumam explorar temas como poder, traição, revolução e identidade.",
    "imagem": "public/imagem/victoria.webp",
    "link": "https://videeditorial.com.br/index.php?route=product/author&author_id=7487"
  },
  

 ]

 export { produtos, pequenos as listaPequenos }

