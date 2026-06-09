<script setup>
// Este arquivo é um componente Vue que representa a página inicial do aplicativo. Ele pode conter uma mensagem de boas-vindas, destaques dos produtos ou qualquer outra informação relevante para os visitantes que acessam o site pela primeira vez. O conteúdo específico da página inicial pode ser personalizado conforme as necessidades do projeto, mas geralmente serve como um ponto de entrada para os usuários explorarem o restante do site. Como sugestão, vocês poderão adicionar uma seção de "Destaques" ou "Novidades" para mostrar os produtos mais recentes ou populares, incentivando os visitantes a navegarem para a página  de produtos.

import {ref} from 'vue'
import { RouterLink } from 'vue-router';
import { listaAutores } from '@/data/products';
import { listaDestaques } from '@/data/products';
import { listaPequenos } from '@/data/products';
defineProps(['nome','id','resumo','imagem','link']);
const frases = [ //gente se vcs quiserem enfeitar pras frases aparecerem com um transition ia ser legal tbm (se vcs virem essa nota ne)
  // Jogos Vorazes
"Em um jogo injusto, sobreviver já é um ato de rebelião. - Jogos Vorazes",
"A Capital não teme armas, teme esperança. - Jogos Vorazes",
"Cada tributo carrega uma história que ninguém quer ouvir. - Jogos Vorazes",

// Em Chamas
"O fogo da revolução começa com uma única faísca. - Em Chamas",
"Nem toda vitória significa liberdade. - Em Chamas",
"Algumas batalhas são maiores que a arena. - Em Chamas",

// A Esperança
"A esperança é mais poderosa que o medo. - A Esperança",
"Uma revolução nasce quando alguém se recusa a se calar. - A Esperança",
"Até os símbolos carregam cicatrizes. - A Esperança",

// A Cantiga dos Pássaros e das Serpentes
"O poder é conquistado muito antes de ser exercido. - A Cantiga dos Pássaros e das Serpentes",
"Nem todo vilão começa como vilão. - A Cantiga dos Pássaros e das Serpentes",
"A ambição pode ser mais perigosa que a fome. - A Cantiga dos Pássaros e das Serpentes",

// Amanhecer na Colheita
"Alguns jogos são feitos para nunca serem vencidos. - Amanhecer na Colheita",
"O passado sempre encontra uma forma de retornar. - Amanhecer na Colheita",
"Sobreviver pode exigir mais do que coragem. - Amanhecer na Colheita",

// A Rainha Vermelha
"Sangue não define valor. - A Rainha Vermelha",
"Revoluções começam com uma única faísca. - A Rainha Vermelha",
"O poder muda as regras do jogo. - A Rainha Vermelha",

// Percy Jackson: O Ladrão de Raios
"Ser diferente pode ser seu maior poder. - Percy Jackson: O Ladrão de Raios",
"Até os deuses cometem erros. - Percy Jackson: O Ladrão de Raios",
"O destino nem sempre pede permissão. - Percy Jackson: O Ladrão de Raios",

// Percy Jackson: O Mar de Monstros
"Os maiores monstros nem sempre têm presas. - Percy Jackson: O Mar de Monstros",
"A amizade é uma arma poderosa. - Percy Jackson: O Mar de Monstros",
"Algumas jornadas valem qualquer risco. - Percy Jackson: O Mar de Monstros",

// Percy Jackson: A Maldição do Titã
"Profecias não podem ser ignoradas para sempre. - A Maldição do Titã",
"Heróis também precisam fazer sacrifícios. - A Maldição do Titã",
"A coragem nasce nos momentos mais difíceis. - A Maldição do Titã",

// O Príncipe Cruel
"No reino das fadas, confiança é uma fraqueza. - O Príncipe Cruel",
"Poder é a moeda mais valiosa. - O Príncipe Cruel",
"Sobreviver exige aprender as regras do jogo. - O Príncipe Cruel",

// O Rei Perverso
"Todo trono cobra um preço. - O Rei Perverso",
"A traição costuma usar rostos familiares. - O Rei Perverso",
"Governar é mais difícil do que conquistar. - O Rei Perverso",

// A Biblioteca da Meia-Noite
"Cada escolha cria uma nova possibilidade. - A Biblioteca da Meia-Noite",
"Nenhuma vida é perfeita vista de perto. - A Biblioteca da Meia-Noite",
"Viver vale mais do que imaginar. - A Biblioteca da Meia-Noite",

// O Vilarejo
"Os monstros mais assustadores vivem dentro das pessoas. - O Vilarejo",
"Todo pecado deixa marcas. - O Vilarejo",
"Nem todo mal precisa de explicação. - O Vilarejo",

// O Manifesto Comunista
"A história é movida por conflitos de classe. - O Manifesto Comunista",
"A mudança nasce da união. - O Manifesto Comunista",
"Ideias podem derrubar impérios. - O Manifesto Comunista",

// IT: A Coisa
"O medo ganha forma quando você o ignora. - IT: A Coisa",
"Coragem é enfrentar o que ninguém mais vê. - IT: A Coisa",
"Às vezes, esquecer é mais perigoso que lembrar. - IT: A Coisa",

// Divergente
"Uma escolha pode transformar tudo. - Divergente",
"Ser diferente não é uma fraqueza. - Divergente",
"O sistema teme quem pensa por conta própria. - Divergente",

// Insurgente
"A verdade pode ser mais perigosa que a mentira. - Insurgente",
"Segredos moldam destinos. - Insurgente",
"Nem toda guerra é travada com armas. - Insurgente",

// Convergente
"O mundo é maior do que imaginamos. - Convergente",
"Descobrir a verdade muda tudo. - Convergente",
"A liberdade exige coragem. - Convergente",

// A Hora da Estrela
"Algumas vidas passam despercebidas pelo mundo. - A Hora da Estrela",
"Existir também é uma forma de resistência. - A Hora da Estrela",
"Até o silêncio conta uma história. - A Hora da Estrela",

// A Revolução dos Bichos
"Todos são iguais, mas alguns são mais iguais que os outros. - A Revolução dos Bichos",
"O poder corrompe até as melhores intenções. - A Revolução dos Bichos",
"Promessas nem sempre sobrevivem ao poder. - A Revolução dos Bichos",

// Pai Rico Pai Pobre
"Dinheiro deve trabalhar para você. - Pai Rico Pai Pobre",
"Educação financeira é liberdade. - Pai Rico Pai Pobre",
"Conhecimento é um dos melhores investimentos. - Pai Rico Pai Pobre",

// Amor e Gelato
"Algumas viagens mudam mais do que o destino. - Amor e Gelato",
"O amor pode estar escondido nas pequenas descobertas. - Amor e Gelato",
"Às vezes é preciso se perder para se encontrar. - Amor e Gelato",

// Uma Mulher no Escuro
"O passado nunca permanece enterrado. - Uma Mulher no Escuro",
"Nem toda escuridão está do lado de fora. - Uma Mulher no Escuro",
"A verdade pode ser assustadora. - Uma Mulher no Escuro",

// Maze Runner: Correr ou Morrer
"O labirinto muda, mas a esperança permanece. - Maze Runner: Correr ou Morrer",
"Sobreviver é apenas o começo. - Maze Runner: Correr ou Morrer",
"Cada saída esconde um novo desafio. - Maze Runner: Correr ou Morrer",

// Maze Runner: Prova de Fogo
"O deserto é tão mortal quanto o labirinto. - Prova de Fogo",
"Nem toda cura salva. - Prova de Fogo",
"A verdade cobra um preço. - Prova de Fogo",

// Maze Runner: A Cura Mortal
"A liberdade exige sacrifícios. - A Cura Mortal",
"O fim da jornada é apenas o começo de outra. - A Cura Mortal",
"Algumas respostas chegam tarde demais. - A Cura Mortal",

// O Menino do Pijama Listrado
"A amizade não conhece fronteiras. - O Menino do Pijama Listrado",
"A inocência vê além das diferenças. - O Menino do Pijama Listrado",
"Algumas lições da história jamais devem ser esquecidas. - O Menino do Pijama Listrado",

// O Extraordinário
"Escolha ser gentil sempre que puder. - O Extraordinário",
"A verdadeira beleza não está na aparência. - O Extraordinário",
"Todo mundo enfrenta batalhas invisíveis. - O Extraordinário",

// Dom Casmurro
"Nem toda memória é confiável. - Dom Casmurro",
"O ciúme transforma certezas em dúvidas. - Dom Casmurro",
"Algumas perguntas nunca encontram resposta. - Dom Casmurro",

// Jantar Secreto
"Alguns segredos deveriam permanecer enterrados. - Jantar Secreto",
"A ambição pode custar mais do que se imagina. - Jantar Secreto",
"Nem todo jantar termina bem. - Jantar Secreto",

// Harry Potter e a Pedra Filosofal
"São nossas escolhas que mostram quem realmente somos. - Harry Potter e a Pedra Filosofal",
"A magia está onde existe coragem. - Harry Potter e a Pedra Filosofal",
"Grandes aventuras começam de forma inesperada. - Harry Potter e a Pedra Filosofal",

// Harry Potter e a Câmara Secreta
"Nem todo monstro vive nas sombras. - Harry Potter e a Câmara Secreta",
"Segredos podem permanecer escondidos por anos. - Harry Potter e a Câmara Secreta",
"A coragem abre portas que o medo mantém fechadas. - Harry Potter e a Câmara Secreta",

// Harry Potter e o Prisioneiro de Azkaban
"Nem tudo é o que parece. - Harry Potter e o Prisioneiro de Azkaban",
"O passado pode mudar o futuro. - Harry Potter e o Prisioneiro de Azkaban",
"A lealdade supera o medo. - Harry Potter e o Prisioneiro de Azkaban",

// Harry Potter e o Cálice de Fogo
"Grandes desafios revelam grandes pessoas. - Harry Potter e o Cálice de Fogo",
"A coragem é colocada à prova quando mais precisamos dela. - Harry Potter e o Cálice de Fogo",
"Nem todo torneio termina com um vencedor. - Harry Potter e o Cálice de Fogo",

// Harry Potter e a Ordem da Fênix
"A verdade nem sempre é bem-vinda. - Harry Potter e a Ordem da Fênix",
"Unidos somos mais fortes. - Harry Potter e a Ordem da Fênix",
"O silêncio pode ser uma arma. - Harry Potter e a Ordem da Fênix",

// Harry Potter e o Enigma do Príncipe
"Conhecimento é poder, mas também responsabilidade. - Harry Potter e o Enigma do Príncipe",
"Até os maiores heróis carregam dúvidas. - Harry Potter e o Enigma do Príncipe",
"Nem todos os mistérios devem permanecer ocultos. - Harry Potter e o Enigma do Príncipe",

// Harry Potter e as Relíquias da Morte
"O amor deixa marcas que a morte não apaga. - Harry Potter e as Relíquias da Morte",
"Algumas batalhas definem gerações. - Harry Potter e as Relíquias da Morte",
"O verdadeiro poder está nos laços que criamos. - Harry Potter e as Relíquias da Morte",

// O Acordo
"Às vezes os melhores relacionamentos começam por acaso. - O Acordo",
"Nem todo acordo segue o plano. - O Acordo",
"O amor surge onde menos se espera. - O Acordo",

// O Erro
"Todo mundo merece uma segunda chance. - O Erro",
"Erros também podem ensinar. - O Erro",
"O coração raramente segue a lógica. - O Erro",

// O Jogo
"Algumas partidas não têm regras. - O Jogo",
"Nem toda vitória acontece em campo. - O Jogo",
"O amor pode ser o maior desafio. - O Jogo",

// O Legado
"O passado ajuda a construir o futuro. - O Legado",
"Algumas histórias nunca terminam de verdade. - O Legado",
"Crescer também faz parte da jornada. - O Legado",

// A Conquista
"Nem toda rivalidade termina em conflito. - A Conquista",
"Grandes histórias começam de formas improváveis. - A Conquista",
"Às vezes o amor surpreende. - A Conquista",

// Vermelho, Branco e Sangue Azul
"Entre o dever e o coração existem escolhas difíceis. - Vermelho, Branco e Sangue Azul",
"O amor pode atravessar oceanos e fronteiras. - Vermelho, Branco e Sangue Azul",
"Algumas histórias mudam o mundo. - Vermelho, Branco e Sangue Azul",

// Os Sete Maridos de Evelyn Hugo
"A fama tem um preço. - Os Sete Maridos de Evelyn Hugo",
"Nem toda história é contada por completo. - Os Sete Maridos de Evelyn Hugo",
"O amor verdadeiro nem sempre é o mais óbvio. - Os Sete Maridos de Evelyn Hugo"
]

