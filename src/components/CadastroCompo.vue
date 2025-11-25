<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
import axios from 'axios'

const nome = ref('')
const email = ref('')
const senha = ref('')
const confirmarSenha = ref('')
const dataNascimento = ref('')
const cep = ref('')
const cpf = ref('')
const erro = ref('')

const cadastrar = async () => {
  erro.value = ''

  if (!nome.value || !email.value || !senha.value || !confirmarSenha.value || !dataNascimento.value || !cep.value || !cpf.value) {
    erro.value = 'Preencha todos os campos.'
    return
  }

  if (senha.value.length < 8) {
    erro.value = 'A senha deve ter no mínimo 8 caracteres.'
    return
  }

  if (senha.value !== confirmarSenha.value) {
    erro.value = 'As senhas não coincidem.'
    return
  }

  await axios.post('http://localhost:8000/api/users/', {
    name: nome.value,
    email: email.value,
    password: senha.value,
    cep: cep.value,
    cpf: cpf.value
  })

  alert('Cadastro realizado com sucesso!')
}
</script>

<template>
  <div class="cadastro-container">
    <h1>Cadastre-se aqui!</h1>
    <form @submit.prevent="cadastrar">
      <div class="form-group">
        <input type="text" v-model="nome" placeholder="Nome completo" />
      </div>

      <div class="form-group">
        <input type="email" v-model="email" placeholder="E-mail" />
      </div>

      <div class="form-group">
        <input type="password" v-model="senha" placeholder="Senha" />
      </div>

      <div class="form-group">
        <input type="password" v-model="confirmarSenha" placeholder="Confirmar senha" />
      </div>

      <div class="form-group">
        <label for="dataNascimento">Data de Nascimento:</label>
        <input type="date" v-model="dataNascimento" />
      </div>

      <div class="form-group">
        <input type="text" v-model="cep" placeholder="CEP" />
      </div>

      <div class="form-group">
        <input type="text" v-model="cpf" placeholder="CPF" />
      </div>

      <p class="termos">
        As pessoas que usam nosso serviço podem ter carregado suas informações de contato no Medium. Saiba mais.<br><br>
        Ao clicar em Cadastre-se, você concorda com nossos Termos, Política de Privacidade e Política de Cookies.
      </p>

      <button type="submit">Cadastre-se</button>

      <p v-if="erro" class="erro">{{ erro }}</p>
    </form>
  </div>
</template>

<style scoped>
.cadastro-container {
  background-color: #AECCE8;
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #92caff;
  border-radius: 10px;
  width: 90%;
  box-sizing: border-box;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.25rem;
  color: white;
}

input {
  width: 100%;
  padding: 0.7rem;
  border-radius: 6px;
  border: none;
  font-size: 1rem;
}

button {
  display: block;
  margin: 1rem auto 0 auto;
  padding: 0.7rem 1.5rem;
  background-color: #44626D;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

h1 {
  text-align: center;
  color: white;
  font-family: 'Work Sans', sans-serif;
}

p {
  font-family: 'Work Sans', sans-serif;
}

.erro {
  color: red;
  text-align: center;
  margin-top: 10px;
}

/* 🔥 RESPONSIVIDADE */
@media (max-width: 480px) {
  .cadastro-container {
    padding: 1.2rem;
    margin-top: 1rem;
  }

  h1 {
    font-size: 1.3rem;
  }

  input {
    font-size: 0.9rem;
    padding: 0.6rem;
  }

  button {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }

  .termos {
    font-size: 0.85rem;
  }
}
</style>
