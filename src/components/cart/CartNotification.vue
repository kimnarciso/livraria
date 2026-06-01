<script setup>
// Este componente cria a bolinha flutuante do carrinho.
// Ela aparece no canto inferior esquerdo somente quando existe item no carrinho.
// A quantidade aparece como notificação.

import { RouterLink } from 'vue-router'
import { quantidadeTotal } from '@/utils/cartUtils'
</script>

<template>
  <RouterLink
    v-if="quantidadeTotal > 0"
    to="/carrinho"
    class="carrinho-flutuante"
    aria-label="Abrir carrinho"
  >
    <span class="icone-carrinho">🛒</span>
    <span class="notificacao">{{ quantidadeTotal }}</span>
  </RouterLink>
</template>

<style scoped>
.carrinho-flutuante {
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #8a00db;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  z-index: 999;
  transition: transform 0.2s ease, background 0.2s ease;
}

.carrinho-flutuante:hover {
  transform: scale(1.08);
  background: #6d00ad;
}

.icone-carrinho {
  font-size: 1.8rem;
}

.notificacao {
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 24px;
  height: 24px;
  padding: 0 6px;
  border-radius: 999px;
  background: #ff00aa;
  color: white;
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
}
</style>
