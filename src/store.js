import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common["Authorization"] = "Bearer ${userData.token}";
      userData.token;
    },
  },
  actions: {
    login({ commit }, credentials) {
      return axios.post("https://dev-loan-api.sitama.co.id/api/v1/cms/login", credentials).then(({ data }) => {
        commit("SET_USER_DATA", data);
      });
    },
  },
});
