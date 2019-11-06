export default {
  namespaced: true,
  state: {
    works: []
  },
  mutations: {
    SET_WORKS(state, works) {
      state.works = works;
    },
    ADD_WORK(state, works) {
      state.works.unshift(works);
    },
  },
  actions: {
    async fetchWorks({ commit }) {
      try {
        const { data } = await this.$axios.get('/works/189');
        commit('SET_WORKS', data);
      } catch (error) {
        
      }
    },
    async addWork({ commit }, work) {
      try {
        const formData = new FormData();

      Object.keys(work).forEach(key => {
        formData.append(key, work[key]);
      })
      await this.$axios.post('/works', formData);
      commit('ADD_WORK', data);
      } catch (error) {
        
      }
    }
  }
}