import createPersistedState from 'vuex-persistedstate'; //Used for the user to login automatically
import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './authentication';
import projects from './projects';
import tasks from './tasks';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    baseUrl: '/api'
  },
  modules: {
    authentication,
    projects,
    tasks
  },
  mutations: {

  },
  actions: {

  },
  //Used for the user to login automatically
  plugins: [
    createPersistedState()
  ]
});