const fraseAtual = ref(
  frases[Math.floor(Math.random() * frases.length)]
)
</script>

<template>
   <div>
      <h1>
         Seja bem vindo!
      </h1>
   </div>
   <h2>
      Nossos principais autores
   </h2>

  <div class="princi">

         <div class="lista-autores" v-for="autor in listaAutores" :key="autor.id">
      <img :src="autor.imagem" alt="">
      <h2>
         {{ autor.nome }}
      </h2>
       <p>
         Sobre o autor:
       </p>
       <p class="resumo-autor">
         {{ autor.resumo }}
       </p>

       <a class="link-paginas" :href="autor.link" target="_blank">
         Saiba mais
         </a>
   </div>

   </div>
   <section class="nova">
      <div class="destaques">
         Destaques dessa semana
      </div>

      <div class="lista-destaques">
         
         <div class="desta" v-for="destaque in listaDestaques" :key="destaque.id">
      <img class="capalivro" :src="destaque.capa" alt="">
      <h2>
         {{ destaque.titulo }}
      </h2>
       
       <p class="destaque-autor">
         {{ destaque.autor }}
       </p>

       <RouterLink to="/produtos">
       <button>Visualizar livro</button>
        </RouterLink>

      </div>
   </div>
   </section>

   <div class="frasedia">
      <p>
         Frase literária do dia(ou momento)
      </p>
      <p class="fraseatual">
      {{ fraseAtual }}
      </p>
   </div>

   <section class="ble">
      <div class="peqat">
         Outros autores famosos que talvez você queira conhecer
      </div>

      <div class="pequenos" >
         <div class="pequenos-autores" v-for="pequeno in listaPequenos"  :key="pequeno.id">
            <img clas="imgpeq" :src="pequeno.imagem" alt="">
      <h2>
         {{ pequeno.nome }}
      </h2>
       <p>
         Sobre o autor:
       </p>
       <p class="resumo-autor">
         {{ pequeno.resumo }}
       </p>

       <a class="link-paginas" :href="pequeno.link" target="_blank">
         Saiba mais
         </a>
         </div>
      </div>
   </section>
   

</template>

<style scoped>
   .imgpeq{
      width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 8px;
   }
   
   .pequenos{
       display: grid;
  grid-template-columns:  repeat(auto-fit, minmax( 220px, 330px));
  justify-content: center;
  gap: 24px;
   }
   .pequenos-autores{
      border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  width: 280px;
  text-align: center;
  background: white;
   }
   .frasedia{
      text-align: center;
   }
   .nova{
      padding: 2vw;
   }
   .destaques{
      text-align: center;
      font-size: 1.6rem;
      padding: 1vw;
   }
   .lista-destaques{
      padding: 3vw;
      display: grid;
     grid-template-columns: repeat(5, 1fr);
     gap: 20px;
   }
   h2{
      text-align: center;
   }
.princi{
 
  display: grid;
  grid-template-columns:  repeat(auto-fit, minmax(220px, 330px));
  justify-content: center;
  gap: 24px;
}
.lista-autores{
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  width: 280px;
  text-align: center;
  background: white;
  
}

img{
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}
.capalivro{
   width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}
h2{
  font-size: 20px;
  margin-top: 10px;
}


</style>