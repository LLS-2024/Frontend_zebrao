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
  width: 100%;
  height: 200px;
  margin-top: 50px;
}

/* 🔥 Responsivo para telas menores */
@media (max-width: 768px) {
  .footer {
    height: 150px;
    margin-top: 30px;
  }
}

@media (max-width: 480px) {
  .footer {
    height: 120px;
    margin-top: 20px;
  }
}
</style>
