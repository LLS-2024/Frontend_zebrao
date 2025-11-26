<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import axios from "axios"

const route = useRoute()
const produto = ref(null)
const quantidade = ref(1)
const compra = ref(null)
const user = ref(null)

const STATUS_CARRINHO = 1

onMounted(async () => {
  try {
    const resUser = await axios.get('https://backend-zebrao.onrender.com/api/users/me/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("psg_auth_token")}`
      }
    })
    const resCompras = await axios.get(`https://backend-zebrao.onrender.com/api/compras/?usuario_id=${resUser.data.id}&status=${STATUS_CARRINHO}`)
    const resProduto = await axios.get(`https://backend-zebrao.onrender.com/api/produtos/${route.params.id}/`)

    produto.value = resProduto.data
    user.value = resUser.data

    // Se existe uma compra com status CARRINHO, usa ela. Caso contrário, cria uma nova
    if (resCompras.data.results.length > 0) {
      compra.value = resCompras.data.results[0]
    } else {
      // Cria uma nova compra com status CARRINHO
      const resNovaCompra = await axios.post('https://backend-zebrao.onrender.com/api/compras/', {
        usuario: resUser.data.id,
        itens: []
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("psg_auth_token")}`
        }
      })
      compra.value = resNovaCompra.data
      compra.value.itens = []
    }

    console.log(compra.value)
    console.log("usuário: " + user.value)
    console.log(`token: ${localStorage.getItem("psg_auth_token")}, usuriário ID: ${resUser.data.id}`)
  } catch (err) {
    console.error("Erro ao carregar produto:", err)
  }
})

async function adicionarAoCarrinho() {
  if (!compra.value) {
    alert("Compra não encontrada para o usuário.")
    return
  }

  const itemExistente = (compra.value.itens || []).find(item => {
    const pid = typeof item.produto === 'object' ? item.produto.id : item.produto
    return pid === produto.value.id
  })

  console.log(itemExistente)

  if (itemExistente) {
    // Atualiza quantidade no payload e faz PATCH na compra com a lista completa de itens
    try {
      // Monta lista atualizada de itens para enviar no serializer de Compra
      const itensAtualizados = (compra.value.itens || []).map(it => {
        const itPid = typeof it.produto === 'object' ? it.produto.id : it.produto
        if (itPid === produto.value.id) {
          return { produto: produto.value.id, quantidade: it.quantidade + quantidade.value }
        }
        return { produto: itPid, quantidade: it.quantidade }
      })

      await axios.patch(`https://backend-zebrao.onrender.com/api/compras/${compra.value.id}/`, {
        itens: itensAtualizados
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("psg_auth_token")}`
        }
      })

      // Atualiza estado local (soma na entrada existente se achar)
      const itemLocal = (compra.value.itens || []).find(i => {
        const itPid = typeof i.produto === 'object' ? i.produto.id : i.produto
        return itPid === produto.value.id
      })
      if (itemLocal) itemLocal.quantidade += quantidade.value
    } catch (err) {
      console.error("Erro ao atualizar item na compra:", err)
      alert("Erro ao atualizar item na compra.")
      return
    }
  } else {
    try {
      // Cria payload de itens baseado nos itens atuais + novo item
      const itensAtualizados = (compra.value.itens || []).map(it => ({
        produto: typeof it.produto === 'object' ? it.produto.id : it.produto,
        quantidade: it.quantidade
      }))
      const existingIndex = itensAtualizados.findIndex(i => i.produto === produto.value.id)
      if (existingIndex > -1) {
        itensAtualizados[existingIndex].quantidade += quantidade.value
      } else {
        itensAtualizados.push({ produto: produto.value.id, quantidade: quantidade.value })
      }

      const res = await axios.patch(`https://backend-zebrao.onrender.com/api/compras/${compra.value.id}/`, {
        itens: itensAtualizados
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("psg_auth_token")}`
        }
      })

      // Atualiza estado local com resposta da compra (se a API retornar a compra atualizada)
      if (res.data && res.data.itens) {
        compra.value.itens = res.data.itens
      } else {
        if (!compra.value.itens) compra.value.itens = []
        // Se já existe um item com esse produto, soma a quantidade localmente
        const local = compra.value.itens.find(i => {
          const itPid = typeof i.produto === 'object' ? i.produto.id : i.produto
          return itPid === produto.value.id
        })
        if (local) {
          local.quantidade += quantidade.value
        } else {
          compra.value.itens.push({ produto: produto.value.id, quantidade: quantidade.value })
        }
      }
    } catch (err) {
      console.error("Erro ao adicionar item na compra:", err)
      // mostra mensagens de erro detalhadas se houver
      if (err.response && err.response.data) {
        console.error(err.response.data)
      }
      alert("Erro ao adicionar item na compra.")
      return
    }
  }

  alert(`${produto.value.nome} adicionado ao carrinho!`)
}
</script>

<template>
  <div class="vizualizar-page">


    <div v-if="produto" class="produto-container">
      <div class="imagem-box">
        <img :src="produto.imagem.url" alt="Imagem do produto" />
      </div>

      <div class="detalhes">
        <h1 class="titulo">{{ produto.nome }}</h1>

        <div class="avaliacao">
          ⭐⭐⭐⭐☆ <span>4.5/5</span>
        </div>

        <div class="preco-box">
          <span class="preco-atual">R$ {{ produto.preco }}</span>
        </div>

        <p class="descricao">{{ produto.descricao }}</p>


        <div class="quantidade">
          <button @click="quantidade--" :disabled="quantidade === 1">−</button>
          <span>{{ quantidade }}</span>
          <button @click="quantidade++">+</button>
        </div>

        <button class="car" @click="adicionarAoCarrinho">Adicionar ao carrinho</button>
      </div>

    </div>

    <div v-else class="carregando">Carregando produto...</div>
    <button @click="$router.back()" class="btn-voltar">← Voltar</button>
  </div>
</template>
<style scoped>
.vizualizar-page {
  background-color: #fff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-voltar {
  align-self: flex-start;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 20px;
}

.produto-container {
  display: flex;
  gap: 50px;
  max-width: 900px;
  background: #fff;
  flex-wrap: wrap;
  justify-content: center;
}

.imagem-box img {
  width: 300px;
  max-width: 100%;
  border-radius: 10px;
}

.detalhes {
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: 'Work Sans', sans-serif;
}

.titulo {
  font-weight: 800;
  font-size: 1.8rem;
  margin-bottom: 8px;
}

.avaliacao {
  color: #f5b800;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.preco-box {
  margin-bottom: 15px;
}

.preco-atual {
  font-size: 1.4rem;
  font-weight: bold;
}

.descricao {
  color: #555;
  font-size: 0.95rem;
  margin: 10px 0 20px;
  max-width: 400px;
}

.quantidade {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.quantidade button {
  background: #eee;
  border: none;
  border-radius: 5px;
  padding: 6px 10px;
  cursor: pointer;
}

.car {
  background: black;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
}

.carregando {
  color: #555;
  font-family: 'Work Sans', sans-serif;
  text-align: center;
}

/* ====== RESPONSIVO ====== */

/* Mobile (até 768px) */
@media (max-width: 768px) {
  .produto-container {
    flex-direction: column;
    gap: 20px;
    padding: 10px;
  }

  .imagem-box img {
    width: 100%;
  }

  .detalhes {
    align-items: center;
    text-align: center;
  }

  .descricao {
    max-width: 90%;
  }

  .quantidade {
    justify-content: center;
  }

  .car {
    width: 80%;
  }
}

/* Tablet (769px a 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  .produto-container {
    gap: 30px;
    padding: 20px;
  }

  .imagem-box img {
    width: 250px;
  }

  .descricao {
    max-width: 300px;
  }

  .car {
    width: 60%;
  }
}
</style>
