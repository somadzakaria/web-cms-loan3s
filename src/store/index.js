import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userdata));
      axios.defaults.header.common["Authorization"] = "Bearer ${userData.token}";
      userData.token;
    },
  },
  actions: {
    register({ commit }, credentials) {
      return axios.post("https://dev-loan-api.sitama.co.id/api/v1/cms/daftar", credentials).then(({ data }) => {
        commit("SET_USER_DATA", data);
      });
    },
    login({ commit }, credentials) {
      return axios.post("https://dev-loan-api.sitama.co.id/api/v1/cms/login", credentials).then(({ data }) => {
        commit("SET_USER_DATA", data);
      });
    },
  },
});
