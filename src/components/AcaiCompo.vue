<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const produtos = ref([])
const router = useRouter()

onMounted(async () => {
  try {
    const res = await axios.get('https://backend-zebrao.onrender.com/api/produtos/?categoria_id=6')
    produtos.value = res.data.results ?? res.data
  } catch (err) {
    console.error('Erro ao buscar produtos:', err.response?.data || err.message)
  }
})

function verProduto(id) {
  router.push(`/vizualizar/${id}`)
}
</script>

<template>
  <div class="sorvete-home">
    <div class="txt">
      <h2>Venha conhecer essas delicias!</h2>

      <!-- CORRIGIDO -->
      <div class="deco">
        <img src="/pagInicial/shape.png" alt="" />
      </div>

      <div class="buttons">
        <button>Top da semana</button>
        <button>Mais buscados</button>
        <button>Produtos novos</button>
      </div>
    </div>

    <div class="produtos">
      <div
        class="produto"
        v-for="produto in produtos"
        :key="produto.id"
        @click="verProduto(produto.id)"
      >
        <div class="slot">
          <img :src="produto.imagem.url" alt="" />

          <p class="nome">
            {{ produto.nome }}
          </p>
        </div>

        <p class="preco">$ {{ produto.preco }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.produtos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.produto {
  width: 150px;
  background-color: white;
  margin: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;

  & .nome {
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
    font-size: 15px;
  }

  & .preco {
    color: #888;
  }
}

.slot {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slot img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.sorvete-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff0f4;
  padding: 50px;
}

.txt {
  text-align: center;
}

.txt h2 {
  font-family: 'Work Sans', sans-serif;
}

.txt .deco img {
  width: 250px;
  height: 70px;
  padding: 20px;
}

.buttons {
  display: flex;
  justify-content: center;
}

.buttons button {
  background-color: white;
  color: #828282;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 5px;
  font-family: 'Work Sans', sans-serif;
  cursor: pointer;
}

.buttons button:hover {
  background-color: #2867b2;
  color: white;
  transition: 0.5s;
}
</style>
