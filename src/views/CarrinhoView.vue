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
              <img :src="item?.imagem" :alt="item.nome" />
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

function extrairImagem(imagemData) {
  if (typeof imagemData === 'string') {
    return imagemData
  } else if (typeof imagemData === 'object') {
    return imagemData.file || imagemData.path || null
  } else if (typeof imagemData === 'number') {
    return `https://backend-zebrao.onrender.com/media/imagens/${imagemData}/`
  }
  return null
}

onBeforeMount(async () => {
  try {
    const resUser = await axios.get('https://backend-zebrao.onrender.com/api/users/me/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("psg_auth_token")}`
      }
    })

    const resCompras = await axios.get(`https://backend-zebrao.onrender.com/api/compras/?usuario_id=${resUser.data.id}&status=${STATUS_CARRINHO}`)
    user.value = resUser.data

    if (resCompras.data.results?.length > 0) {
      compra.value = resCompras.data.results[0]
    }

    if (compra.value?.itens) {
      itensCarrinho.value = compra.value.itens.map(it => {
        const produto = it.produto || {}
        return {
          id: it.id,
          produto_id: produto.id ?? produto,
          nome: produto.nome || '',
          descricao: produto.descricao || '',
          preco: parseFloat(produto.preco) || 0,
          imagem: extrairImagem(produto.imagem),
          quantidade: it.quantidade || 0,
          total: it.total || (parseFloat(produto.preco || 0) * (it.quantidade || 0))
        }
      })
      totalCarrinho.value = compra.value.total || itensCarrinho.value.reduce((s, i) => s + (i.preco * i.quantidade), 0)
    }
  } catch (err) {
    console.error("Erro ao carregar carrinho:", err)
  }
})

async function removerItem(index) {
  const item = itensCarrinho.value[index]
  if (!compra.value) return
  try {
    const itensAtualizados = (compra.value.itens || []).filter(it => {
      const itPid = typeof it.produto === 'object' ? it.produto.id : it.produto
      return itPid !== item.produto_id
    }).map(it => ({
      produto: typeof it.produto === 'object' ? it.produto.id : it.produto,
      quantidade: it.quantidade
    }))

    const res = await axios.patch(`https://backend-zebrao.onrender.com/api/compras/${compra.value.id}/`, { itens: itensAtualizados }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('psg_auth_token')}` }
    })

    if (res.data?.itens) {
      compra.value.itens = res.data.itens
      itensCarrinho.value = res.data.itens.map(it => {
        const produto = it.produto || {}
        return {
          id: it.id,
          produto_id: produto.id ?? produto,
          nome: produto.nome || '',
          descricao: produto.descricao || '',
          preco: parseFloat(produto.preco) || 0,
          imagem: extrairImagem(produto.imagem),
          quantidade: it.quantidade || 0,
          total: it.total || (parseFloat(produto.preco || 0) * (it.quantidade || 0))
        }
      })
      totalCarrinho.value = res.data.total || itensCarrinho.value.reduce((s, i) => s + (i.preco * i.quantidade), 0)
    } else {
      itensCarrinho.value.splice(index, 1)
      totalCarrinho.value = itensCarrinho.value.reduce((s, i) => s + (i.preco * i.quantidade), 0)
    }
  } catch (err) {
    console.error('Erro ao remover item:', err)
    alert('Erro ao remover item do carrinho.')
  }
}

async function finalizarCompra() {
  if (!compra.value?.id) {
    alert('Nenhuma compra para finalizar.')
    return
  }

  const compraId = compra.value.id
  const valorTotal = totalCarrinho.value.toFixed(2)

  router.push({
    name: 'area de pagamento',
    query: {
      compraId,
      total: valorTotal
    }
  })
}

function voltar() {
  router.back()
}
</script>



<style scoped>
.main {
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100vw;
  min-height: 100vh;
  gap: 20px;
}

.itens {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.pedidos {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.item-carrinho {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  padding: 16px;
  width: 100%;
  transition: transform 0.2s, box-shadow 0.2s;
}

.item-carrinho:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.12);
}

.product {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}

.img img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid #f0d9e6;
}

.detalhes {
  flex: 1;
}

.detalhes h3 {
  font-size: 18px;
  margin-bottom: 6px;
  color: #fa77ab;
}

.detalhes p {
  font-size: 14px;
  color: #555;
  margin-bottom: 4px;
}

.total {
  margin-top: 12px;
  text-align: right;
}

.total button {
  background: none;
  border: none;
  color: #fa77ab;
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
  transition: color 0.2s;
}

.total button:hover {
  color: #f05895;
}

.resumo {
  width: 100%;
  background-color: #fff0f6;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #fa77ab33;
  margin-top: 24px;
}

.divPreco {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 16px;
}

.resumo button {
  width: 100%;
  padding: 14px;
  background-color: #fa77ab;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.resumo button:hover {
  background-color: #f05895;
}

.vazio {
  text-align: center;
  margin-top: 60px;
}

.vazio p {
  font-size: 16px;
  color: #888;
  margin-bottom: 16px;
}

.vazio button {
  padding: 12px 24px;
  background-color: #fa77ab;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.vazio button:hover {
  background-color: #f05895;
}

/* RESPONSIVO */
@media (max-width: 480px) {
  .img img {
    width: 60px;
    height: 60px;
  }

  .detalhes h3 {
    font-size: 16px;
  }

  .detalhes p {
    font-size: 12px;
  }

  .resumo button,
  .vazio button {
    font-size: 14px;
    padding: 10px;
  }
}

</style>
