<script setup>
import { RouterView, useRoute } from "vue-router"
import HeaderCompo from "./components/HeaderCompo.vue"
import FooterCompo from "./components/FooterCompo.vue"

const route = useRoute()
</script>

<template>
  <HeaderCompo />
  <RouterView />
  <FooterCompo :bgColor="route.meta.footerColor || '#A2C7FF'" />
</template>

<style scoped>

</style>
