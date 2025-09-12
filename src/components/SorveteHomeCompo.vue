<script setup>
import { ref, onMounted } from "vue"
import axios from "axios"

const produtos = ref([])
const categoria = "sorvete" // use a categoria que realmente existe no banco

onMounted(async () => {
  try {
    const res = await axios.get(`http://localhost:19003/api/produtos?categoria=${categoria}`)
    produtos.value = res.data.results
  } catch (err) {
    console.error("Erro ao buscar produtos:", err.response?.data || err.message)
  }
})
</script>
<template>
  <div class="sorvete-home">
  <div class="txt">
    <div><h2>Venha conhecer essas delicias!</h2></div>
<div class="deco"><img src="/public/pagInicial/shape.png" alt=""></div>
<div class="buttons">
<div><button>Top da semana</button></div>
<div><button>Mais buscados</button></div>
<div><button>Produtos novos</button></div>
</div>
  </div>
  <div class="produtos">
  <div class="produto" v-for="produto in produtos" :key="produto.id">
       <!-- <img src="{{ produto.imagem.url }}" alt=""> - -->
       <img :src="produto.imagem.url" alt="">
       <p class="nome">
       {{ produto.nome }}
       </p>
       <p class="preco">
        $ {{ produto.preco }}
       </p>
  </div>
  </div>
  </div>
</template>
<style scoped>
.produtos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.produto {
  border: 1px solid #ccc;
  background-color: white;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 25vw;

  & img {
    width: 50%;
    height: auto;
    margin-bottom: 10px;
  }

  & .nome {
    font-weight: bold;
    margin-bottom: 5px;
  }

  & .preco {
    color: #888;
  }
}
.sorvete-home{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #FFF0F4 ;
  padding: 50px;
}
.sorvt{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.slot{
  width: 150px;
  height: 200px;
  background-color: white;
  margin: 10px 10px;
}
.txt{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.txt h2{
  font-family: 'Work Sans', sans-serif;
}
.txt .deco img{
  width: 250px;
  height: 70px;
  padding: 20px;

}
.buttons{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.buttons button{
  background-color: white;
  color: #828282;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 0px 5px 5px 5px;
  font-family: 'Work Sans', sans-serif;
  cursor: pointer;
}
.buttons button:hover{
  background-color: #2867b2;
  color: white;
  transition: 0.5s;
}
</style>
