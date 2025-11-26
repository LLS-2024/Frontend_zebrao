<script setup>
import { onMounted } from 'vue';

import { useAuthStore } from '@/stores/auth';
import SorveteHomeCompo from '@/components/SorveteHomeCompo.vue'


const authStore = useAuthStore();

const getUserInfo = async () => {
  // O código de autenticação permanece inalterado, apenas garantindo
  // que o token de autenticação seja configurado.
  const authToken = localStorage.getItem('psg_auth_token');
  console.log(authToken);
  await authStore.setToken(authToken);
};


onMounted(() => {
  getUserInfo();
});

</script>

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
    <div class="text"><h2>Com ingredientes naturais</h2></div>
    <div class="deco"><img src="/public/pagInicial/shape.png" alt=""></div>
    <div class="imgs">
<div><img src="/public/pagInicial/27.png" alt=""></div>
<div><img src="/public/pagInicial/28 (1).png" alt=""></div>
<div><img src="/public/pagInicial/29.png" alt=""></div>
<div><img src="/public/pagInicial/30.png" alt=""></div>
<div><img src="/public/pagInicial/31.png" alt=""></div>

    </div>
    </div>
    <div class="cont5">
      <SorveteHomeCompo />
    </div>
    <div class="cont6">
    <div class="texto"><div><h2>Sobre nós</h2></div>
    <div class="deco"><img src="/public/pagInicial/shape.png" alt=""></div></div>
    <div class="div">
    <div class="sobre"><div class="surgi"><p>A sorveteria Zebrão surgiu nos anos 80, em uma época marcada por cores vibrantes, músicas animadas e um desejo coletivo de aproveitar momentos simples e deliciosos. Localizada em uma esquina movimentada da cidade, Zebrão logo se tornou um ponto de encontro para famílias, amigos e jovens que buscavam refrescar-se com um bom sorvete depois de um dia quente.</p></div>
    <div class="surgi"><p>Com o tempo, a sorveteria se tornou famosa não apenas pelos sabores únicos e artesanais, mas também pelo ambiente animado e acolhedor. Cadeiras coloridas, músicas tocando de um rádio antigo e crianças correndo ao redor com casquinhas em mãos faziam parte do cenário diário.</p></div></div>
    <div class="nos"><img src="/public/pagInicial/image 379.png" alt=""></div>
    </div></div>
  </main>
</template>
<style scoped>
/* =================================================== */
/* ESTILOS BASE (DESKTOP) - Manutenção da estética original */
/* =================================================== */
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
    padding: 20px;
}

.con1 p {
    font-size: 40px;
    color: #533931;
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    margin: 0px;
}
.con1 span {
    color: #1e9afa; /* COR TEMA SORVETE */
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
    background-color: #FFF0F4; /* COR DE FUNDO TEMA SORVETE */
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
    margin-left: 300px; /* Esta margem será removida na versão mobile */
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
    gap: 10px;
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
.cont6{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
}
.cont6 h2{
    font-family: 'Work Sans', sans-serif;
    margin: 0px;
}
.div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.sobre{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 600px; /* Esta largura será ajustada na versão mobile */
    background-color: #D5EEE8;
}
.surgi{
    padding: 20px;
    margin: 10px;
    font-family: 'Work Sans', sans-serif;
    font-size: 18px;
    color: #464746;
    font-weight: 300;
    background-color: white;
}
.nos img{
    width: 400px;
    height: 480px;
}
.cont6 .deco img{
    width: 200px;
    height: 50px;
    padding: 20px;
}
.texto{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* =================================================== */
/* RESPONSIVIDADE (TABLET & MOBILE) */
/* =================================================== */

/* Telas até 992px (Tablets em Paisagem) */
@media (max-width: 992px) {
    /* Redução de padding e fontes */
    .cont3 {
        padding: 30px; 
    }
    .cont3 h2 {
        font-size: 24px;
    }
    .cont3 p, .surgi p {
        font-size: 16px;
    }
    .cont1 img {
        width: 450px;
        height: auto;
    }
    .sobre {
        width: 100%;
        max-width: 500px;
    }
}

/* Telas até 768px (Tablets em Retrato e Celulares Grandes) */
@media (max-width: 768px) {
    /* 1. Contêiner 1: Título e Imagem */
    .cont1 {
        flex-direction: column;
        text-align: center;
    }
    .cont1 img {
        width: 100%;
        max-width: 350px;
        height: auto;
        margin-top: 20px;
    }
    .con1 p {
        font-size: 30px;
    }

    /* 2. Contêiner 2: Texto e Ícones */
    .cont2 {
        flex-direction: column;
        padding: 30px 10px;
    }
    .icon1 {
        margin-left: 0; /* Remove a margem fixa */
        justify-content: center;
        flex-wrap: wrap; 
        width: 100%;
    }
    .icon1 img {
        width: 80px;
        height: auto;
        padding: 10px;
    }

    /* 3. Contêiner 3: Benefícios */
    .cont3 {
        flex-direction: column;
        text-align: center;
        padding: 20px;
    }
    .cont3 img {
        width: 100%;
        max-width: 300px;
        height: auto;
    }

    /* 4. Contêiner 4: Ingredientes */
    .cont4 .imgs img {
        width: 100px;
        height: 150px;
        padding: 10px;
    }

    /* 5. Contêiner 6: Sobre Nós */
    .div {
        flex-direction: column; /* Empilha texto e imagem */
    }
    .sobre {
        width: 95%; 
        padding: 10px;
    }
    .nos img {
        width: 100%;
        max-width: 400px;
        height: auto;
        margin-top: 20px;
    }
    .cont6 {
        padding: 30px 10px;
    }
}

/* Telas até 480px (Celulares menores) */
@media (max-width: 480px) {
    .con1 p {
        font-size: 24px;
    }
    .icon1 img {
        width: 60px;
    }
    .cont4 .deco img {
        width: 200px;
        height: auto;
    }
}
</style>