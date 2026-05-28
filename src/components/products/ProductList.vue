<script setup>
// Este arquivo é um componente Vue que permitirá listar os livros disponíveis para compra. Ele exibirá uma grade de produtos, onde cada produto será representado por um componente ProductCard.vue. O componente ProductList.vue será responsável por buscar os dados dos livros (que estão armazenados em um arquivo JS local - /src/data/products.js). Ele usará um loop para renderizar um ProductCard para cada livro na lista, passando as informações do livro como props para o componente ProductCard. O ProductList.vue é projetado para ser usado na página de listagem de produtos, onde os usuários podem navegar pelos livros disponíveis e clicar em um produto para ver mais detalhes ou adicioná-lo ao carrinho de compras.
import {ref} from 'vue'
import ProductCard from './ProductCard.vue';
import { listaProdutos } from '@/data/products';
import { computed } from 'vue'
const produtos = ref(listaProdutos);
const filtro = ref('')
const filtroAutor = ref('') //AAAAAAAAA

const autoresFiltrados = computed(() => { 
  if (filtroAutor.value.trim().length > 0) {

    return produtosExibidos.value.filter(item => 
      item.autor.toLowerCase().includes(filtroAutor.value.toLowerCase())
    )
  } else {
    return produtosExibidos.value
  }
})
function autorNaoEncontrado (){
  if (filtroAutor.value.trim().length > 0 && autoresFiltrados.value.length ==0){
     return "Ops! Parece que ainda não temos esse autor😢 " 
  }
 
}
const autoresExibidos = computed(() => {
  if (filtroAutor.value.trim().length > 0) {
    return autoresFiltrados.value
  }

  return produtos.value
})


const produtosFiltrados = computed(() => { 
  if (filtro.value.trim().length > 0) {
  return  produtos.value.filter(item => 
   item.titulo.toLowerCase().includes(filtro.value.toLowerCase()))
  }
  else {
    return [];
  }
})
function produtoNaoEncontrado (){
  if (filtro.value.trim().length > 0 && produtosFiltrados.value.length ==0){
     return "Ops! Parece que ainda não temos esse livro 😢 " 
  }
 
}
const produtosExibidos = computed(() => {
  if (filtro.value.trim().length > 0) {
    return produtosFiltrados.value
  }

  return produtos.value
})
</script>

<template>
  <p class="aventura">
    Descubra a sua próxima aventura!
  </p>
  <p>
    Aqui temos livros para várias idades,gostos,tudo em <br>
    um só lugar
  </p>

<div class="barras">

 <div class="barra-pesquisa">
      <input type="text" placeholder="Pesquisar Livros" v-model="filtro" />
       
    </div>
    <p class="mensagem">
      {{ produtoNaoEncontrado() }}
    </p>
    
     <div class="pesquisa-autor">
      <input type="text" placeholder="Pesquisar autores" v-model="filtroAutor" />
    </div>

    <p class="mensagem">
      {{ autorNaoEncontrado() }}
    </p>
 
    </div>
  
 <div class="produto-lista" >
          <ProductCard v-for="produto in autoresFiltrados" :key="produto.id"
        class="produto-card" :id="produto.id"
        :titulo="produto.titulo" :preco="produto.preco"
        :capa="produto.capa" :resumo="produto.resumo" :autor="produto.autor">
</ProductCard>
</div>
  
</template>

<style scoped>
  .barras{
    display: flex;
    gap: 16px;
    justify-content: center;
  }
 
.produto-lista{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
}
  .produto-lista{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  }
  .aventura{
    font-size: 2rem;
    
  }
  .pesquisa-autor{
    display: flex;
  justify-content: center;
  align-items: center;
  }
  .barra-pesquisa{
     display: flex;
  justify-content: center;
  align-items: center;
  }
  .mensagem{
    text-align: center; 
  }
</style>