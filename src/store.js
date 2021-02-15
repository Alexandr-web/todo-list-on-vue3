import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: []
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    }
  },
  actions: {
    removeTasks(ctx, id) {
      ctx.commit('removeTasks', id);
    },
    doneTasks(ctx, id) {
      ctx.commit('doneTasks', id);
    },
    addTasks(ctx, task) {
      ctx.commit('addTasks', task);
    }
  },
  mutations: {
    removeTasks(state, id) {
      state.tasks = state.tasks.filter(item => item.id !== id);
    },
    doneTasks(state, id) {
      state.tasks.find(item => item.id === id).status = !state.tasks.find(item => item.id === id).status;
    },
    addTasks(state, task) {
      state.tasks.push(task);
    }
  }
});