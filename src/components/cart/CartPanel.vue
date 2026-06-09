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
  padding: 30px;
}

h1 {
  text-align: center;
  color: #8a00db;
}

.carrinho-vazio {
  text-align: center;
  margin-top: 40px;
}

.carrinho-vazio button {
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  background: #8a00db;
  color: white;
  cursor: pointer;
}

.carrinho-conteudo {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 24px;
  align-items: start;
}

.itens {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

@media (max-width: 900px) {
  .carrinho-conteudo {
    grid-template-columns: 1fr;
  }
}
</style>
