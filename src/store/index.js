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
    ],
    snackbar: {
      show: false,
      text: ''
    }
  },
  // To immediately change data in the state (can't use async code)
  mutations: {
    // Always pass in the state as the 1st parameter. The 2nd parameter is the payload.
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false
      }
      state.tasks.push(newTask)
    },
    doneTask(state, id) {
      let task = state.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    showSnackbar(state, text) {
      let timeout = 0
      if (state.snackbar.show) {
        state.snackbar.show = false
        timeout = 300
      }
      setTimeout(() => {
        state.snackbar.show = true
        state.snackbar.text = text
      }, timeout)
    },
    hideSnackbar(state) {
      state.snackbar.show = false
    }
  },
  // To make API calls (can be async)
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle)
      commit('showSnackbar', 'Task added!')
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id)
      commit('showSnackbar', 'Task deleted!')
    }
  },
  // To get data from the state (and make small changes to it i.e. filter)
  getters: {

  },
  // To break the store up into multiple states/mutations/actions/getters
  modules: {
  }
})
