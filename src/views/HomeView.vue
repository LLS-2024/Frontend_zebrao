<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import SorveteHomeCompo from '@/components/SorveteHomeCompo.vue';

const authStore = useAuthStore();

const getUserInfo = async () => {
  const authToken = localStorage.getItem('psg_auth_token');
  await authStore.setToken(authToken);
};

onMounted(() => {
  getUserInfo();
});
</script>

<template>
  <main>
    <!-- ========================= CONT1 ========================= -->
    <div class="cont1">
      <div class="cont1-text">
        <div class="con1">
          <p>Sabores do mundo</p>
          <p>em forma <span>De Sorvete</span></p>
        </div>
        <div class="con2">
          <p>Sabores da felicidade</p>
        </div>
      </div>

      <img class="cont1-img" src="/public/pagInicial/sorvticon1.png" alt="" />
    </div>

    <!-- ========================= CONT2 ========================= -->
    <div class="cont2">
      <p>"Bateu vontade de um sorvete gourmet?</p>

      <div class="icon1">
        <img src="/public/pagInicial/1.png" alt="">
        <img src="/public/pagInicial/2.png" alt="">
        <img src="/public/pagInicial/3.png" alt="">
      </div>
    </div>

    <!-- ========================= CONT3 ========================= -->
    <div class="cont3">
      <div class="texto">
        <h2>🎉 Você sabia? Sorvete também tem seus benefícios! 🍦✨</h2>
        <p>
          Muito mais do que uma sobremesa saborosa, o sorvete pode oferecer diversos benefícios quando consumido com moderação...
        </p>
      </div>

      <img class="cont3-img" src="/public/pagInicial/sorvt.png" alt="">
    </div>

    <!-- ========================= CONT4 ========================= -->
    <div class="cont4">
      <h2 class="text">Com ingredientes naturais</h2>
      <img class="deco" src="/public/pagInicial/shape.png" alt="">

      <div class="imgs">
        <img src="/public/pagInicial/27.png" alt="">
        <img src="/public/pagInicial/28 (1).png" alt="">
        <img src="/public/pagInicial/29.png" alt="">
        <img src="/public/pagInicial/30.png" alt="">
        <img src="/public/pagInicial/31.png" alt="">
      </div>
    </div>

    <!-- ========================= CONT5 ========================= -->
    <div class="cont5">
      <SorveteHomeCompo />
    </div>

    <!-- ========================= CONT6 ========================= -->
    <div class="cont6">
      <h2>Sobre nós</h2>
      <img class="deco" src="/public/pagInicial/shape.png" alt="">

      <div class="about">
        <div class="sobre">
          <p>
            A sorveteria Zebrão surgiu nos anos 80...
          </p>
          <p>
            Com o tempo, a sorveteria se tornou famosa...
          </p>
        </div>

        <img class="nos-img" src="/public/pagInicial/image 379.png" alt="">
      </div>
    </div>
  </main>
</template>

<style scoped>
/* =============================== GERAL =============================== */

main {
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

img {
  max-width: 100%;
  height: auto;
}

/* =============================== CONT1 =============================== */

.cont1 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
  text-align: center;
  gap: 20px;
}

.con1 p {
  font-size: 32px;
  font-weight: 800;
  margin: 0;
  font-family: "Work Sans", sans-serif;
}

.con1 span {
  color: #1e9afa;
}

.con2 p {
  margin: 0;
  font-weight: 300;
  color: #533931;
}

/* =============================== CONT2 =============================== */

.cont2 {
  background: #fff0f4;
  padding: 40px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
}

.icon1 {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.icon1 img {
  width: 100px;
}

/* =============================== CONT3 =============================== */

.cont3 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.cont3 .texto {
  max-width: 600px;
  text-align: center;
}

.cont3 h2 {
  font-size: 26px;
}

.cont3 p {
  font-size: 16px;
}

/* =============================== CONT4 =============================== */

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
  width: 140px;
}

/* =============================== CONT5 =============================== */

.cont5 {
  width: 100%;
}

/* =============================== CONT6 =============================== */

.cont6 {
  text-align: center;
  padding: 20px;
}

.about {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.sobre {
  background: #d5eee8;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
}

.surgi {
  background: white;
  margin: 10px 0;
  padding: 15px;
}

/* ======================= RESPONSIVO GERAL ======================= */

/* MOBILE */
@media (max-width: 600px) {
  .con1 p {
    font-size: 24px;
  }

  .icon1 img {
    width: 70px;
  }

  .cont3 img {
    max-width: 250px;
  }

  .cont4 .imgs img {
    width: 110px;
  }

  .nos-img {
    max-width: 260px;
  }
}

/* TABLET */
@media (min-width: 601px) and (max-width: 900px) {
  .con1 p {
    font-size: 30px;
  }

  .icon1 img {
    width: 90px;
  }

  .cont4 .imgs img {
    width: 130px;
  }
}
</style>
