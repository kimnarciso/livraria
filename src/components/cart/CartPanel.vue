<script setup>
// Esta é a página do carrinho.
// Ela mostra os itens adicionados, permite mudar quantidade, remover, limpar e ver o total.

import { RouterLink } from 'vue-router'
import CartItem from './CartItem.vue'
import CartSummary from './CartSummary.vue'
import {
  carrinho,
  aumentarQuantidade,
  diminuirQuantidade,
  removerDoCarrinho,
  limparCarrinho,
  quantidadeTotal,
  valorTotal,
} from '@/utils/cartUtils'
</script>

<template>
  <section class="carrinho-pagina">
    <h1>Meu carrinho</h1>

    <div v-if="carrinho.length === 0" class="carrinho-vazio">
      <p>Seu carrinho está vazio.</p>
      <RouterLink to="/produtos">
        <button>Ver livros</button>
      </RouterLink>
    </div>

    <div v-else class="carrinho-conteudo">
      <div class="itens">
        <CartItem
          v-for="item in carrinho"
          :key="item.id"
          :item="item"
          @aumentar="aumentarQuantidade"
          @diminuir="diminuirQuantidade"
          @remover="removerDoCarrinho"
        />
      </div>

      <CartSummary
        :quantidade-total="quantidadeTotal"
        :valor-total="valorTotal"
        @limpar="limparCarrinho"
      />
    </div>
  </section>
</template>

<style scoped>
.carrinho-pagina {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

h1 {
  text-align: center;
  color: #3b1c75;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 700;
}

.carrinho-vazio {
  text-align: center;
  margin-top: 3rem;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(123, 81, 201, 0.08) 0%, rgba(95, 61, 196, 0.04) 100%);
  border-radius: 20px;
  border: 2px solid rgba(123, 81, 201, 0.15);
}

.carrinho-vazio p {
  color: #5f3dc4;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.carrinho-vazio button {
  padding: 0.9rem 1.8rem;
  border: none;
  border-radius: 999px;
  background: linear-gradient(135deg, #7b51c9, #5f3dc4);
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.carrinho-vazio button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(95, 61, 196, 0.3);
}

.carrinho-conteudo {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 2rem;
  align-items: start;
}

.itens {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 900px) {
  .carrinho-conteudo {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 1.6rem;
  }
}

@media (max-width: 600px) {
  .carrinho-pagina {
    padding: 1rem;
  }

  h1 {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
  }

  .carrinho-vazio {
    padding: 1.5rem;
  }
}
</style>
