<template>
  <div class="footer" :style="{ backgroundColor: bgColor }"></div>
</template>

<script setup>
defineProps({
  bgColor: {
    type: String,
    default: "#A2C7FF"
  }
})
</script>

<style scoped>
.footer {
  height: 200px;
  margin-top: 50px;
}
</style>
