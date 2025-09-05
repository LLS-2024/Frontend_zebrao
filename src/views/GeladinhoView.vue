<script setup>
import GeladinhoCompo from '@/components/GeladinhoCompo.vue';

</script>
<template>
   <main>
    <div class="cont1">
      <div>
        <div class="con1">
          <p>Sabores do mundo</p>
          <p>em forma <span>De Geladinho</span></p>
        </div>
        <div class="con2">
          <p>Sabores da felicidade</p>
        </div>
      </div>
      <div>
        <img src="/public/geladinho/image 393.png" alt="" />
      </div>
    </div>
    <div class="cont2">
    <div><p>"Nada combina melhor com um dia quente do que a refrescância deliciosa de um picolé. Além de matar a sede, ele traz aquele gostinho de alegria e leveza que transforma qualquer momento em pausa especial.</p></div>
    <div class="con3"> <div class="img1"><img src="/public/geladinho/image 411.png" alt=""></div>
    <div class="img2"><img src="/public/geladinho/image 412.png" alt=""></div></div>

    </div>
    <div class="cont3">
    <div><p>"Em meio à correria do dia a dia, existem pequenos prazeres capazes de transformar nossa rotina em momentos leves e cheios de sabor. Um desses prazeres é tomar um picolé. A cada mordida geladinha, o calor vai embora, o corpo se refresca e a mente encontra uma pausa merecida. Mais do que uma sobremesa, o picolé é um convite para voltar à infância, relembrar dias ensolarados, sorrisos espontâneos e aquela sensação boa de simplicidade."</p></div>
    <div><img src="/public/geladinho/image 413.png" alt=""></div>
    </div>
    <div class="cont4">
      <div><h2>Com ingredientes naturais</h2></div>
      <div class="deco"><img src="/public/geladinho/shape.png" alt=""></div>
      <div class="imgs">
      <div><img src="/public/geladinho/1.png" alt=""></div>
      <div><img src="/public/geladinho/28.png" alt=""></div>
      <div><img src="/public/geladinho/29.png" alt=""></div>
      <div><img src="/public/geladinho/30.png" alt=""></div>
      <div><img src="/public/geladinho/31.png" alt=""></div>
      </div>

    </div>
    <div class="cont5">
    <GeladinhoCompo/>
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
  color: #2CCD95;
}
.cont1 img {
  width: 650px;
  height: 400px;
}
.con2 p{
  color: #DBC234;
}
.cont2{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #BBF8DB;
  padding: 20px 100px;
}
.cont2 p{
  font-family: 'Work Sans', sans-serif;
  font-weight: 800;
}
.cont2 .img1 img{
  width: 200px;
  height: 200px;
  margin-left: 50px;
}
.cont2 .img2 img{
  width: 200px;
  height: 200px;
  margin-left: 50px;
}
.con3{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.con3 .img1{
  align-items: flex-start;
}
.con3 .img2{
  align-items: flex-end;
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
  height: 400px;
}
.cont3 p{
  font-family: 'Work Sans', sans-serif;
  margin-right: 10px;
  }
  .cont4{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cont4 .imgs{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.cont4 .imgs img{
  width: 150px;
  height: 200px;
  padding: 20px;
}
.cont4 .deco img{
  width: 250px;
  height: 70px;
  padding: 20px;

}
.cont4 .text h2{
  font-family: 'Work Sans', sans-serif;
  font-size: 30px;
  font-weight: 600;
  color: black;
}
</style>

