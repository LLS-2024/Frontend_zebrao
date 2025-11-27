<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const produtos = ref([])
const router = useRouter()

onMounted(async () => {
  try {
    const res = await axios.get('https://backend-zebrao.onrender.com/api/produtos/?categoria_id=4')
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

      <!-- Aqui corrigi: remover /public/ -->
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
.produtos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.produto {
  width: 150px;
  background-color: white;
  margin: 10px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s ease;
}

.produto:hover {
  transform: scale(1.03);
}

.produto .nome {
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
}

.produto .preco {
  color: #888;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  margin-top: 5px;
  text-align: center;
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
  background-color: #fff0f4;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.txt {
  text-align: center;
}

.txt h2 {
  font-family: 'Work Sans', sans-serif;
  font-size: 24px;
}

.txt .deco img {
  width: 250px;
  padding: 20px;
}

.buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
  transition: 0.3s;
}

.buttons button:hover {
  background-color: #2867b2;
  color: white;
}

/* ===========================================
     📱 MOBILE (até 480px)
   =========================================== */
@media (max-width: 480px) {
  .sorvete-home {
    padding: 20px;
  }

  .txt h2 {
    font-size: 18px;
  }

  .txt .deco img {
    width: 180px;
    padding: 10px;
  }

  .produto {
    width: 45%;
    margin: 6px;
    padding: 10px;
  }

  .slot img {
    width: 80px;
    height: 80px;
  }

  .produto .nome,
  .produto .preco {
    font-size: 13px;
  }

  .buttons button {
    padding: 8px 14px;
    font-size: 13px;
  }
}

/* ===========================================
     📲 TABLET (481px a 768px)
   =========================================== */
@media (min-width: 481px) and (max-width: 768px) {
  .sorvete-home {
    padding: 30px;
  }

  .txt h2 {
    font-size: 22px;
  }

  .txt .deco img {
    width: 220px;
  }

  .produto {
    width: 30%;
    margin: 8px;
  }

  .slot img {
    width: 90px;
    height: 90px;
  }

  .buttons button {
    padding: 10px 18px;
    font-size: 14px;
  }
}

/* ===========================================
     💻 TELAS MÉDIAS (769px a 1024px)
   =========================================== */
@media (min-width: 769px) and (max-width: 1024px) {
  .produto {
    width: 22%;
  }

  .txt h2 {
    font-size: 24px;
  }
}

</style>
