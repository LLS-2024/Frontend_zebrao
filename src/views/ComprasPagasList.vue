<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const compras = ref([])
const STATUS_PAGO = 3

onMounted(async () => {
  try {
    const res = await axios.get(`http://localhost:8000/api/compras/?status=${STATUS_PAGO}`, {
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
.main { padding: 20px; }
.lista { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; }
.card { background: #fff; padding: 12px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
button { margin-top: 8px; padding: 8px 10px; border-radius: 6px; background: #2867b2; color: white; border: none; cursor: pointer; }
</style>
