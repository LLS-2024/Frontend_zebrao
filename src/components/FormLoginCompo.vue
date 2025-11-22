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
  <section class="container">
    <div class="dados">
      <div class="campo">
        <label for="nome">Nome</label>
        <input type="text" v-model="nome" id="nome" />
      </div>

      <div class="campo">
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" />
      </div>
    </div>

    <div class="campo">
      <label for="senha">Senha</label>
      <input type="password" v-model="senha" id="senha" />
    </div>

    <button class="btn" @click="entrar" type="button">Entrar</button>

    <p v-if="erro" class="erro">{{ erro }}</p>
  </section>
</template>

<style scoped>
.container {
  max-width: 450px;
  margin: auto;
  padding: 20px;
}

.dados {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.campo {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.campo label {
  margin-bottom: 5px;
  font-weight: 600;
}

input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;
}

input:focus {
  border-color: #8bb7ff;
}

.btn {
  width: 100%;
  margin-top: 15px;
  padding: 12px;
  background: #5b8cff;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.btn:hover {
  background: #4b7ae0;
}

.erro {
  color: red;
  margin-top: 10px;
  font-size: 14px;
}

@media (min-width: 600px) {
  .dados .campo {
    width: calc(50% - 10px);
  }
}
</style>
