<script setup>
// Este componente mostra um livro na tela de produtos.
// O botão chama addCarrinho(id), que adiciona o livro escolhido no carrinho.

import { formataPreco } from '@/utils/currencyUtils'
import { addCarrinho } from '@/utils/cartUtils'

const props = defineProps(['capa', 'titulo', 'resumo', 'preco', 'autor', 'id'])
</script>

<template>
  <div class="produto-card">
    <img :src="capa" alt="Capa do livro" class="capa-livro" />

    <h2>{{ titulo }}</h2>
    <h3>{{ autor }}</h3>
    <p>{{ resumo }}</p>
    <p class="preco">{{ formataPreco(preco) }}</p>

    <button @click="addCarrinho(props.id)">Adicionar ao carrinho</button>
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

button:hover {
  background: #6d00ad;
}
</style>
