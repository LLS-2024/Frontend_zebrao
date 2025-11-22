<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import axios from "axios"

const route = useRoute()
const produto = ref(null)
const quantidade = ref(1)
const carrinho = ref(null)
const user = ref(null)

onMounted(async () => {
  try {
    const resUser = await axios.get('http://localhost:8000/api/users/me/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("psg_auth_token")}`
      }
    })
    const ResCarrinho = await axios.get('http://localhost:8000/api/carrinhos/?usuario_id=' + resUser.data.id)
    const resProduto = await axios.get(`http://localhost:8000/api/produtos/${route.params.id}/`)
    produto.value = resProduto.data
    carrinho.value = ResCarrinho.data.results[0]
    user.value = resUser.data
    console.log(carrinho.value)
    console.log("usuário" + user.value)
    console.log(`token: ${localStorage.getItem("psg_auth_token")}`)
  } catch (err) {
    console.error("Erro ao carregar produto:", err)
  }
})

async function adicionarAoCarrinho() {
  if (!carrinho.value) {
    alert("Carrinho não encontrado para o usuário.")
    return
  }
  const itemExistente = carrinho.value.itens.find(item => item.produto === produto.value.id)

  console.log(itemExistente)

  if (itemExistente) {

    try {
      const resUpdate = await axios.patch(`http://localhost:8000/api/itens-carrinho/${itemExistente.id}/`, {
        quantidade: itemExistente.quantidade + quantidade.value
      })
      itemExistente.quantidade += quantidade.value
    } catch (err) {
      console.error("Erro ao atualizar item no carrinho:", err)
      alert("Erro ao atualizar item no carrinho.")
      return
    }


  } else {

    try {
      const resAdd = await axios.post('http://localhost:8000/api/itens-carrinho/', {
        carrinho: carrinho.value.id,
        produto: produto.value.id,
        quantidade: quantidade.value
      })
      carrinho.value.itens.push(resAdd.data)
    } catch (err) {
      console.error("Erro ao adicionar item ao carrinho:", err)
      alert("Erro ao adicionar item ao carrinho.")
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
