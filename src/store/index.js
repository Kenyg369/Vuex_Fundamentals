import { createStore } from "vuex";

export default createStore({
  state: {
    user:"Adam Jahr",
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.event.push(event)
    }
  },
  actions: {},
  modules: {},
});
