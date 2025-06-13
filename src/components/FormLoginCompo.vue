<script setup>
  import { ref } from 'vue'

const dados = ref({
  nome: '',
  senha: '',
  email: '',
})
</script>

<template>
    <section>
    <div class="dados"> <div class="nome"><p><label for="nome">Nome</label> </p>
    <input type="text" v-model="dados.nome" id="nome" /></div>
    <div class="email">
    <p><label for="email">Email</label></p>
    <input type="email" v-model="dados.email" id="email"/>
    </div>
    
    </div>
   <div class="senha">
   <p><label for="senha">Senha</label></p>
   <input type="password" v-model="dados.senha" id="senha" name="senha">
   </div>
   <div>
   <button @click="enviar" type="submit">Entrar</button>
   </div>
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