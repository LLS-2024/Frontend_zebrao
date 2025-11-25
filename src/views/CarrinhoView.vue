<template>
   <main class="main">
    <div v-if="itensCarrinho.length > 0" class="itens">
      <div class="pedidos">
        <div
          v-for="(item, index) in itensCarrinho"
          :key="index"
          class="item-carrinho"
        >
          <div class="product">
            <div class="img">
              <img :src="item.imagem" :alt="item.nome" />
            </div>
            <div class="detalhes">
              <h3>{{ item.nome }}</h3>
              <p>Preço: R$ {{ item.preco }}</p>
              <p>Total: R$ {{ (item.preco * item.quantidade) }}</p>
            </div>
          </div>
          <div class="total">
            <button @click="removerItem(index)">Remover</button>
          </div>
        </div>
      </div>

      <div class="resumo">
        <div class="divPreco">
          <p>Total</p>
          <p>R$ {{ totalCarrinho }}</p>
        </div>
        <button @click="finalizarCompra">FINALIZAR</button>
      </div>
    </div>

    <div v-else class="vazio">
      <p>Seu carrinho está vazio.</p>
      <button @click="voltar">Voltar</button>
    </div>
  </main>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import axios from "axios"

const router = useRouter()
const compra = ref(null)
const user = ref(null)
const itensCarrinho = ref([])
const totalCarrinho = ref(0)

const STATUS_CARRINHO = 1

onBeforeMount(async () => {
  try {
    const resUser = await axios.get('http://localhost:8000/api/users/me/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("psg_auth_token")}`
      }
    })

    // Busca compras com status CARRINHO do usuário
    const resCompras = await axios.get(`http://localhost:8000/api/compras/?usuario_id=${resUser.data.id}&status=${STATUS_CARRINHO}`)
    user.value = resUser.data

    if (resCompras.data.results && resCompras.data.results.length > 0) {
      compra.value = resCompras.data.results[0]
    } else {
      compra.value = null
    }

    // Mapeia itens para a estrutura usada na view
    if (compra.value && compra.value.itens) {
      itensCarrinho.value = compra.value.itens.map(it => {
        const produto = it.produto || {}
        const imagem = produto.imagem && produto.imagem.url ? produto.imagem.url : (typeof produto.imagem === 'number' ? null : produto.imagem)
        return {
          id: it.id,
          produto_id: typeof produto.id !== 'undefined' ? produto.id : produto,
          nome: produto.nome || '',
          descricao: produto.descricao || '',
          preco: parseFloat(produto.preco) || 0,
          imagem: imagem,
          quantidade: it.quantidade || 0,
          total: it.total || (parseFloat(produto.preco || 0) * (it.quantidade || 0))
        }
      })
      totalCarrinho.value = compra.value.total || itensCarrinho.value.reduce((s, i) => s + (i.preco * i.quantidade), 0)
    } else {
      itensCarrinho.value = []
      totalCarrinho.value = 0
    }

    console.log('compra', compra.value)
    console.log('itens', itensCarrinho.value)
  } catch (err) {
    console.error("Erro ao carregar carrinho:", err)
  }
})

async function removerItem(index) {
  const item = itensCarrinho.value[index]
  if (!compra.value) return
  try {
    // monta itens atualizados sem o removido
    const itensAtualizados = (compra.value.itens || []).filter(it => {
      const itPid = typeof it.produto === 'object' ? it.produto.id : it.produto
      return itPid !== item.produto_id
    }).map(it => ({ produto: typeof it.produto === 'object' ? it.produto.id : it.produto, quantidade: it.quantidade }))

    const res = await axios.patch(`http://localhost:8000/api/compras/${compra.value.id}/`, { itens: itensAtualizados }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('psg_auth_token')}` }
    })

    // atualiza estado local
    if (res.data && res.data.itens) {
      compra.value.itens = res.data.itens
      itensCarrinho.value = res.data.itens.map(it => {
        const produto = it.produto || {}
        const imagem = produto.imagem && produto.imagem.url ? produto.imagem.url : (typeof produto.imagem === 'number' ? null : produto.imagem)
        return {
          id: it.id,
          produto_id: typeof produto.id !== 'undefined' ? produto.id : produto,
          nome: produto.nome || '',
          descricao: produto.descricao || '',
          preco: parseFloat(produto.preco) || 0,
          imagem: imagem,
          quantidade: it.quantidade || 0,
          total: it.total || (parseFloat(produto.preco || 0) * (it.quantidade || 0))
        }
      })
      totalCarrinho.value = res.data.total || itensCarrinho.value.reduce((s, i) => s + (i.preco * i.quantidade), 0)
    } else {
      // fallback local
      itensCarrinho.value.splice(index, 1)
      totalCarrinho.value = itensCarrinho.value.reduce((s, i) => s + (i.preco * i.quantidade), 0)
    }
  } catch (err) {
    console.error('Erro ao remover item:', err)
    alert('Erro ao remover item do carrinho.')
  }
}

async function finalizarCompra() {
  if (!compra.value) {
    alert('Nenhuma compra para finalizar.')
    return
  }
  try {
    // Atualiza status usando PATCH (poderia ser PUT se preferir)
    const method = 'patch' // ou 'put'
    const url = `http://localhost:8000/api/compras/${compra.value.id}/`
    const payload = { status: 3 }
    const res = await axios[method](url, payload, { headers: { Authorization: `Bearer ${localStorage.getItem('psg_auth_token')}` } })

    if (res.status >= 200 && res.status < 300) {
      // atualiza estado local com a resposta (se disponível)
      if (res.data) {
        compra.value = res.data
      } else {
        compra.value.status = 'Pago'
      }
      alert('Compra paga com sucesso! Redirecionando para o registro da compra.')
      // garante que existe um id válido para a rota
      const compraId = (res && res.data && res.data.id) || (compra.value && compra.value.id)
      if (compraId) {
        router.push({ name: 'compra-detalhes', params: { id: compraId } })
      } else {
        // fallback: volta para home se não houver id
        console.warn('ID da compra não disponível para redirecionamento, retornando à home.')
        router.push('/')
      }
    }
  } catch (err) {
    console.error('Erro ao finalizar compra:', err)
    alert('Não foi possível finalizar a compra via API. Verifique backend.')
  }
}

function voltar() {
  router.back()
}

</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  overflow-x: hidden;
}

.main {
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
}

.itens {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
}

.item-carrinho {
  display: flex;
  flex-direction: column;
  background: #fff9fb;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0,0,0,0.1);
  padding: 12px;
  width: 100%;
}

.product {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.img img {
  width: 80px;
  height: auto;
  border-radius: 8px;
}

.detalhes {
  flex: 1;
}

.detalhes h3 {
  font-size: 18px;
  margin-bottom: 4px;
}

.detalhes p {
  font-size: 14px;
  color: #333;
}

.total {
  margin-top: 10px;
  text-align: right;
}

.total button {
  background: none;
  border: none;
  color: #fa77ab;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
}

.resumo {
  width: 100%;
  background-color: #fff0f6;
  border: 1px solid black;
  border-radius: 8px;
  padding: 16px;
}

.divPreco {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 16px;
}

.resumo button {
  margin-top: 16px;
  width: 100%;
  padding: 12px;
  background-color: #fa77ab;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

.resumo button:hover {
  background-color: #f05895;
}

.vazio {
  text-align: center;
}

.vazio button {
  margin-top: 16px;
  padding: 12px 20px;
  background-color: #fa77ab;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
</style>
