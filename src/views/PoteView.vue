<script setup>
import PoteCompo from '@/components/PoteCompo.vue';
</script>

<template>
  <main>
    <!-- ========================= CONT1 ========================= -->
    <div class="cont1">
      <div class="cont1-text">
        <div class="con1">
          <p>Sabores do mundo</p>
          <p>em forma <span>De Pote</span></p>
        </div>
        <div class="con2">
          <p>Sabores da felicidade</p>
        </div>
      </div>
      <img class="cont1-img" src="/public/pote/image 394.png" alt="" />
    </div>

    <!-- ========================= CONT2 ========================= -->
    <div class="cont2">
      <p>
        "Nada combina melhor com um dia quente do que a refrescância deliciosa de um picolé..."
      </p>

      <div class="con3">
        <div class="img1"><img src="/public/pote/image 414 .png" alt=""></div>
        <div class="img2"><img src="/public/pote/image 415.png" alt=""></div>
      </div>
    </div>

    <!-- ========================= CONT3 ========================= -->
    <div class="cont3">
      <p>
        "Em meio à correria do dia a dia, existem pequenos prazeres capazes de transformar nossa rotina em momentos leves..."
      </p>
      <img src="/public/pote/image 416.png" alt="">
    </div>

    <!-- ========================= CONT4 ========================= -->
    <div class="cont4">
      <h2>Com ingredientes naturais</h2>
      <img class="deco" src="/public/acai/shape.png" alt="">
      <div class="imgs">
        <img src="/public/pote/1.png" alt="">
        <img src="/public/pote/28.png" alt="">
        <img src="/public/pote/29.png" alt="">
        <img src="/public/pote/30.png" alt="">
        <img src="/public/pote/31.png" alt="">
      </div>
    </div>

    <!-- ========================= CONT5 ========================= -->
    <div class="cont5">
      <PoteCompo/>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  height: auto;
}

/* CONT1 */
.cont1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.con1 p {
  font-size: 32px;
  font-weight: 800;
  margin: 0;
  font-family: 'Work Sans', sans-serif;
}

.con1 span {
  color: #3010BD;
}

.con2 p {
  font-weight: 300;
  color: #3010BD;
}

/* CONT2 */
.cont2 {
  background-color: #8192D5;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}

.con3 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.con3 .img1 img,
.con3 .img2 img {
  width: 180px;
  height: auto;
}

/* CONT3 */
.cont3 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  align-items: center;
}

.cont3 p {
  max-width: 600px;
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
  text-align: center;
}

/* CONT4 */
.cont4 {
  text-align: center;
  padding: 20px;
}

.cont4 .imgs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.cont4 .imgs img {
  width: 120px;
  height: auto;
}

.cont4 .deco {
  margin: 10px 0;
}

/* CONT5 */
.cont5 {
  width: 100%;
}

/* RESPONSIVO */
@media (max-width: 600px) {
  .con1 p {
    font-size: 24px;
  }

  .con3 .img1 img,
  .con3 .img2 img {
    width: 100px;
  }

  .cont4 .imgs img {
    width: 90px;
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  .con1 p {
    font-size: 28px;
  }

  .con3 .img1 img,
  .con3 .img2 img {
    width: 140px;
  }

  .cont4 .imgs img {
    width: 110px;
  }
}
</style>
