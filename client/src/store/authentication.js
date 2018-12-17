import router from '../router';
import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    registerEmail: 'hello',
    registerPassword: 'world',
    registerError: '',
    token: ''
  },
  actions: {
    register({ commit, state }) {
      commit('setRegisterError', null);

      return HTTP().post('/auth/register', {
        email: state.registerEmail,
        password: state.registerPassword,
      })
      .then(({ data }) => {
        console.log("data", data);
        commit('setToken', data.token);
        router.push('/');
      })
      .catch(() => {
        commit('setRegisterError', 'An error has occured trying to create your account');
      })
    }
  },
  getters: {
    isLoggedIn(state) {
      console.log("state", state);
      return !!state.token;
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setRegisterError(state, error) {
      state.registerError = error;
    },
    setRegisterEmail(state, email) {
      state.registerEmail = email;
    },
    setRegisterPassword(state, password) {
      state.registerPassword = password;
    }
  }
};
