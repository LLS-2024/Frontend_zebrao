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
        <img src="/acai/image 384.png" alt="" />
      </div>
    </div>

    <div class="cont2">
      <div>
        <p>Refresque seu dia e carregue suas energias com o sabor irresistível do açaí!</p>
      </div>
      <div class="con3">
        <div class="img1"><img src="/acai/image 397.png" alt=""></div>
        <div class="img2"><img src="/acai/image 398.png" alt=""></div>
      </div>
    </div>

    <div class="cont3">
      <div>
        <p>
          O açaí é rico em antioxidantes, que ajudam a combater os radicais livres e a prevenir o envelhecimento precoce e algumas doenças. Também é bom para a saúde do coração, já que possui gorduras boas que contribuem para o controle do colesterol. Outro ponto importante é que ele fornece bastante energia, sendo muito útil para quem pratica atividades físicas, pois ajuda na recuperação muscular e dá disposição.
        </p>
      </div>
      <div><img src="/acai/image 399.png" alt=""></div>
    </div>

    <div class="cont4">
      <div><h2>Com ingredientes naturais</h2></div>
      <div class="deco"><img src="/acai/shape.png" alt=""></div>
      <div class="imgs">
        <div><img src="/acai/1.png" alt=""></div>
        <div><img src="/acai/28.png" alt=""></div>
        <div><img src="/acai/29.png" alt=""></div>
        <div><img src="/acai/30.png" alt=""></div>
        <div><img src="/acai/31.png" alt=""></div>
      </div>
    </div>

    <div class="cont5">
      <AcaiCompo />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
}

/* ====== CONT1 ====== */
.cont1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
  gap: 20px;
  box-sizing: border-box;
}

.con1 p {
  font-size: 40px;
  font-weight: 800;
  margin: 0;
  color: #533931;
  font-family: 'Work Sans', sans-serif;
}

.con1 span {
  color: #6A148C;
}

.cont1 img {
  width: 100%;
  max-width: 650px;
  height: auto;
  object-fit: contain;
}

/* ====== CONT2 ====== */
.cont2 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E0D8E5;
  padding: 20px;
  flex-wrap: wrap;
  gap: 20px;
}

.cont2 p {
  font-family: 'Work Sans', sans-serif;
  font-weight: 800;
  text-align: center;
  width: 100%;
}

.con3 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.con3 img {
  width: 100%;
  max-width: 200px;
  height: auto;
  object-fit: contain;
}

/* ====== CONT3 ====== */
.cont3 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 20px;
  gap: 20px;
}

.cont3 img {
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: contain;
}

.cont3 p {
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
  margin: 0;
  text-align: center;
  max-width: 500px;
}

/* ====== CONT4 ====== */
.cont4 {
  text-align: center;
  padding: 30px 10px;
}

.cont4 .imgs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.cont4 .imgs img {
  width: 100%;
  max-width: 150px;
  height: auto;
  object-fit: contain;
}

.cont4 .deco img {
  width: 100%;
  max-width: 200px;
  height: auto;
  margin: 10px 0;
}

/* ====== CONT5 ====== */
.cont5 {
  width: 100%;
  padding: 20px;
}

/* ====== MEDIA QUERIES ====== */

/* Mobile */
@media (max-width: 768px) {
  .cont1 {
    flex-direction: column;
    text-align: center;
  }

  .con1 p {
    font-size: 28px;
    line-height: 1.2;
  }

  .cont1 img {
    max-width: 100%;
  }

  .con3 img {
    max-width: 150px;
  }

  .cont3 {
    flex-direction: column;
  }

  .cont3 img {
    max-width: 90%;
  }

  .cont4 .imgs img {
    max-width: 100px;
  }

  .cont4 .deco img {
    max-width: 150px;
  }
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  .cont1 img {
    max-width: 450px;
  }

  .con1 p {
    font-size: 32px;
  }

  .con3 img {
    max-width: 180px;
  }

  .cont3 img {
    max-width: 60%;
  }

  .cont4 .imgs img {
    max-width: 130px;
  }

  .cont4 .deco img {
    max-width: 180px;
  }
}
</style>
