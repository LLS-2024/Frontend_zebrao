<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()
const compra = ref(null)
const itens = ref([])

onMounted(async () => {
  const id = route.params.id
  try {
    const res = await axios.get(`http://localhost:8000/api/compras/${id}/`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('psg_auth_token')}` }
    })
    compra.value = res.data
    itens.value = (res.data.itens || []).map(it => {
      const produto = it.produto || {}
      const imagem = produto.imagem && produto.imagem.url ? produto.imagem.url : (typeof produto.imagem === 'number' ? null : produto.imagem)
      return {
        id: it.id,
        nome: produto.nome || '',
        preco: parseFloat(produto.preco) || 0,
        quantidade: it.quantidade || 0,
        imagem: imagem,
        total: it.total || (parseFloat(produto.preco || 0) * (it.quantidade || 0))
      }
    })
  } catch (err) {
    console.error('Erro ao carregar compra:', err)
  }
})

async function confirmarEntrega() {
  if (!compra.value) return
  try {
    const method = 'patch' // ou 'put'
    const url = `http://localhost:8000/api/compras/${compra.value.id}/`
    const payload = { status: 4 }
    const res = await axios[method](url, payload, { headers: { Authorization: `Bearer ${localStorage.getItem('psg_auth_token')}` } })
    if (res.status >= 200 && res.status < 300) {
      alert('Entrega confirmada!')
      // atualiza estado local com a resposta da API quando disponível
      if (res.data) {
        compra.value = res.data
      } else {
        compra.value.status = 'Entregue'
      }
    }
  } catch (err) {
    console.error('Erro ao confirmar entrega:', err)
    alert('Erro ao confirmar entrega.')
  }
}

function voltar() {
  router.push('/')
}
</script>

<template>
  <main class="main">
    <div class="detalhes-compra" v-if="compra">
      <h2>Compra #{{ compra.id }}</h2>
      <p><strong>Usuário:</strong> {{ compra.usuario }}</p>
      <p><strong>Status:</strong> {{ compra.status }}</p>
      <p><strong>Total:</strong> R$ {{ compra.total }}</p>

      <div class="itens">
        <div v-for="item in itens" :key="item.id" class="item">
          <img v-if="item.imagem" :src="item.imagem" :alt="item.nome" />
          <div>
            <h4>{{ item.nome }}</h4>
            <p>Quantidade: {{ item.quantidade }}</p>
            <p>Preço: R$ {{ item.preco }}</p>
            <p>Total: R$ {{ item.total }}</p>
          </div>
        </div>
      </div>

      <div class="acoes">
        <button v-if="compra.status === 'Pago' || compra.status === 'Pago'" @click="confirmarEntrega">Confirmar entrega</button>
        <button @click="voltar">Voltar para início</button>
      </div>
    </div>
    <div v-else>
      <p>Carregando compra...</p>
    </div>
  </main>
</template>

<style scoped>
.main { padding: 20px; }
.detalhes-compra { max-width: 800px; margin: 0 auto; background: #fff; padding: 20px; border-radius: 8px; }
.itens { margin-top: 16px; }
.item { display: flex; gap: 12px; align-items: center; padding: 8px 0; border-bottom: 1px solid #eee; }
.item img { width: 80px; height: 80px; object-fit: cover; border-radius: 6px; }
.acoes { margin-top: 16px; display: flex; gap: 8px; }
button { padding: 10px 12px; border-radius: 6px; border: none; cursor: pointer; }
button:first-of-type { background: #4caf50; color: white; }
button:last-of-type { background: #ccc; }
</style>
