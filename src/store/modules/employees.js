import { HTTP } from '../../http-common';

// initial state
const state = () => ({
  all: [],
});

const getters = {
  allEmployees: state => state.all,
}

const actions = {
  async fetchEmployees({ commit }) {
    const response = await HTTP.$get('/api/employees');
    commit('setEmployees', response.data);
  }
}

const mutations = {
  setEmployees: (state, employees) => (state.all = employees),
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}