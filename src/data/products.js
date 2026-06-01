const produtos = [
  {
    "id": 1,
    "titulo": "Jogos Vorazes",
    "autor": "Suzanne Collins",
    "resumo": "Em uma sociedade cruel, Katniss precisa lutar pela própria vida em um jogo mortal.",
    "preco": 75.90,
    "capa": "public/imagem/capa-jogos_vorazes.jpg",
    "categoria": "Distopia",
    "detalhes": "Editora: Rocco Jovens Leitores, Data da publicação : 15 fevereiro 2012, Número de páginas  :  400 páginas, Idade de leitura  : Idade sugerida pelo cliente: 14 anos e acima"
  },
  {
    "id": 2,
    "titulo": " A Rainha Vermelha",
    "autor": "Victoria Aveyard ",
    "resumo": " Em um reino dividido pelo sangue, uma garota comum descobre um poder capaz de mudar tudo.",
    "preco": 54.99,
    "capa": "public/imagem/a-rainha_vermelha.jpg",
    "categoria": "Fantasia",
    "detalhes": "Editora: Seguinte, Data da publicação : 9 junho 2015, Número de páginas  :  424 páginas, Idade de leitura  : Idade sugerida pelo cliente: 14 anos e acima"
  },
  {
    "id": 3,
    "titulo": "Percy Jackson: O ladrão de raios",
    "autor": "Rick Riordan",
    "resumo": "Um jovem semideus descobre seu destino em uma missão cheia de perigos mitológicos",
    "preco": 43.98,
    "capa": "public/imagem/ladrao-de-raios.jpg",
    "categoria": "Aventura",
    "detalhes": "Editora:  Intrínseca, Data da publicação : 3 janeiro 2011, Número de páginas  : 400 páginas, Idade de leitura  : Idade sugerida pelo cliente: 12 anos e acima"
  },
  {
    "id": 4,
    "titulo": "O príncipe cruel",
    "autor": "Holly Black",
    "resumo": "Em meio às intrigas do reino das fadas, Jude luta por poder e sobrevivência",
    "preco": 55.95,
    "capa": "public/imagem/principe-cruel.jpg",
    "categoria": "Romance",
    "detalhes": "Editora:  Galera, Data da publicação : 10 setembro 2018, Número de páginas  : 322  páginas, Idade de leitura  : 16 anos e acima"
  },
  {
    "id": 5,
    "titulo": "Percy Jackson: O mar de monstros",
    "autor": "Rick Riordan",
    "resumo": "Percy embarca em uma aventura épica para salvar o Acampamento Meio-Sangue.",
    "preco": 40.99,
    "capa": "public/imagem/o-mar-de-monstros.jpg",
    "categoria": "Aventura",
    "detalhes": "Editora:  Intrínseca, Data da publicação : 17 abril 2009, Número de páginas  : 304  páginas, Idade de leitura  : Idade sugerida pelo cliente: 12 anos e acima"
  },
  {
    "id": 6,
    "titulo": "Em chamas",
    "autor": "Suzanne Collins",
    "resumo": " Katniss volta à arena em uma disputa ainda mais perigosa e cheia de revolta.",
    "preco": 20.99,
    "capa": "public/imagem/em _chamas.jpg",
    "categoria": "Distopia",
    "detalhes": "Editora:  Rocco Jovens Leitores, Data da publicação : 15 fevereiro 2012, Número de páginas  : 416 páginas, Idade de leitura  : Idade sugerida pelo cliente: 14 anos e acima"
  },
  {
    "id": 7,
    "titulo": "A biblioteca da meia noite",
    "autor": "Matt Haig",
    "resumo": "Entre vidas alternativas e escolhas do passado, Nora descobre o verdadeiro valor de viver",
    "preco": 70.54,
    "capa": "public/imagem/biblioteca_da_meia-noite.jpg",
    "categoria": "Fantasia",
    "detalhes": "Editora:  Bertrand Brasil, Data da publicação : 27 setembro 2021, Número de páginas  : 308 páginas, Idade de leitura  : Idade sugerida pelo cliente: 14 anos e acima"
  },
  {
    "id": 8,
    "titulo": "O vilarejo",
    "autor": "Raphael Monte",
    "resumo": "Sete histórias sombrias revelam os pecados escondidos em um misterioso vilarejo.",
    "preco": 80.99,
    "capa": "public/imagem/o-vilarejo.jpg",
    "categoria": "Suspense/Terror",
    "detalhes": "Editora:  Suma, Data da publicação : 14 agosto 2015, Número de páginas  : 96 páginas, Idade de leitura  : Idade sugerida pelo cliente: 18 anos e acima"
  },
    {
    "id": 9,
    "titulo": "A esperança",
    "autor": "Suzanne Collins",
    "resumo": "Katniss lidera a revolução final contra o regime opressor de Panem.",
    "preco": 21.90,
    "capa": "public/imagem/esperanca.png",
    "categoria": "Distopia",
    "detalhes": "Editora: Rocco Jovens Leitores, Data da publicação : 15 fevereiro 2012, Número de páginas  : 424 páginas, Idade de leitura  : Idade sugerida pelo cliente: 14 anos e acima"
  },
    {
    "id": 10,
    "titulo": "O Manifesto Comunista",
    "autor": "Karl Max e Friedaich Engels",
    "resumo": "Obra política que defende a luta de classes e a união dos trabalhadores contra o capitalismo.",
    "preco": 0.00,
    "capa": "public/imagem/manifesto.png",
    "categoria": "História",
    "detalhes": "Editora: Paz & Terra, Data da publicação : 22 novembro 2021, Número de páginas  : 80 páginas, Idade de leitura  : Idade sugerida pelo cliente: 14 anos e acima"
  },
    {
    "id": 11,
    "titulo": "A cantiga dos pássaros e das serpentes",
    "autor": "Suzanne Collins",
    "resumo": "O jovem Coriolanus Snow tenta conquistar poder ao orientar uma tributo nos primeiros Jogos Vorazes.",
    "preco": 65.90,
    "capa": "public/imagem/cantiga.png",
    "categoria": "Distopia",
    "detalhes": "Editora: Rocco Jovens Leitores, Data da publicação : 15 junho 2020, Número de páginas  : 575 páginas, Idade de leitura  : 14 anos e acima"
  },
    {
    "id": 12,
    "titulo": "Amanhecer na colheita",
    "autor": "Suzanne Collins",
    "resumo": "Durante uma edição especial dos Jogos Vorazes, jovens precisam lutar pela sobrevivência em meio à opressão da Capital.",
    "preco": 70.90,
    "capa": "public/imagem/amanhecer.png",
    "categoria": "Distopia",
    "detalhes": "Editora: Rocco Jovens Leitores, Data da publicação : 18 março 2025, Número de páginas  : 452 páginas, Idade de leitura  : 14 anos e acima"
  },
    {
    "id": 13,
    "titulo": "O rei perverso",
    "autor": "Holly Black",
    "resumo": "Jude precisa enfrentar traições e disputas políticas no reino das fadas para manter seu poder e sobreviver.",
    "preco": 42.76,
    "capa": "public/imagem/rei_perverso.png",
    "categoria": "Romance",
    "detalhes": "Editora: Galera, Data da publicação : 18 maio 2020, Número de páginas  : 352 páginas, Idade de leitura  : 14 anos e acima"
  },
    {
    "id": 14,
    "titulo": "IT a coisa",
    "autor": "Stephen King",
    "resumo": "Um grupo de amigos enfrenta uma entidade monstruosa que assume a forma dos maiores medos das pessoas na cidade de Derry.",
    "preco": 106.90,
    "capa": "public/imagem/itacoisa.png",
    "categoria": "Suspense/Terror",
    "detalhes": "Editora: Suma, Data da publicação : 4 agosto 2014, Número de páginas  : 1645 páginas, Idade de leitura  : 17 anos e acima"
  },
    {
    "id": 15,
    "titulo": "Divergente",
    "autor": " Veronica Roth ",
    "resumo": "Em uma sociedade dividida por facções, Tris descobre que é divergente e ameaça o sistema criado para controlar a população.",
    "preco": 37.90,
    "capa": "public/imagem/divergente.png",
    "categoria": "Ficção Científica",
    "detalhes": "Editora: MOLINO, Data da publicação : 13 junho 2013, Número de páginas  : 388 páginas, Idade de leitura  : 14 anos e acima"
  },
   {
    "id": 16,
    "titulo": "A hora da estrela",
    "autor": " Clarice Lispector ",
    "resumo": "A história acompanha Macabéa, uma jovem nordestina simples e invisível que tenta sobreviver no Rio de Janeiro.",
    "preco": 32.90,
    "capa": "public/imagem/horaestrela.png",
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
    "capa": "public/imagem/maldicao.png",
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
    "capa": "public/imagem/bichos.png",
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
    "capa": "public/imagem/pairico.png",
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
    "capa": "public/imagem/gelato.png",
    "categoria": "Romance",
    "detalhes": "Editora: Intrínseca, Data da publicação : 21 julho 2017, Número de páginas  : 320 páginas, Idade de leitura  : 12 anos e acima" 
  }
  ,
  {
    "id": 21,
    "titulo": "Uma mulher no escuro",
    "autor": "Raphael Monte",
    "resumo": "Uma jovem enfrenta mistérios e perigos enquanto tenta sobreviver em meio à escuridão e ao desconhecido.",
    "preco": 57.63,
    "capa": "public/imagem/uma-mulher-no-escuro.jpg",
    "categoria": "Suspense/Terror"
  }
 ,
 {
  "id": 22,
    "titulo": "Maze Runner: Correr ou Morrer",
    "autor": "James Dashner",
    "resumo": "Preso em um labirinto mortal, Thomas precisa encontrar uma saída antes que seja tarde demais.",
    "preco": 32.14,
    "capa": "public/imagem/maze-runner.jpg",
    "categoria": "Distopia"
 }
 ,
 {
  "id": 23,
    "titulo": "O menino do pijama listrado",
    "autor": "John Boyne",
    "resumo": "Uma emocionante história de amizade e inocência durante um dos períodos mais sombrios da história.",
    "preco": 42.00,
    "capa": "public/imagem/o-menino-do-pijama-listrado.jpg",
    "categoria": "Drama"
 }
  ,
 {
  "id": 24,
    "titulo": "O extraordinário",
    "autor": "R. J. Palacio",
    "resumo": "A história de Auggie Pullman, um garoto com uma condição facial rara que enfrenta os desafios de frequentar a escola pela primeira vez.",
    "preco": 38.41,
    "capa": "public/imagem/extraordinario.jpg",
    "categoria": "Drama"
 }
]

