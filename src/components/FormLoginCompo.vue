<script setup>
  import { ref } from 'vue';

  const nome = ref('');
</script>

<template>
    <section>
    <div class="dados"> <div class="nome"><p><label for="nome">Nome</label> </p>
    <input type="text" v-model="nome" id="nome" /></div>
    <div class="email">
    <p><label for="email">Email</label></p>
    <input type="email" v-model="email" id="email"/>
    </div>
    
    </div>
   <div class="senha">
   <p><label for="senha">Senha</label></p>
   <input type="password" id="senha" name="senha">
   </div>
   <div></div>
    </section>
</template>
<style scoped>
.dados{
    display: flex;
    flex-direction: row;
}
.dados .nome, .email{
    margin: 8px;
}
</style>