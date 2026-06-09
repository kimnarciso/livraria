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
  border: 2px solid rgba(123, 81, 201, 0.2);
  padding: 1.25rem;
  border-radius: 20px;
  background: white;
  box-shadow: 0 10px 30px rgba(95, 61, 196, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.produto-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 40px rgba(95, 61, 196, 0.18);
}

.capa-livro {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 1rem;
}

.produto-card h2 {
  color: #3b1c75;
  font-size: 1.05rem;
  margin: 0.75rem 0 0.5rem 0;
  line-height: 1.4;
}

.produto-card h3 {
  color: #5f3dc4;
  font-size: 0.9rem;
  margin: 0 0 0.75rem 0;
  font-weight: 500;
}

.produto-card p {
  color: #666;
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0 0 1rem 0;
  flex-grow: 1;
}

.preco {
  font-weight: 700;
  color: #7b51c9;
  font-size: 1.15rem;
  margin: 0.75rem 0 1.25rem 0;
}

button {
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 999px;
  background: linear-gradient(135deg, #7b51c9, #5f3dc4);
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  margin-top: 0.6rem;
}

button:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 20px rgba(95, 61, 196, 0.25);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  overflow: hidden;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 24px;
  width: 100%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: absolute;
}

.modal p {
  color: #333;
  margin: 0.75rem 0;
  line-height: 1.6;
}

.modal img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 16px;
  margin: 1rem 0;
}

@media (max-width: 768px) {
  .produto-card {
    padding: 1rem;
  }

  .capa-livro {
    height: 200px;
  }

  .modal {
    padding: 1.5rem;
  }
}

@media (max-width: 600px) {
  .produto-card {
    padding: 0.75rem;
    border: 1.5px solid rgba(123, 81, 201, 0.2);
  }

  .capa-livro {
    height: 150px;
  }

  .produto-card h2 {
    font-size: 0.95rem;
  }

  .produto-card h3 {
    font-size: 0.85rem;
  }

  .preco {
    font-size: 1rem;
  }

  button {
    padding: 0.6rem 0.8rem;
    font-size: 0.85rem;
    margin-top: 0.4rem;
  }

  .modal {
    max-width: 90%;
  }
}
</style>
