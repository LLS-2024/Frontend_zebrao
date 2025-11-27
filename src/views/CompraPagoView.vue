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
    const res = await axios.get(`https://backend-zebrao.onrender.com/api/compras/${id}/`, {
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
    const url = `https://backend-zebrao.onrender.com/api/compras/${compra.value.id}/`
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
.main {
  padding: 32px;
  font-family: "Poppins", sans-serif;
  background: #f6f8fa;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.detalhes-compra {
  width: 100%;
  max-width: 850px;
  background: #ffffff;
  padding: 28px;
  border-radius: 18px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
}

/* Título */
h2 {
  font-size: 28px;
  font-weight: 600;
  color: #222;
  margin-bottom: 16px;
}

/* Infos gerais */
.detalhes-compra p {
  font-size: 16px;
  margin: 6px 0;
  color: #444;
}

.detalhes-compra strong {
  color: #111;
}

/* Lista de itens */
.itens {
  margin-top: 24px;
  border-top: 1px solid #e5e7eb;
  padding-top: 16px;
}

.item {
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.2s ease, padding-left 0.2s ease;
}

.item:hover {
  background: #fafafa;
  border-radius: 10px;
  padding-left: 10px;
}

.item img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #ddd;
}

/* Texto do item */
.item h4 {
  font-size: 17px;
  margin-bottom: 4px;
  font-weight: 600;
  color: #222;
}

.item p {
  font-size: 14px;
  color: #555;
  margin: 2px 0;
}

/* Botões */
.acoes {
  margin-top: 28px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

button {
  padding: 12px 18px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  transition: 0.2s ease;
  flex: 1;
  min-width: 140px;
}

/* Botão verde */
button:first-of-type {
  background: linear-gradient(135deg, #0ba360, #3cba92);
  color: white;
}

button:first-of-type:hover {
  opacity: 0.9;
  transform: scale(1.03);
}

/* Botão cinza */
button:last-of-type {
  background: #d1d5db;
  color: #111;
}

button:last-of-type:hover {
  background: #c4c7cc;
  transform: scale(1.03);
}

/* Estado: carregando */
.main p {
  font-size: 16px;
  color: #555;
  text-align: center;
}

/* ========================= */
/* 📱 RESPONSIVO MOBILE */
/* ========================= */
@media (max-width: 600px) {
  .main {
    padding: 16px;
  }

  .detalhes-compra {
    padding: 20px;
    border-radius: 14px;
  }

  h2 {
    font-size: 22px;
    text-align: center;
  }

  .item {
    flex-direction: column;
    align-items: flex-start;
  }

  .item img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .acoes {
    flex-direction: column;
  }

  button {
    width: 100%;
  }
}

/* ========================= */
/* 📲 RESPONSIVO TABLET */
/* ========================= */
@media (max-width: 900px) {
  .detalhes-compra {
    padding: 24px;
  }

  .item img {
    width: 75px;
    height: 75px;
  }

  .item h4 {
    font-size: 16px;
  }

  .item p {
    font-size: 13px;
  }
}

</style>
