<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { valorTotal, quantidadeTotal, limparCarrinho } from '@/utils/cartUtils'

const mostrarFinalizacao = ref(false)

function finalizarCompra() {
  if (quantidadeTotal.value === 0) return

  mostrarFinalizacao.value = true
}

function verMaisLivros() {
  mostrarFinalizacao.value = false
  limparCarrinho()

}
</script>

<template>
  <section class="cart-summary">
    <h2>Resumo da compra</h2>

    <p>Itens no carrinho: {{ quantidadeTotal }}</p>

    <p>
      Total: R$ {{ valorTotal.toFixed(2).replace('.', ',') }}
    </p>

    <button @click="finalizarCompra">
      Finalizar compra
    </button>
  </section>

  <div v-if="mostrarFinalizacao" class="tela-finalizacao">
    <div class="card-finalizacao">
      <h1>Compra finalizada!</h1>

      <p>
        Obrigada por comprar na nossa livraria.
        Seu pedido foi concluído com sucesso!
      </p>

      <RouterLink  to="/produtos">
        <button @click="verMaisLivros">Ver mais livros</button>
      </RouterLink>
      
    </div>
  </div>
</template>

<style scoped>
.cart-summary {
  padding: 20px;
  border-radius: 12px;
  background-color: #f5f7ff;
}

.cart-summary button {
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background-color: #2f5bea;
  color: white;
  cursor: pointer;
}

.tela-finalizacao {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(15, 23, 42, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 20px;
}

.card-finalizacao {
  width: 100%;
  max-width: 430px;
  background-color: white;
  border-radius: 18px;
  padding: 35px 25px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

.card-finalizacao h1 {
  color: #1f2a44;
  margin-bottom: 15px;
}

.card-finalizacao p {
  margin-bottom: 25px;
  color: #444;
}

.card-finalizacao button {
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  background-color: #2f5bea;
  color: white;
  cursor: pointer;
}
</style>