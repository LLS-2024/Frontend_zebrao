<script setup>
import AcaiCompo from '@/components/AcaiCompo.vue';
</script>
<template>
   <main>
    <div class="cont1">
      <div>
        <div class="con1">
          <p>Sabores do mundo</p>
          <p>em forma <span>De Açaí</span></p>
        </div>
        <div class="con2">
          <p>Sabores da felicidade</p>
        </div>
      </div>
      <div>
        <img src="/public/acai/image 384.png" alt="" />
      </div>
    </div>
    <div class="cont2">
    <div><p>Refresque seu dia e carregue suas energias com o sabor irresistível do açaí!</p></div>
    <div class="con3"> <div class="img1"><img src="/public/acai/image 397.png" alt=""></div>
    <div class="img2"><img src="/public/acai/image 398.png" alt=""></div></div>

    </div>
    <div class="cont3">
    <div><p>O açaí é rico em antioxidantes, que ajudam a combater os radicais livres e a prevenir o envelhecimento precoce e algumas doenças. Também é bom para a saúde do coração, já que possui gorduras boas que contribuem para o controle do colesterol. Outro ponto importante é que ele fornece bastante energia, sendo muito útil para quem pratica atividades físicas, pois ajuda na recuperação muscular e dá disposição.</p></div>
    <div><img src="/public/acai/image 399.png" alt=""></div>
    </div>
    <div class="cont4">
      <div><h2>Com ingredientes naturais</h2></div>
      <div class="deco"><img src="/public/acai/shape.png" alt=""></div>
      <div class="imgs">
      <div><img src="/public/acai/1.png" alt=""></div>
      <div><img src="/public/acai/28.png" alt=""></div>
      <div><img src="/public/acai/29.png" alt=""></div>
      <div><img src="/public/acai/30.png" alt=""></div>
      <div><img src="/public/acai/31.png" alt=""></div>
      </div>

    </div>
    <div class="cont5">
    <AcaiCompo/>
    </div>
   </main>
</template>
<style scoped>main {
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
  color: #6A148C;
}
.cont1 img {
  width: 650px;
  height: 400px;
}
.con2 p{
  color: #6A148C;
}
.cont2{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #E0D8E5;
  padding: 20px;
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
