<template>
        <header class="header">
  <div class="logo">
    <div class="imgLogo">
      <img src="/src/assets/logo.png" alt="" />
    </div>
    <div class="nome">
      <p class="p1">Zebrão</p>
      <p class="p2">Sorvetes</p>
    </div>
  </div>
  <div class="links">
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/">Início</RouterLink>
    <RouterLink to="/cadastro">Cadastro</RouterLink>

  </div>
  <div class="pesquisa"></div>
  <div class="pessoa"></div>
  </header>
</template>
<style scoped>
.header{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
}
.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.p1,
.p2 {
  margin: 0px;
  font-family: 'Work Sans', sans-serif;
}
.p2 {
  color: #2867b2;
}
.links{
    padding: 10px;
}
.links a{
    text-decoration: none;
    color: black;
    padding: 10px;
    font-family: 'Work Sans', sans-serif;
}
</style>
<script setup></script>
