<template>
  <main class="main">
    <div v-if="carrinho.length > 0" class="itens">
      <div class="pedidos">
        <div
          v-for="(item, index) in carrinho"
          :key="index"
          class="item-carrinho"
        >
          <div class="product">
            <div class="img">
              <img :src="item.imagem" :alt="item.nome" />
            </div>
            <div class="detalhes">
              <h3>{{ item.nome }}</h3>
              <p>Preço: R$ {{ item.preco.toFixed(2) }}</p>
              <p>Total: R$ {{ (item.preco * item.quantidade).toFixed(2) }}</p>
            </div>
          </div>
          <div class="total">
            <button @click="removerItem(index)">Remover</button>
          </div>
        </div>
      </div>

      <div class="resumo">
        <div class="divPreco">
          <p>Total</p>
          <p>R$ {{ totalCarrinho.toFixed(2) }}</p>
        </div>
        <button @click="finalizarCompra">FINALIZAR</button>
      </div>
    </div>

    <div v-else class="vazio">
      <p>Seu carrinho está vazio.</p>
      <button @click="voltar">Voltar</button>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const carrinho = ref([])

const totalCarrinho = computed(() =>
  carrinho.value.reduce((total, item) => total + item.preco * item.quantidade, 0)
)

function voltar() {
  window.location.href = 'index.html'
}

function removerItem(index) {
  carrinho.value.splice(index, 1)
  salvarCarrinho()
}

function finalizarCompra() {
  alert('Compra finalizada!')
  carrinho.value = []
  salvarCarrinho()
}

function salvarCarrinho() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho.value))
}

onMounted(() => {
  const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho')) || []
  carrinho.value = carrinhoSalvo
})
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  overflow-x: hidden;
}

.main {
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
}

.itens {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
}

.item-carrinho {
  display: flex;
  flex-direction: column;
  background: #fff9fb;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0,0,0,0.1);
  padding: 12px;
  width: 100%;
}

.product {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.img img {
  width: 80px;
  height: auto;
  border-radius: 8px;
}

.detalhes {
  flex: 1;
}

.detalhes h3 {
  font-size: 18px;
  margin-bottom: 4px;
}

.detalhes p {
  font-size: 14px;
  color: #333;
}

.total {
  margin-top: 10px;
  text-align: right;
}

.total button {
  background: none;
  border: none;
  color: #fa77ab;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
}

.resumo {
  width: 100%;
  background-color: #fff0f6;
  border: 1px solid black;
  border-radius: 8px;
  padding: 16px;
}

.divPreco {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 16px;
}

.resumo button {
  margin-top: 16px;
  width: 100%;
  padding: 12px;
  background-color: #fa77ab;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

.resumo button:hover {
  background-color: #f05895;
}

.vazio {
  text-align: center;
}

.vazio button {
  margin-top: 16px;
  padding: 12px 20px;
  background-color: #fa77ab;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
</style>
