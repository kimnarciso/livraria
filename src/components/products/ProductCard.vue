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
