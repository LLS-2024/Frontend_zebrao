<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'

const nome = ref('')
const email = ref('')
const senha = ref('')
const confirmarSenha = ref('')
const dataNascimento = ref('')
const cep = ref('')
const cpf = ref('')
const erro = ref('')

const cadastrar = (event) => {
  event.preventDefault()
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

  alert('Cadastro realizado com sucesso!')
}
</script>

<template>
  <div class="cadastro-container">
    <h1>Cadastre-se aqui!</h1>
    <form @submit="cadastrar">
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
        Ao clicar em Cadastre-se, você concorda com nossos Termos, Política de Privacidade e Política de Cookies. Você poderá receber notificações por SMS e cancelar isso quando quiser.
      </p>

      <button type="submit">Cadastre-se</button>

      <p v-if="erro" style="color: red; text-align: center; margin-top: 10px;">{{ erro }}</p>
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
  padding: 0.5rem;
}
button {
  display: block;
  margin: 1rem auto 0 auto;
  padding: 0.5rem 1rem;
  background-color: #44626D;
  color: white;
  border: none;
  cursor: pointer;
}
h1 {
  text-align: center;
  color: white;
  font-family: 'Work Sans', sans-serif;
}
p{
  font-family: 'Work Sans', sans-serif;
}
</style>
