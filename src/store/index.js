import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        id: 0,
        history: [],
      },
    mutations: {
        // history 추가하는 뮤테이션
        addHistory(state, payload) {
          state.history.push(payload);
        },
        // id 증가시키는 뮤테이션
        incrementId(state) {
          state.id++;
        },
    },
    getters: {
        getHistory: state => state.history,
      },
})