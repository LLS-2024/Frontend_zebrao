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

/* =======================
      SEÇÃO 1
======================= */
.cont1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 40px 20px;
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
  object-fit: contain;
}

.con2 p {
  font-weight: 300;
  color: #DBC234;
  font-size: 20px;
  font-family: 'Work Sans', sans-serif;
}

/* =======================
      SEÇÃO 2
======================= */
.cont2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #BBF8DB;
  padding: 40px 100px;
  gap: 40px;
}

.cont2 p {
  font-family: 'Work Sans', sans-serif;
  font-weight: 800;
}

.con3 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.cont2 .img1 img,
.cont2 .img2 img {
  width: 200px;
  height: 200px;
}

/* =======================
      SEÇÃO 3
======================= */
.cont3 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 50px 200px;
  align-items: center;
  gap: 30px;
}

.cont3 img {
  width: 400px;
  height: 400px;
  object-fit: contain;
}

.cont3 p {
  font-family: 'Work Sans', sans-serif;
}

/* =======================
      SEÇÃO 4
======================= */
.cont4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
}

.cont4 .deco img {
  width: 250px;
  height: 70px;
  padding: 20px;
}

.cont4 .imgs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.cont4 .imgs img {
  width: 150px;
  height: 200px;
  padding: 20px;
}

/* =======================
      SEÇÃO 5
======================= */
.cont5 {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

/* ============================================
      📱 MOBILE — até 480px
============================================ */
@media (max-width: 480px) {

  .cont1 {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }

  .con1 p {
    font-size: 28px;
  }

  .cont1 img {
    width: 280px;
    height: auto;
  }

  .con2 p {
    font-size: 16px;
  }

  .cont2 {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    text-align: center;
  }

  .cont2 p {
    font-size: 14px;
  }

  .cont2 .img1 img,
  .cont2 .img2 img {
    width: 150px;
    height: 150px;
  }

  .cont3 {
    flex-direction: column;
    padding: 20px;
    text-align: center;
  }

  .cont3 img {
    width: 250px;
    height: auto;
  }

  .cont4 .imgs img {
    width: 120px;
    height: 160px;
    padding: 10px;
  }

  .cont4 .deco img {
    width: 180px;
  }
}

/* ============================================
      📲 TABLET — 481px a 768px
============================================ */
@media (min-width: 481px) and (max-width: 768px) {

  .cont1 {
    flex-direction: column;
    text-align: center;
  }

  .cont1 img {
    width: 420px;
    height: auto;
  }

  .con1 p {
    font-size: 32px;
  }

  .cont2 {
    flex-direction: column;
    padding: 30px;
    gap: 25px;
  }

  .cont2 .img1 img,
  .cont2 .img2 img {
    width: 170px;
    height: 170px;
  }

  .cont3 {
    flex-direction: column;
    padding: 30px;
  }

  .cont3 img {
    width: 320px;
    height: auto;
  }

  .cont4 .imgs img {
    width: 140px;
    height: 180px;
  }
}

/* ============================================
   💻 TELAS MÉDIAS — 769px a 1024px
============================================ */
@media (min-width: 769px) and (max-width: 1024px) {

  .cont1 img {
    width: 500px;
  }

  .cont3 {
    padding: 40px 60px;
  }

  .cont3 img {
    width: 350px;
  }
}

</style>
