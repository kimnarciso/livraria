<script setup>
// Este arquivo é um componente Vue que permitirá listar os livros disponíveis para compra. Ele exibirá uma grade de produtos, onde cada produto será representado por um componente ProductCard.vue. O componente ProductList.vue será responsável por buscar os dados dos livros (que estão armazenados em um arquivo JS local - /src/data/products.js). Ele usará um loop para renderizar um ProductCard para cada livro na lista, passando as informações do livro como props para o componente ProductCard. O ProductList.vue é projetado para ser usado na página de listagem de produtos, onde os usuários podem navegar pelos livros disponíveis e clicar em um produto para ver mais detalhes ou adicioná-lo ao carrinho de compras.
import {ref} from 'vue'
import ProductCard from './ProductCard.vue';
import { listaProdutos } from '@/data/products';
import { computed } from 'vue'
const produtos = ref(listaProdutos);
const filtro = ref('')
const filtroAutor = ref('') //AAAAAAAAA
const categorias = ref('')

/*
const categoriaFiltradas = computed(() => { 
  if (categorias.value.trim().length > 0) {

    return produtosExibidos.value.filter(item => 
      item.categorias.toLowerCase().includes(categorias.value.toLowerCase())
    )
  } else {
    return produtosExibidos.value
  }
})*/

const autoresFiltrados = computed(() => { 
  if (filtroAutor.value.trim().length > 0) {

    return produtosExibidos.value.filter(item => 
      item.autor.toLowerCase().includes(filtroAutor.value.toLowerCase())
    )
  }
    else if (categorias.value.trim().length > 0){
         return produtosExibidos.value.filter(item => 
      item.categoria.toLowerCase().includes(categorias.value.toLowerCase())
    )
    }
     else {
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
  
     <div class="caixa">
      <select name="catgoria" id="" v-model="categorias">
        <option disabled selected value="">Procurar por categoria</option>
        <option value="AutoAjuda">AutoAjuda</option>
         <option value="Aventura">Aventura</option>
      <option value="Clássicos">Clássicos</option>
      <option value="Distopia">Distopia</option>
      <option value="Fantasia">Fantasia</option>
      <option value="Ficção Científica">Ficção Científica</option>
      <option value="História">História</option>
      <option value="Romance">Romance</option>
      <option value="Suspense/Terror">Suspense/Terror</option>
      </select>
     
    </div>

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
        :titulo="produto.titulo" :preco="produto.preco" :categoria="produto.categoria"
        :capa="produto.capa" :resumo="produto.resumo" :autor="produto.autor" :detalhes="produto.detalhes"
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