<template>
  <div class="container">
    <h1 class="my-4 text-center">Login</h1>
    <form @submit.prevent="handleLogin" class="w-50 mx-auto">
      <div class="mb-3">
        <input v-model="user.username" class="form-control" placeholder="Username" />
      </div>
      <div class="mb-3">
        <input v-model="user.password" type="password" class="form-control" placeholder="Password" />
      </div>
      <button type="submit" class="btn btn-primary w-100" :disabled="loading">Login</button>
    </form>
    <p v-if="error" class="text-danger mt-3">{{ error }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      loading: false, // Para evitar múltiplos cliques
      error: null, // Armazena a mensagem de erro
    };
  },
  methods: {
    ...mapActions(['login']), // Mapeia a ação de login do Vuex
    async handleLogin() {
      this.loading = true;
      this.error = null; // Reseta a mensagem de erro antes de tentar o login

      try {
        console.log('Iniciando o login...');
        const token = await this.login(this.user); // Chama a ação login do Vuex
        console.log('Resposta da API:', token);

        // Após o login, redireciona para a página de produtos ou a última página acessada
        const redirectTo = this.$route.query.redirect || '/products'; // Redireciona para a página desejada
        this.$router.push(redirectTo);
      } catch (error) {
        console.error('Erro durante o login:', error);
        this.error = 'Ocorreu um erro ao realizar o login. Tente novamente mais tarde.'; // Exibe a mensagem de erro
      } finally {
        this.loading = false;
      }
    }
  },
};
</script>
