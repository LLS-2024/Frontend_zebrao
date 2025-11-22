<template>
   <main class="main">
    <div v-if="itensCarrinho.length > 0" class="itens">
      <div class="pedidos">
        <div
          v-for="(item, index) in itensCarrinho"
          :key="index"
          class="item-carrinho"
        >
          <div class="product">
            <div class="img">
              <img :src="item.imagem" :alt="item.nome" />
            </div>
            <div class="detalhes">
              <h3>{{ item.nome }}</h3>
              <p>Preço: R$ {{ item.preco }}</p>
              <p>Total: R$ {{ (item.preco * item.quantidade) }}</p>
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
          <p>R$ {{ totalCarrinho }}</p>
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
import { ref, onBeforeMount } from 'vue'
import axios from "axios"

const carrinho = ref(null)
const user = ref(null)
const itensCarrinho = ref([])
const totalCarrinho = ref(null)

onBeforeMount(async () => {
  try {
    const resUser = await axios.get('http://localhost:8000/api/users/me/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("psg_auth_token")}`
      }
    })
    const ResCarrinho = await axios.get('http://localhost:8000/api/carrinhos/?usuario_id=' + resUser.data.id)
    carrinho.value = ResCarrinho.data.results[0]
    const resItens = await axios.get('http://localhost:8000/api/itens-carrinho/?carrinho_id=' + carrinho.value.id )
    itensCarrinho.value = resItens.data.results
    totalCarrinho.value = carrinho.value.total
    user.value = resUser.data
    console.log(carrinho.value)
    console.log(itensCarrinho)
    console.log(`token: ${localStorage.getItem("psg_auth_token")}`)
  } catch (err) {
    console.error("Erro ao carregar produto:", err)
  }
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
