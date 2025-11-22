<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import '@passageidentity/passage-elements/passage-auth';

const APP_ID = import.meta.env.VITE_PASSAGE_APP_ID;
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="login">
        <div class="inicio">
          <h1>Zebrão</h1>
          <p>A melhor experiencia</p>
        </div>

        <div class="authContainer">
          <passage-auth :app-id="APP_ID"></passage-auth>
        </div>
      </div>

      <div class="imgBox">
        <img src="/login/image.png" alt="Imagem nítida" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Poppins", sans-serif;
  padding: 20px;
}

.main::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/login/fundo.png');
  background-size: cover;
  background-position: center;
  filter: blur(5px);
  z-index: 0;
}

.main > * {
  position: relative;
  z-index: 1;
}

.container {
  display: flex;
  gap: 40px;
  align-items: center;

  /* Responsivo */
  flex-wrap: wrap;
  justify-content: center;
}

.login {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  max-width: 380px;
  width: 100%;
  box-shadow: 0px 8px 20px rgba(0,0,0,0.1);
}

.inicio h1 {
  font-size: 48px;
  font-weight: bold;
  margin: 0;
  background: linear-gradient(to right, #4299e1, #1a365d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.inicio p {
  color: #555;
  margin: 0;
  font-size: 14px;
}

.authContainer {
  margin-top: 20px;
}

.imgBox img {
  width: 450px;
  max-width: 100%;
  border-radius: 12px;
  object-fit: cover;
}

/* 📱 Mobile */
@media (max-width: 900px) {
  .imgBox {
    display: none;
  }

  .login {
    max-width: 90%;
  }

  .inicio h1 {
    font-size: 38px;
  }
}

/* 📱 Pequenos */
@media (max-width: 500px) {
  .login {
    padding: 30px;
  }

  .inicio h1 {
    font-size: 32px;
  }
}
</style>
