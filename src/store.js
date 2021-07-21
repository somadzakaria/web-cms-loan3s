import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Forgotpassword from "../src/services/forgotpassword.service"

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
    CLEAR_USER_DATA() {
      localStorage.removeItem("user");
      location.reload();
    },
    otpSuccess(state, user) {
      state.status.loggedIn = false;
      state.user = user;
    },
     otpFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
   }
  },
  actions: {
    login({ commit }, credentials) {
      return axios.post("https://dev-loan-api.sitama.co.id/api/v1/cms/login", credentials).then(({ data }) => {
        commit("SET_USER_DATA", data);
      });
    },
    logout({ commit }) {
      commit("CLEAR_USER_DATA");
    },
    otp({commit},account){
      return Forgotpassword.getOtp(account).then(
        response =>{
          commit('otpSuccces',response.data.data);
          return Promise.resolve(response.data.data);
        },
      ).catch(function (error){
        commit('otpFailure');
        return Promise.reject(error);
      })
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    },
  },
});
