<template>
  <header class="header">
    <div class="logo">
      <div class="imgLogo">
        <img src="/src/assets/logo.png" alt="Logo" />
      </div>
      <div class="nome">
        <p class="p1">Zebrão</p>
        <p class="p2">Sorvetes</p>
      </div>
    </div>

    <!-- MENU DESKTOP -->
    <div class="links">
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/">Início</RouterLink>

      <div class="dropdown">
        <button class="dropbtn">Categorias</button>
        <div class="dropdown-content">
          <RouterLink to="/Acai">Açaí</RouterLink>
          <RouterLink to="/Geladinho">Geladinho</RouterLink>
          <RouterLink to="/Picole">Picolé</RouterLink>
          <RouterLink to="/Pote">Pote</RouterLink>
        </div>
      </div>

      <RouterLink to="/carrinho">Carrinho</RouterLink>
      <RouterLink to="/compras-pagas">Compras (Pagas)</RouterLink>
    </div>

    <!-- BOTÃO HAMBÚRGUER -->
    <div class="hamburguer" @click="menuOpen = !menuOpen">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>

  <!-- MENU MOBILE -->
  <div class="menu-mobile" :class="{ show: menuOpen }">
    <RouterLink @click="closeMenu" to="/login">Login</RouterLink>
    <RouterLink @click="closeMenu" to="/">Início</RouterLink>
    <RouterLink @click="closeMenu" to="/cadastro">Cadastro</RouterLink>
    <RouterLink @click="closeMenu" to="/Acai">Açaí</RouterLink>
    <RouterLink @click="closeMenu" to="/Geladinho">Geladinho</RouterLink>
    <RouterLink @click="closeMenu" to="/Picole">Picolé</RouterLink>
    <RouterLink @click="closeMenu" to="/Pote">Pote</RouterLink>
    <RouterLink @click="closeMenu" to="/carrinho">Carrinho</RouterLink>
    <RouterLink @click="closeMenu" to="/compras-pagas">Compras (Pagas)</RouterLink>
  </div>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<style scoped>
/* ===== HEADER ===== */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  width: 100%;
  box-sizing: border-box;
  background: white;
  z-index: 10;
  position: relative;
}

/* LOGO */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.imgLogo img {
  width: 60px;
}

.p1, .p2 {
  margin: 0;
  font-family: 'Work Sans', sans-serif;
  font-size: 18px;
}

.p2 {
  color: #2867b2;
}

/* LINKS (Desktop) */
.links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.links a {
  text-decoration: none;
  color: black;
  font-family: 'Work Sans', sans-serif;
  position: relative;
}

.links a::after,
.dropbtn::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0;
  height: 2px;
  background: black;
  transition: 0.3s;
}

.links a:hover::after,
.dropbtn:hover::after {
  width: 100%;
}

/* DROPDOWN */
.dropdown {
  position: relative;
}

.dropbtn {
  background: none;
  border: none;
  font-family: 'Work Sans', sans-serif;
  cursor: pointer;
  padding: 10px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background: white;
  min-width: 150px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  border-radius: 6px;
  padding: 8px 0;
  z-index: 20;
}

.dropdown-content a {
  padding: 10px 16px;
  display: block;
  color: black;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* ===== HAMBURGUER ===== */
.hamburguer {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.hamburguer span {
  width: 25px;
  height: 3px;
  background: black;
  border-radius: 4px;
}

/* ===== MENU MOBILE ===== */
.menu-mobile {
  position: fixed;
  top: 0;
  right: -100%;
  width: 70%;
  height: 100vh;
  background: white;
  padding: 30px 20px;
  box-shadow: -3px 0 10px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: 0.4s ease;
  z-index: 100;
}

.menu-mobile.show {
  right: 0;
}

.menu-mobile a {
  text-decoration: none;
  font-family: 'Work Sans', sans-serif;
  font-size: 20px;
  color: black;
}

/* ===== RESPONSIVO ===== */
@media (max-width: 850px) {
  .links {
    display: none;
  }

  .hamburguer {
    display: flex;
  }

  .imgLogo img {
    width: 50px;
  }
}
</style>
