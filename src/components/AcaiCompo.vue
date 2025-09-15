<script setup>
import { ref, onMounted } from "vue"
import axios from "axios"

const produtos = ref([])
const categoria = "acai" // use a categoria que realmente existe no banco

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
       <div class="slot"><div><img :src="produto.imagem.url" alt=""></div>
       <div> <p class="nome">
       {{ produto.nome }}
       </p></div></div>

       <div><p class="preco">
        $ {{ produto.preco }}
       </p></div>


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
  width: 150px;
  height: auto;
  background-color: white;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding: 10px;

  & .nome {
    font-family: 'Work Sans', sans-serif;
font-weight: 600;
font-style: normal;
font-size: 15px;
line-height: 100%;
letter-spacing: 0%;

  }

  & .preco {
    color: #888;
  }
}
.slot{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.slot img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
.sorvete-home{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #EBE9F4 ;
  padding: 50px;
}
.sorvt{
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  color: #EBE9F4;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 0px 5px 5px 5px;
  font-family: 'Work Sans', sans-serif;
  cursor: pointer;
}
.buttons button:hover{
  background-color: #582B8F;
  color: white;
  transition: 0.5s;
}
</style>
