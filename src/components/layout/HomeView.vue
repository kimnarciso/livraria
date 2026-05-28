<script setup>
// Este arquivo é um componente Vue que representa a página inicial do aplicativo. Ele pode conter uma mensagem de boas-vindas, destaques dos produtos ou qualquer outra informação relevante para os visitantes que acessam o site pela primeira vez. O conteúdo específico da página inicial pode ser personalizado conforme as necessidades do projeto, mas geralmente serve como um ponto de entrada para os usuários explorarem o restante do site. Como sugestão, vocês poderão adicionar uma seção de "Destaques" ou "Novidades" para mostrar os produtos mais recentes ou populares, incentivando os visitantes a navegarem para a página  de produtos.

import {ref} from 'vue'
import { RouterLink } from 'vue-router';
import { listaAutores } from '@/data/products';
import { listaDestaques } from '@/data/products';
import { listaPequenos } from '@/data/products';
defineProps(['nome','id','resumo','imagem','link']);
const frases = [ //gente se vcs quiserem enfeitar pras frases aparecerem com um transition ia ser legal tbm (se vcs virem essa nota ne)
  "Em um jogo injusto, sobreviver já é um ato de rebelião. - Jogos Vorazes",
"A Capital não teme armas, teme esperança.- Jogos Vorazes",
"Cada tributo carrega uma história que ninguém quer ouvir.- Jogos Vorazes",
"O medo é o primeiro passo para o controle.- Jogos Vorazes",
"Quando o fogo começa, ele não pode ser apagado.- Jogos Vorazes",

 "A história é movida por conflitos de classe - O manifesto comunista",
"Quem trabalha constrói o mundo, mas nem sempre o possui. -O manifesto comunista",
"A mudança nasce da união.- O manifesto comunista",
"Sistemas injustos sempre encontram resistência.- O manifesto comunista",
"Ideias podem derrubar impérios.- O manifesto comunista",

"O medo ganha forma quando você o ignora.- IT: A coisa",
"O mal pode morar onde menos se espera.- IT: A coisa",
"A infância guarda traumas que nunca desaparecem.- IT: A coisa",
"Coragem é enfrentar o que ninguém mais vê.- IT: A coisa",
"Às vezes, esquecer é mais perigoso que lembrar.- IT: A coisa",
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