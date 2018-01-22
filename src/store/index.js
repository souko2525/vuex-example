import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decreasement (state) {
      state.count--
    }
  },
  getters: {
    counter: state => {
      return state.count
    }
  },
  actions: {
    increment ({ commit }) {
      commit('increment')
    },
    decreasement ({ commit }) {
      commit('decreasement')
    }
  }
})
