<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const compras = ref([])
const STATUS_PAGO = 3

onMounted(async () => {
  try {
    const res = await axios.get(`https://backend-zebrao.onrender.com/api/compras/?status=${STATUS_PAGO}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('psg_auth_token')}` }
    })
    compras.value = res.data.results || []
  } catch (err) {
    console.error('Erro ao carregar compras pagas:', err)
  }
})

function openCompra(id) {
  router.push({ name: 'compra-detalhes', params: { id } })
}
</script>

<template>
  <main class="main">
    <h2>Compras Pagas</h2>
    <div v-if="compras.length === 0">
      <p>Nenhuma compra com status Pago encontrada.</p>
    </div>
    <div v-else class="lista">
      <div v-for="c in compras" :key="c.id" class="card">
        <h3>Compra #{{ c.id }}</h3>
        <p><strong>Usuário:</strong> {{ c.usuario }}</p>
        <p><strong>Total:</strong> R$ {{ c.total }}</p>
        <p><strong>Itens:</strong> {{ c.itens.length }}</p>
        <button @click="openCompra(c.id)">Ver detalhes</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  padding: 32px;
  font-family: "Poppins", sans-serif;
  background: #f6f8fa;
}

h2 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #333;
}

/* Grid dos cards */
.lista {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

/* Card individual */
.card {
  background: #ffffff;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  transition: transform 0.15s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.12);
}

/* Título do card */
.card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #222;
}

/* Textos */
.card p {
  font-size: 15px;
  margin: 6px 0;
  color: #444;
}

.card p strong {
  color: #111;
}

/* Botão */
button {
  width: 100%;
  margin-top: 14px;
  padding: 10px 0;
  border-radius: 10px;
  background: linear-gradient(135deg, #2867b2, #3a7bd5);
  color: white;
  border: none;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.1s ease;
}

button:hover {
  opacity: 0.9;
  transform: scale(1.02);
}

button:active {
  transform: scale(0.98);
}

/* Mensagem quando não há compras */
.main p {
  font-size: 16px;
  color: #555;
}
</style>
