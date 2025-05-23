<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
  <main class="main">
    <div class="container">
      <div class="login">
      <div class="inicio"><h1>Zebrão</h1>
      <p>A melhor experiencia</p></div>
      <div class="dados">
      <h3>Cadastre-se</h3>
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
  z-index: 1;
}
.container{
    display: flex;
    flex-direction: row;
    margin: 60px;

  
}
.inicio h1{

  font-size: 64px;
  font-weight: bold;
  background: linear-gradient(to right, #4299e1, #1a365d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0px;
}
.inicio p{
    color: #555555;
    margin: 0px;
    font-size: 13px;
}
.login{
    background-color: white;
    padding: 50px;
    border-radius: 10px;
}
.inicio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0px;
    font-family: "Poppins", sans-serif;
}
.login img{
    border-radius: 10px;
}
.dados h3{
    color: #4A90E2;
}
</style>
