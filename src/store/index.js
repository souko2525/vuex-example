import Vue from 'vue'
import Vuex from 'vuex'
import { ItemsAPI } from '../api/async_api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ],
    items: []
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decreasement (state) {
      state.count--
    },
    setItems (state, items) {
      state.items = items
    }
  },
  getters: {
    counter: state => {
      return state.count
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    },
    items: state => {
      return state.items
    }
  },
  actions: {
    increment ({ commit }) {
      commit('increment')
    },
    decreasement ({ commit }) {
      commit('decreasement')
    },
    getItems ({ commit }) {
      ItemsAPI.getAllUnchecked(items => {
        commit('setItems', items)
      })
    }
  }
})
