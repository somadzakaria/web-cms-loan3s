import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Forgotpassword from "../src/services/forgotpassword.service"
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: null,
    menu:[],
  },
  mutations: {
    SET_USER_DATA(state,userData) {
      console.log(userData);
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("id", JSON.stringify(userData.data.user.id));
      axios.defaults.headers.common["Authorization"] = "Bearer ${userData.token}";
      userData.token;
    },
    CLEAR_USER_DATA() {
      localStorage.removeItem("user");
      location.reload();
    },
    SET_PROFILE(state){
      state.user = JSON.parse(localStorage.getItem("user"));
    },
    SET_MENU(state,menu){
      state.menu = menu;
    },
    otpSuccess(state,user) {
      state.status.loggedIn = false;
      state.user = user;
    },
     otpFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
   },
  },
  actions: {
    login({ commit }, credentials) {
      return axios.post(`${process.env.VUE_APP_URL}api/v1/cms/login`, credentials).then(({ data }) => {
        commit("SET_USER_DATA", data);
      });
    },
    logout({ commit }) {
      commit("CLEAR_USER_DATA");
    },
    otp({commit},account){
      return Forgotpassword.getOtp(account).then(
        response =>{
          commit('otpSuccces',response.data);
          return Promise.resolve(response.data);
        },
      ).catch(function(error){
        commit('otpFailure');
        return Promise.reject(error);
      })
    },
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    },
    getusers(state){
      return state.user;
    },
    getmenu(state){
      return state.menu;
    }
  },
});
