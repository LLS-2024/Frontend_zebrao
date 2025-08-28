<script setup></script>

<template>
  <main>
    <div class="cont1">
      <div>
        <div class="con1">
          <p>Sabores do mundo</p>
          <p>em forma <span>De Sorvete</span></p>
        </div>
        <div class="con2">
          <p>Sabores da felicidade</p>
        </div>
      </div>
      <div>
        <img src="/public/pagInicial/sorvticon1.png" alt="" />
      </div>
    </div>
    <div class="cont2">
      <div><p>"Bateu vontade de um sorvete gourmet?</p></div>
      <div class="icon1">
       <div><img src="/public/pagInicial/1.png" alt=""></div>
      <div><img src="/public/pagInicial/2.png" alt=""></div>
       <div><img src="/public/pagInicial/3.png" alt=""></div></div>

    </div>
    <div class="cont3">
      <div class="texto">
      <h2>🎉 Você sabia? Sorvete também tem seus benefícios! 🍦✨</h2>
      <p>Muito mais do que uma sobremesa saborosa, o sorvete pode oferecer diversos benefícios quando consumido com moderação. Por ser feito com leite ou ingredientes naturais, ele contém cálcio e fósforo, importantes para a saúde dos ossos e dos dentes.
Além disso, o sorvete é uma fonte rápida de energia, ideal para momentos em que precisamos de um estímulo extra. E não para por aí: ele também pode melhorar o humor, já que estimula a liberação de dopamina, o neurotransmissor responsável pela sensação de prazer e bem-estar.</p>
      </div>
      <div><img src="/public/pagInicial/sorvt.png" alt=""></div>

    </div>
    <div class="cont4">
    
    </div>
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.con2 p {
  font-weight: 300;
  color: #533931;
  font-size: 20px;
  font-family: 'Work Sans', sans-serif;
}
.cont1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.con1 p {
  font-size: 40px;
  color: #533931;
  font-family: 'Work Sans', sans-serif;
  font-weight: 800;
  margin: 0px;
}
.con1 span {
  color: #1e9afa;
}
.cont1 img {
  width: 550px;
  height: 400px;
}
.cont2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family:'Work Sans', sans-serif;
  font-size: 20px;
  font-weight: 800;
  background-color: #FFF0F4;
  padding: 50px;
}
.icon1 img{
    width: 110px;
    height: 150px;
    padding: 20px;
}
.icon1{
display: flex;
flex-direction: row;
justify-content: space-around;
margin-left: 300px;

}
.cont3{
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 50px 200px;
  align-items: center;
}
.cont3 img{
  width: 400px;
  height: 500px;
}
.cont3 h2{
  font-family: 'Work Sans', sans-serif;
  font-size: 30px;
  font-weight: 600;
}
.cont3 p{
  font-family: 'Work Sans', sans-serif;
  font-size: 18px;
  color: #464746;
  font-weight: 300;
}
</style>
