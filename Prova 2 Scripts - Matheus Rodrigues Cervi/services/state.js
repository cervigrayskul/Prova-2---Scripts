import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/auth/login';

export default {
  async login(user) {
    try {
      const response = await axios.post(API_URL, {
        username: user.username,
        password: user.password,
      });
      
      // Verifique se a resposta contém um token
      if (response.data.token) {
        return response.data.token;  // Retorna o token para ser usado no Vuex
      } else {
        throw new Error('Falha ao autenticar: Nenhum token retornado');
      }
    } catch (error) {
      throw new Error(error.response ? error.response.data.message : error.message);
    }
  },
};
