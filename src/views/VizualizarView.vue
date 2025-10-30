<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import axios from "axios"

const route = useRoute()
const produto = ref(null)
const quantidade = ref(1)

onMounted(async () => {
  try {
    const res = await axios.get(`http://backend-zebrao.onrender.com/api/produtos/${route.params.id}/`)
    produto.value = res.data
  } catch (err) {
    console.error("Erro ao carregar produto:", err)
  }
})

function adicionarAoCarrinho() {
  alert(`${produto.value.nome} adicionado ao carrinho!`)
}
</script>

<template>
  <div class="vizualizar-page">


    <div v-if="produto" class="produto-container">
      <div class="imagem-box">
        <img :src="produto.imagem.url" alt="Imagem do produto" />
      </div>

      <div class="detalhes">
        <h1 class="titulo">{{ produto.nome }}</h1>

        <div class="avaliacao">
          ⭐⭐⭐⭐☆ <span>4.5/5</span>
        </div>

        <div class="preco-box">
          <span class="preco-atual">R$ {{ produto.preco }}</span>
        </div>

        <p class="descricao">{{ produto.descricao }}</p>


        <div class="quantidade">
          <button @click="quantidade--" :disabled="quantidade === 1">−</button>
          <span>{{ quantidade }}</span>
          <button @click="quantidade++">+</button>
        </div>

        <button class="car" @click="adicionarAoCarrinho">Adicionar ao carrinho</button>
      </div>

    </div>

    <div v-else class="carregando">Carregando produto...</div>
    <button @click="$router.back()" class="btn-voltar">← Voltar</button>
  </div>
</template>

<style scoped>
.vizualizar-page {
  background-color: #fff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn-voltar {
  align-self: flex-start;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 20px;
}
.produto-container {
  display: flex;
  gap: 50px;
  max-width: 900px;
  background: #fff;
}
.imagem-box img {
  width: 300px;
  border-radius: 10px;
}
.detalhes {
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: 'work sans', sans-serif;
}
.titulo {
  font-weight: 800;
  font-size: 1.8rem;
  margin-bottom: 8px;
  font-family: 'work sans', sans-serif;
}
.avaliacao {
  color: #f5b800;
  font-size: 0.9rem;
  margin-bottom: 10px;
  font-family: 'work sans', sans-serif;
}
.preco-box {
  margin-bottom: 15px;
}
.preco-atual {
  font-size: 1.4rem;
  font-weight: bold;
}
.descricao {
  color: #555;
  font-size: 0.95rem;
  margin: 10px 0 20px;
  max-width: 400px;
  font-family: 'work sans', sans-serif;
}

.quantidade {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  font-family: 'work sans', sans-serif;
}
.quantidade button {
  background: #eee;
  border: none;
  border-radius: 5px;
  padding: 6px 10px;
  cursor: pointer;
}
.car {
  background: black;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
}
.carregando {
  color: #555;
  font-family: 'Work Sans', sans-serif;
}
</style>
