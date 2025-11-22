<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const produtos = ref([])
const router = useRouter()

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:8000/api/produtos/?categoria_id=5')
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
      <div class="deco"><img src="/public/pagInicial/shape.png" alt="" /></div>
      <div class="buttons">
        <div><button>Top da semana</button></div>
        <div><button>Mais buscados</button></div>
        <div><button>Produtos novos</button></div>
      </div>
    </div>
    <div class="produtos">
      <div
        class="produto"
        v-for="produto in produtos"
        :key="produto.id"
        @click="verProduto(produto.id)"
      >
        <!-- <img src="{{ produto.imagem.url }}" alt=""> - -->
        <div class="slot">
          <div><img :src="produto.imagem.url" alt="" /></div>
          <div>
            <p class="nome">
              {{ produto.nome }}
            </p>
          </div>
        </div>

        <div>
          <p class="preco">$ {{ produto.preco }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

/* ----------- LAYOUT GERAL ----------- */
.sorvete-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff0f4;
  padding: 30px 20px; /* reduzido pra mobile */
  width: 100%;
  box-sizing: border-box;
}

/* ----------- TÍTULO ----------- */
.txt {
  text-align: center;
}
.txt .deco img {
  width: 200px;
  height: auto;
  padding: 10px;
}

/* ----------- BOTÕES ----------- */
.buttons {
  display: flex;
  flex-wrap: wrap;   /* AGORA QUEBRA NO MOBILE */
  justify-content: center;
  gap: 10px;
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
  transition: 0.5s;
}

/* ----------- PRODUTOS ----------- */
.produtos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 15px;
}

/* CARD DO PRODUTO */
.produto {
  width: 150px;    /* valor será alterado no mobile */
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

.nome {
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  font-size: 15px;
}
.preco {
  color: #888;
}

/* ----------- RESPONSIVIDADE ----------- */

/* 📱 CELULAR PEQUENO */
@media (max-width: 480px) {

  .sorvete-home {
    padding: 20px 10px;
  }

  .txt .deco img {
    width: 150px;
  }

  .produto {
    width: 45%;           /* 2 por linha */
  }

  .slot img {
    width: 80px;
    height: 80px;
  }
}

/* 📱 CELULAR GRANDE / TABLET VERTICAL */
@media (min-width: 481px) and (max-width: 768px) {

  .produto {
    width: 30%;       /* 3 por linha */
  }

  .txt .deco img {
    width: 200px;
  }
}

/* 💻 TABLET HORIZONTAL / NOTEBOOK */
@media (min-width: 769px) and (max-width: 1024px) {

  .produto {
    width: 22%;       /* 4 por linha */
  }
}

</style>

