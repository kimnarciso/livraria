<script setup>
// Este componente representa um único item dentro do carrinho.
// Ele recebe o item por props e emite as ações para o CartPanel executar.

import { formataPreco } from '@/utils/currencyUtils'

defineProps(['item'])

defineEmits(['aumentar', 'diminuir', 'remover'])
</script>

<template>
  <div class="cart-item">
    <img :src="item.capa" alt="Capa do livro" />

    <div class="info">
      <h3>{{ item.titulo }}</h3>
      <p>{{ item.autor }}</p>
      <p>{{ formataPreco(item.preco) }}</p>
    </div>

    <div class="quantidade">
      <button @click="$emit('diminuir', item.id)">-</button>
      <span>{{ item.quantidade }}</span>
      <button @click="$emit('aumentar', item.id)">+</button>
    </div>

    <p class="subtotal">
      {{ formataPreco(item.preco * item.quantidade) }}
    </p>

    <button class="remover" @click="$emit('remover', item.id)">Remover</button>
  </div>
</template>

<style scoped>
.cart-item {
  display: grid;
  grid-template-columns: 80px 1fr auto auto auto;
  gap: 16px;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 12px;
  background: white;
}

img {
  width: 70px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
}

.info h3,
.info p {
  margin: 4px 0;
}

.quantidade {
  display: flex;
  align-items: center;
  gap: 8px;
}

.quantidade button,
.remover {
  border: none;
  border-radius: 6px;
  padding: 8px 10px;
  cursor: pointer;
}

.quantidade button {
  background: #8a00db;
  color: white;
}

.remover {
  background: #ff4d4d;
  color: white;
}

.subtotal {
  font-weight: bold;
}

@media (max-width: 700px) {
  .cart-item {
    grid-template-columns: 80px 1fr;
  }
}
</style>