export { produtos as listaProdutos }

 const autores = [
      {
    "id": 1,
    "nome": "Suzzane Collins ",
    "imagem": "  public/imagem/suzanne.png ",
    "resumo": " Suzanne Collins é uma escritora norte-americana conhecida mundialmente pela série Jogos Vorazes, uma das distopias mais populares da literatura jovem. Antes de se tornar romancista, trabalhou escrevendo roteiros para programas infantis de televisão. Seu maior sucesso veio com a história de Katniss Everdeen, que mistura crítica social, política e sobrevivência em uma sociedade controlada pela Capital. Além da trilogia original, Collins expandiu o universo com livros como A Cantiga dos Pássaros e das Serpentes e Amanhecer na Colheita. Suas obras são conhecidas pela tensão psicológica, personagens marcantes e críticas à desigualdade social.",
    "link": "https://www.suzannecollinsbooks.com"
   
  },
   {
    "id": 2,
    "nome": "Rick Riordan ",
    "imagem": " public/imagem/riordan.png ",
    "resumo": "Rick Riordan é um escritor norte-americano famoso por transformar a mitologia grega em aventuras modernas cheias de humor e ação. Ex-professor de história, Riordan criou a série Percy Jackson e os Olimpianos para incentivar o filho a gostar de leitura. O sucesso foi enorme, levando à criação de diversos universos inspirados em mitologias diferentes, como romana, egípcia e nórdica. Entre suas obras mais conhecidas estão O Ladrão de Raios, A Maldição do Titã e Os Heróis do Olimpo. Seus livros conquistaram milhões de leitores jovens ao combinar aventura, fantasia e referências mitológicas de forma divertida.",
    "link": "https://rickriordan.com"
  },
     {
    "id": 3,
    "nome": "Holly Black ",
    "imagem": "public/imagem/holly.png  ",
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
    "imagem": "public/imagem/montes.png",
    "link": "https://www.raphaelmontes.com.br"
  },
  {
    "id": 3,
     "nome": "Stephen King",
    "resumo": "Stephen King é um dos escritores de terror mais famosos do mundo. Nascido nos Estados Unidos, construiu uma carreira gigantesca escrevendo histórias de suspense, horror psicológico e fantasia sombria. Suas obras frequentemente exploram medo, traumas e o lado obscuro da mente humana. Muitos de seus livros foram adaptados para o cinema e televisão.",
    "imagem": "public/imagem/king.png",
    "link": "https://stephenking-com.translate.goog/the-author/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc"
  },
   {
    "id": 4,
     "nome": "George Orwell",
    "resumo": "George Orwell foi um escritor e jornalista britânico famoso por suas críticas políticas e sociais. Suas obras discutem autoritarismo, manipulação e desigualdade, tornando-se referências mundiais da literatura distópica. Orwell usava suas histórias para alertar sobre os perigos do controle excessivo do Estado e da perda da liberdade individual.",
    "imagem": "public/imagem/george.png",
    "link": "https://www.casadosaber.com.br/autores/george-orwell"
  },
   {
    "id": 5,
     "nome": "Veronica Roth",
    "resumo": "Veronica Roth é uma escritora norte-americana conhecida mundialmente pela série distópica Divergente. Ela começou a escrever ainda jovem e alcançou enorme sucesso com histórias voltadas ao público jovem adulto, misturando ação, romance e crítica social. Suas obras abordam identidade, escolhas e liberdade em sociedades controladas.",
    "imagem": "public/imagem/roth.png",
    "link": "https://veronicarothbooks.com" 
  },
  {
    "id": 5,
     "nome": "Victoria Averyard",
    "resumo": "Victoria Aveyard é uma escritora norte-americana conhecida principalmente por suas obras de fantasia e distopia voltadas ao público jovem adulto. Ela ganhou fama mundial com a série A Rainha Vermelha, que mistura realeza, poderes sobrenaturais, desigualdade social e disputas políticas. Antes de se tornar escritora, estudou roteiro e cinema, o que influencia bastante seu estilo dinâmico e cheio de reviravoltas. Seus livros costumam explorar temas como poder, traição, revolução e identidade.",
    "imagem": "public/imagem/vic.png",
    "link": "https://videeditorial.com.br/index.php?route=product/author&author_id=7487"
  },
  

 ]

 export { produtos, pequenos as listaPequenos }

