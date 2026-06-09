// Este arquivo guarda a lógica do carrinho de compras.
// Ele permite adicionar livros, alterar quantidade, remover itens,
// limpar o carrinho e calcular quantidade total e valor total.

import { reactive, computed } from 'vue'
import { produtos } from '@/data/products'

const carrinho = reactive([])

function addCarrinho(idLivro, quantidade = 1) {
  const livro = produtos.find((p) => p.id === idLivro)

  if (!livro) {
    return
  }

  const itemExistente = carrinho.find((item) => item.id === idLivro)

  if (itemExistente) {
    itemExistente.quantidade += quantidade
    itemExistente.precoTotal = itemExistente.quantidade * itemExistente.preco
  } else {
    carrinho.push({
      ...livro,
      quantidade,
      precoTotal: quantidade * livro.preco,
    })
  }
}

function aumentarQuantidade(idLivro) {
  addCarrinho(idLivro, 1)
}

function diminuirQuantidade(idLivro) {
  const item = carrinho.find((produto) => produto.id === idLivro)

  if (!item) {
    return
  }

  if (item.quantidade > 1) {
    item.quantidade--
    item.precoTotal = item.quantidade * item.preco
  } else {
    removerDoCarrinho(idLivro)
  }
}

function removerDoCarrinho(idLivro) {
  const posicao = carrinho.findIndex((produto) => produto.id === idLivro)

  if (posicao !== -1) {
    carrinho.splice(posicao, 1)
  }
}

function limparCarrinho() {
  carrinho.splice(0, carrinho.length)
}

const quantidadeTotal = computed(() => {
  return carrinho.reduce((total, item) => total + item.quantidade, 0)
})

const valorTotal = computed(() => {
  return carrinho.reduce((total, item) => total + item.precoTotal, 0)
})

export {
  carrinho,
  addCarrinho,
  aumentarQuantidade,
  diminuirQuantidade,
  removerDoCarrinho,
  limparCarrinho,
  quantidadeTotal,
  valorTotal,
}