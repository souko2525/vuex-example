import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
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
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
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
