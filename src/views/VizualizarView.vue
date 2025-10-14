<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import axios from "axios"

const route = useRoute()
const produto = ref(null)

onMounted(async () => {
  try {
    const res = await axios.get(`http://localhost:19003/api/produtos/${route.params.id}/`)
    produto.value = res.data
  } catch (err) {
    console.error("Erro ao carregar produto:", err)
  }
})
</script>

<template>
  <div class="vizualizar-page">
    <button @click="$router.back()" class="btn-voltar">← Voltar</button>

    <div v-if="produto" class="produto-detalhe">
      <img :src="produto.imagem.url" alt="" class="imagem-produto" />
      <h2>{{ produto.nome }}</h2>
      <p class="descricao">{{ produto.descricao }}</p>
      <p class="preco"><b>Preço:</b> R$ {{ produto.preco }}</p>
    </div>

    <div v-else class="carregando">
      <p>Carregando produto...</p>
    </div>
  </div>
</template>

<style scoped>
.vizualizar-page {
  background-color: #FFF0F4;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn-voltar {
  background-color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 15px;
  margin-bottom: 20px;
  cursor: pointer;
}
.btn-voltar:hover {
  background-color: #2867b2;
  color: white;
  transition: 0.3s;
}
.produto-detalhe {
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.imagem-produto {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}
.descricao {
  margin: 10px 0;
  color: #555;
}
.preco {
  color: #2867b2;
  font-weight: 600;
}
.carregando {
  font-family: 'Work Sans', sans-serif;
  color: #555;
  margin-top: 40px;
}
</style>
