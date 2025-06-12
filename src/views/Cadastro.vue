<script setup>

</script>
<template>
    <div class="cadastro-container">
      <h1>Cadastre-se aqui!</h1>
      <form>
        <div class="form-group">
          <input type="text" id="nome" required placeholder="Nome completo" />
        </div>

        <div class="form-group">
          <input type="email" id="email" required placeholder="E-mail"/>
        </div>

        <div class="form-group">
          <input type="password" id="senha" required placeholder="Senha"/>
        </div>

        <div class="form-group">
          <label for="dataNascimento">Data de Nascimento:</label>
          <input type="date" id="dataNascimento" required/>
        </div>

        <div class="form-group">
          <input type="text" id="cep" required placeholder="CEP"/>
        </div>

        <div class="form-group">
          <input type="text" id="cpf" required placeholder="CPF"/>
        </div>

        <p class="termos">
          As pessoas que usam nosso serviço podem ter carregado suas informações de contato no Medium. Saiba mais.<br><br>
          Ao clicar em Cadastre-se, você concorda com nossos Termos, Política de Privacidade e Política de Cookies. Você poderá receber notificações por SMS e cancelar isso quando quiser.
        </p>

        <button type="submit">Cadastre-se</button>
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #44626D;
  color: white;
  border: none;
  cursor: pointer;
}
h1 {
text-align: center;
color: white
}

</style>
