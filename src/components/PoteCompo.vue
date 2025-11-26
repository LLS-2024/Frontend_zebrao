<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const produtos = ref([])
const router = useRouter()

onMounted(async () => {
  try {
    const res = await axios.get('https://backend-zebrao.onrender.com/api/produtos/?categoria_id=3')
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
      <div><h2>Venha conhecer essas delicias!</h2></div>

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
          <img :src="produto.imagem?.url" alt="" />
          <p class="nome">{{ produto.nome }}</p>
        </div>
        <p class="preco">R$ {{ produto.preco }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* CONTAINER PRINCIPAL */
.sorvete-home {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
  background-color: #fff0f4;
  padding: 20px;
  overflow-x: hidden;
  box-sizing: border-box;
}

/* TÍTULOS E DECO */
.txt {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.txt h2 {
  font-family: 'Work Sans', sans-serif;
  font-size: 26px;
  margin: 0;
}

.deco img {
  width: 180px;
  height: auto;
  margin: 10px 0;
}

/* BOTÕES */
.buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.buttons button {
  background-color: white;
  color: #828282;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-family: 'Work Sans', sans-serif;
  cursor: pointer;
}

.buttons button:hover {
  background-color: #2867b2;
  color: white;
  transition: 0.3s;
}

/* GRID DOS PRODUTOS */
.produtos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 20px;
  margin-top: 30px;
  width: 100%;
}

/* CARD DO PRODUTO */
.produto {
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 3px 8px rgba(0,0,0,0.1);
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.produto:hover {
  transform: scale(1.03);
}

/* SLOT IMG + NOME */
.slot {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.slot img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
}

.nome {
  margin-top: 8px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
}

/* PREÇO */
.preco {
  margin-top: 5px;
  color: #888;
  font-weight: bold;
  font-family: 'Work Sans', sans-serif;
}

/* MOBILE */
@media (max-width: 600px) {
  .txt h2 {
    font-size: 22px;
  }

  .deco img {
    width: 150px;
  }

  .slot img {
    width: 80px;
    height: 80px;
  }
}
</style>
