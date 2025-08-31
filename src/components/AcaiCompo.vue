<template>
  <div class="sorvete-home">
  <div class="txt">
    <div><h2>Venha conhecer essas delicias!</h2></div>
<div class="deco"><img src="/public/acai/shape.png" alt=""></div>
<div class="buttons">
<div><button>Top da semana</button></div>
<div><button>Mais buscados</button></div>
<div><button>Produtos novos</button></div>
</div>
  </div>
  <div class="sorvt">  <div class="slot"></div>
  <div class="slot"></div>
  <div class="slot"></div>
  <div class="slot"></div></div>
  <div class="sorvt"><div class="slot"></div>
  <div class="slot"></div>
  <div class="slot"></div>
  <div class="slot"></div></div>


  </div>
</template>
<style scoped>
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
  background-color: #582B8F;
  color: white;
  transition: 0.5s;
}
</style>
