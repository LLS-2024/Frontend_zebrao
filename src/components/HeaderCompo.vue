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
    <div class="dropdown">
  <button class="dropbtn">Categorias</button>
  <div class="dropdown-content">
  <RouterLink to="/Acai">Açaí</RouterLink>
  <RouterLink to="/Picole">Picolé</RouterLink>
  <RouterLink to="/Pote">Pote</RouterLink>
  </div>

  </div>
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
.links a {
  position: relative;
  text-decoration: none;
  color: black;
  padding: 10px;
  font-family: 'Work Sans', sans-serif;
}

.links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0; /* ajusta a distância da linha do texto */
  width: 0;
  height: 2px;
  background: black; /* mesma cor do "Sorvetes" pra combinar */
  transition: width 0.3s ease;
}

.links a:hover::after {
  width: 100%;
}
.dropbtn {
  background-color: white;
  color: black;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  font-family: 'Work Sans', sans-serif;
  position: relative; /* necessário pro ::after */
}

.dropbtn::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 4px;
  width: 0;
  height: 2px;
  background: black;
  transition: width 0.3s ease;
}

.dropbtn:hover::after {
  width: 100%;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: white}

.dropdown:hover .dropdown-content {
  display: block;
}


</style>
<script setup></script>
