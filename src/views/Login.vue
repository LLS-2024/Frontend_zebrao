<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import '@passageidentity/passage-elements/passage-auth';

const APP_ID = import.meta.env.VITE_PASSAGE_APP_ID;

// import FormLoginCompo from '@/components/FormLoginCompo.vue';
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="login">
      <div class="inicio"><h1>Zebrão</h1>
      <p>A melhor experiencia</p></div>
      <div class="authContainer">
        <passage-auth :app-id="APP_ID"></passage-auth>
      </div>
      </div>
      <div><img src="/login/image.png" alt="Imagem nítida" /></div>
    </div>
  </main>
</template>

<style scoped>
.main {
  position: relative;
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: "Poppins", sans-serif;
}

.main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/login/fundo.png');
  background-size: cover;
  background-position: center;
  filter: blur(5px);
  z-index: 0;
}

.main > * {
  position: relative;
}

.container {
  display: flex;
  flex-direction: row;
  margin: 60px;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

.inicio h1 {
  font-size: 64px;
  font-weight: bold;
  background: linear-gradient(to right, #4299e1, #1a365d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0px;
}

.inicio p {
  color: #555555;
  margin: 0px;
  font-size: 13px;
}

.login {
  background-color: white;
  padding: 50px;
  border-radius: 10px;
  max-width: 380px;
  width: 100%;
}

.inicio {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Poppins", sans-serif;
}

.login img {
  border-radius: 10px;
}

.dados h3 {
  color: #4A90E2;
}

/* ----------------------------------------------------------
   📱 MOBILE (até 768px)
---------------------------------------------------------- */
@media (max-width: 768px) {
  .main {
    height: auto;
    padding: 20px 0;
  }

  .container {
    flex-direction: column;
    margin: 20px;
    gap: 20px;
  }

  .inicio h1 {
    font-size: 40px;
    text-align: center;
    width: 100%;
  }

  .inicio p {
    text-align: center;
    font-size: 14px;
  }

  .login {
    padding: 30px;
    width: 90%;
  }

  .container img {
    width: 80%;
    max-width: 300px;
  }
}

/* ----------------------------------------------------------
   📱 TABLET (768px – 1024px)
---------------------------------------------------------- */
@media (max-width: 1024px) and (min-width: 769px) {
  .container {
    flex-direction: column;
    gap: 30px;
    margin: 40px;
  }

  .inicio h1 {
    font-size: 54px;
    text-align: center;
  }

  .inicio p {
    font-size: 15px;
    text-align: center;
  }

  .login {
    width: 80%;
    max-width: 450px;
    padding: 40px;
  }

  .container img {
    width: 350px;
  }
}

</style>
