<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const nome = ref('')
const email = ref('')
const senha = ref('')
const erro = ref('')

const entrar = () => {
  erro.value = ''

  if (!nome.value || !email.value || !senha.value) {
    erro.value = 'Preencha todos os campos.'
    return
  }

  if (senha.value.length < 8) {
    erro.value = 'A senha deve ter no mínimo 8 caracteres.'
    return
  }

  router.push('/')
}
</script>

<template>
  <section>
    <div class="dados">
      <div class="nome">
        <p><label for="nome">Nome</label></p>
        <input type="text" v-model="nome" id="nome" />
      </div>

      <div class="email">
        <p><label for="email">Email</label></p>
        <input type="email" v-model="email" id="email" />
      </div>
    </div>

    <div class="senha">
      <p><label for="senha">Senha</label></p>
      <input type="password" v-model="senha" id="senha" name="senha" />
    </div>

    <div>
      <button @click="entrar" type="button">Entrar</button>
    </div>

    <p v-if="erro" style="color: red; margin-top: 10px;">{{ erro }}</p>
  </section>
</template>

<style scoped>
.dados {
  display: flex;
  flex-direction: row;
}
.dados .nome,
.dados .email {
  margin: 8px;
}
</style>
