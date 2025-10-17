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


    <div v-if="produto" class="produto-detalhe">
      <img :src="produto.imagem.url" alt="" class="imagem-produto" />
      <div class="detalhes-produto">
      <h2 class="nome">{{ produto.nome }}</h2>
      <p class="preco"><b>Preço:</b> R$ {{ produto.preco }}</p>
      <p class="descricao">{{ produto.descricao }}</p>

      <button class="car">Adicionar ao carrinho</button>
      </div>
    </div>

    <div v-else class="carregando">
      <p>Carregando produto...</p>
    </div>
    <button @click="$router.back()" class="btn-voltar">← Voltar</button>
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
display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.detalhes-produto {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
}
.imagem-produto {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}
.nome{
  font-family: 'Work Sans', sans-serif;
  align-items: start;
  margin-bottom: 0px;
}
.descricao {
  padding: 20px 500px 20px 0px;
  margin: 20px 0px;
  color: #555;
}
.preco {
  color: #333;
  font-weight: 600;
  margin-top: 2px;
}
.car{
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 10px;
}
.carregando {
  font-family: 'Work Sans', sans-serif;
  color: #555;
  margin-top: 40px;

}
</style>
