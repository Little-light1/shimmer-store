import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    userInfo: null,
    showCart: false,
    cartList: []
  },
  mutations: {
    SHOWCART(state, { showCart }) {
      state.showCart = showCart;
    },
  },
  actions: {
  },
  modules: {
  }
})
