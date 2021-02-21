import { createStore } from 'vuex'

export default createStore({
  state: {
    searchResult: '',
  },
  mutations: {
    change(state, searchResult) {
      state.searchResult = searchResult
    }
  },
  getters: {
    searchResult: state => state.searchResult,
  
  },
  // actions: {
  // },
  // modules: {
  // }
})
