<script setup>
import { RouterView } from 'vue-router';
import HeaderCompo from './components/HeaderCompo.vue';
import FooterCompo from './components/FooterCompo.vue';

</script>

<template>
 <HeaderCompo/>
  <RouterView />
  <FooterCompo/>
</template>

<style scoped>

</style>
