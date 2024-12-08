import { handleError } from '../../errorHandler.js';
import auth from '../../services/state.js';  // Importando o arquivo onde está a função login

const state = {
  token: localStorage.getItem('token') || '', // Usa o token armazenado, se existir
  status: '',
};

const getters = {
  isAuthenticated: (state) => !!state.token, // Verifica se o token está presente
  authStatus: (state) => state.status,
};

const actions = {
  async login({ commit }, user) {
    try {
      console.log('Tentando fazer login com:', user);
      const token = await auth.login(user); // Chama a função de login no state.js

      // Verifica se o login foi bem-sucedido
      if (token) {
        localStorage.setItem('token', token); // Armazena o token no localStorage
        commit('authSuccess', token); // Atualiza o estado com o token
        return token; // Retorna o token para o componente
      } else {
        throw new Error('Falha ao autenticar: Nenhum token retornado');
      }
    } catch (error) {
      console.error('Erro na ação de login:', error);
      handleError(error); // Chama a função de tratamento de erro
      throw error; // Propaga o erro para o componente
    }
  },
  logout({ commit }) {
    localStorage.removeItem('token');
    commit('authLogout');
  },
};

const mutations = {
  authSuccess: (state, token) => {
    state.status = 'success';
    state.token = token;
  },
  authLogout: (state) => {
    state.status = '';
    state.token = '';
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
