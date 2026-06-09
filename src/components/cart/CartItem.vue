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
  grid-template-columns: 90px 1fr auto auto auto;
  gap: 1.25rem;
  align-items: center;
  border: 2px solid rgba(123, 81, 201, 0.2);
  border-radius: 16px;
  padding: 1.25rem;
  background: white;
  box-shadow: 0 4px 12px rgba(95, 61, 196, 0.08);
}

img {
  width: 90px;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.info h3 {
  color: #3b1c75;
  margin: 0;
  font-size: 1rem;
}

.info p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

.info p:last-child {
  color: #3b1a76;
  font-weight: 600;
}

.quantidade {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: 2px solid rgba(123, 81, 201, 0.2);
  border-radius: 999px;
  padding: 0.25rem;
  background: rgba(123, 81, 201, 0.05);
}

.quantidade button {
  border: none;
  border-radius: 999px;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  background: #7b51c9;
  color: white;
  font-weight: 600;
  transition: all 0.2s ease;
}

.quantidade button:hover {
  background: #5f3dc4;
  transform: scale(1.1);
}

.quantidade span {
  min-width: 30px;
  text-align: center;
  font-weight: 600;
  color: #3b1a76;
}

.remover {
  border: none;
  border-radius: 999px;
  padding: 0.6rem 1rem;
  cursor: pointer;
  background: linear-gradient(135deg, #ff6b6b, #ff4d4d);
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;
}

.remover:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(255, 77, 77, 0.3);
}

.subtotal {
  font-weight: 700;
  color: #3b1a76;
  font-size: 1.05rem;
}

@media (max-width: 900px) {
  .cart-item {
    grid-template-columns: 80px 1fr 80px;
    gap: 1rem;
  }

  .quantidade {
    order: 4;
    grid-column: 3;
  }

  .subtotal {
    order: 5;
    grid-column: 3;
  }

  .remover {
    order: 6;
    grid-column: 3;
  }
}

@media (max-width: 600px) {
  .cart-item {
    grid-template-columns: 80px 1fr;
    gap: 0.75rem;
  }

  .quantidade,
  .subtotal,
  .remover {
    grid-column: 1 / -1;
    order: unset;
  }
}
</style>
