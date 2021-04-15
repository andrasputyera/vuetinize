import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // To store the data and its properties. All compoments can access data directly.
  state: {
    tasks: [
      {
        id: 1,
        title: 'Task 1',
        done: false
      },
      {
        id: 2,
        title: 'Task 2',
        done: false
      },
      {
        id: 3,
        title: 'Task 3',
        done: false
      }
    ]
  },
  // To immediately change data in the state (can't use async code)
  mutations: {
  },
  // To make API calls (can be async)
  actions: {
  },
  // To get data from the state (and make small changes to it i.e. filter)
  getters: {

  },
  // To break the store up into multiple states/mutations/actions/getters
  modules: {
  }
})
