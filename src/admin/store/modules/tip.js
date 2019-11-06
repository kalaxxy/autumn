export default {
  namespaced: true,
  state: {
    text: '',
    isError: false,
    isShown: false
  },
  mutations: {
    SHOW_ERROR: (state, text) => {
      state.text = text,
      state.isError = true,
      state.isShown = true
    },
    SHOW_SUCCESS: (state, text) => {
      state.text = text,
      state.isError = false,
      state.isShown = true
    },
    HIDE_TIP: (state, text) => {
      state.text = '',
      state.isError = false,
      state.isShown = false
    }
  },
  actions: {
    showError: ({ commit, dispatch }, text) => {
      commit('SHOW_ERROR', text)
      setTimeout(() => {
        dispatch('hideTip')
      }, 3000)
    },
    showSuccess: ({ commit, dispatch }, text) => {
      commit('SHOW_SUCCESS', text)
      setTimeout(() => {
        dispatch('hideTip')
      }, 3000)
    },
    hideTip: ({commit}) => {
      commit('HIDE_TIP')
    }
  }
}