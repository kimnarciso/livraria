<script setup>

// Este componente mostra um livro na tela de produtos.
// O botão chama addCarrinho(id), que adiciona o livro escolhido no carrinho.

import { formataPreco } from '@/utils/currencyUtils'
import { addCarrinho } from '@/utils/cartUtils'

const props = defineProps(['capa', 'titulo', 'resumo', 'preco', 'autor', 'id', 'detalhes'])
/* Este arquivo é um componente Vue que permite componentizar a exibição de um produto individual em uma lista de produtos. Ele exibe as informações do produto, como nome, preço e imagem, e pode incluir um botão para adicionar o produto ao carrinho de compras. O componente é projetado para ser reutilizado em diferentes partes do aplicativo onde a exibição de produtos é necessária, como na página de listagem de produtos ou em recomendações de produtos relacionados. Como sugestão, não exiba todas as informações do Livro, deixando alguma div oculta e trabalhando o v-for ou v-if para exibir somente o nome e o preço, e ao clicar em um botão "Detalhes" ou "Ver mais", exiba as informações adicionais do produto, como descrição, autor e imagem. Isso pode ser feito usando uma propriedade de estado para controlar a visibilidade das informações adicionais. */
import { ref } from 'vue';
import ButtonChild from './ButtonChild.vue';

defineEmits(['fechar'])
 // const mostrarDdetalhesProduto = ref(false);
const mostrarDetalhes = ref(false)

</script>

<template>
  <div class="produto-card">
    <img :src="capa" alt="Capa do livro" class="capa-livro" />

    <h2>{{ titulo }}</h2>
    <h3>{{ autor }}</h3>
    <p>{{ resumo }}</p>
    <p class="preco">{{ formataPreco(preco) }}</p>
    
     
      <ButtonChild  @clique="mostrarDetalhes = true">
      Ver detalhes
    </ButtonChild>
      <div class="modal-overlay" v-if="mostrarDetalhes" @clique="mostrarDetalhes = false" >
      <div  class="modal"  @click.stop>

     <p v-for="detalhe in props.detalhes.split(',')" :key="detalhe">
  {{ detalhe.trim() }}
</p>
        <ButtonChild @clique="mostrarDetalhes = false">
        Fechar
      </ButtonChild>
            </div>
        </div>
        <ButtonChild @clique="addCarrinho(props.id)">Adicionar ao carrinho</ButtonChild>
    </div>
        
   

    
 
</template>

<style scoped>
.produto-card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  width: 220px;
  background: white;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
}
.modal img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}

.capa-livro {
  width: 180px;
  height: 270px;
  object-fit: cover;
  border-radius: 8px;
}

.preco {
  font-weight: bold;
  color: #8a00db;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: #8a00db;
  color: white;
  cursor: pointer;
  font-weight: 600;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
}
.modal img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}

button:hover {
  background: #6d00ad;
}
</style>
