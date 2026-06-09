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
  padding: 1.75rem;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(123, 81, 201, 0.08) 0%, rgba(95, 61, 196, 0.04) 100%);
  border: 2px solid rgba(123, 81, 201, 0.2);
  box-shadow: 0 8px 20px rgba(95, 61, 196, 0.1);
}

.cart-summary h2 {
  color: #3b1c75;
  margin: 0 0 1.25rem 0;
  font-size: 1.25rem;
}

.cart-summary p {
  color: #0a0520;
  margin: 0.75rem 0;
  font-weight: 500;
}

.cart-summary p:last-of-type {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 1.25rem 0;
}

.cart-summary button {
  width: 100%;
  padding: 0.9rem 1.25rem;
  border: none;
  border-radius: 999px;
  background: linear-gradient(135deg, #7b51c9, #5f3dc4);
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  margin-top: 1.5rem;
}

.cart-summary button:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 28px rgba(95, 61, 196, 0.3);
}

.tela-finalizacao {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 1.25rem;
}

.card-finalizacao {
  width: 100%;
  max-width: 450px;
  background-color: white;
  border-radius: 24px;
  padding: 2.5rem 1.75rem;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.card-finalizacao h1 {
  color: #3b1c75;
  margin: 0 0 1rem 0;
  font-size: 1.8rem;
  font-weight: 700;
}

.card-finalizacao p {
  margin: 0 0 2rem 0;
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
}

.card-finalizacao button {
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

.card-finalizacao button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 28px rgba(95, 61, 196, 0.3);
}

@media (max-width: 600px) {
  .cart-summary {
    padding: 1.25rem;
  }

  .card-finalizacao {
    padding: 1.75rem 1.25rem;
  }

  .card-finalizacao h1 {
    font-size: 1.4rem;
  }
}
</style>