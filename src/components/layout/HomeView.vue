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
.imgpeq {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 18px;
}

.pequenos,
.princi,
.lista-destaques {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  justify-content: center;
  gap: 24px;
}

.pequenos-autores,
.lista-autores,
.desta {
  border: 1px solid rgba(123, 81, 201, 0.16);
  padding: 20px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 22px 45px rgba(75, 47, 136, 0.08);
  text-align: center;
}

.frasedia {
  text-align: center;
  padding: 28px 20px;
  margin: 36px 0;
  border-radius: 24px;
  background: rgba(123, 81, 201, 0.08);
}

.fraseatual {
  color: #4b2f88;
  font-weight: 600;
  margin-top: 12px;
}

.nova {
  padding: 0;
}

.destaques {
  text-align: center;
  font-size: 1.55rem;
  padding-bottom: 12px;
  color: #4b2f88;
  font-weight: 700;
}

h2 {
  text-align: center;
  color: #3b1c75;
  font-size: 1.25rem;
  margin-top: 12px;
}

.lista-autores,
.pequenos-autores {
  width: auto;
}

img,
.capalivro {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 18px;
}

.link-paginas {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  margin-top: 0.75rem;
  background: rgba(123, 81, 201, 0.15);
  color: #5f3dc4;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.link-paginas:hover {
  background: rgba(123, 81, 201, 0.25);
  transform: translateY(-2px);
}

@media (max-width: 720px) {
  .lista-destaques {
    grid-template-columns: 1fr;
  }

  .pequenos,
  .princi {
    grid-template-columns: 1fr;
  }
}
</style>