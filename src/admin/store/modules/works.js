export default {
  namespaced: true,
  state: {
    works: []
  },
  mutations: {
    SET_WORKS(state, works) {
      state.works = works;
    },
    ADD_WORK(state, work) {
      state.works.unshift(work);
    },
    DELETE_WORK(state, deletedWork) {
      state.works = state.works.filter(
        work => work.id !== deletedWork.id
      )
    },
    UPDATE_WORK(state, editedWork) {
      state.works = state.works.map(work => {
        return work.id === editedWork.id ? editedWork : work
      })
    }
  },
  actions: {
    async fetchWorks({ commit, rootState }) {
      try {
        let userId = rootState.auth.user.id;
        const { data } = await this.$axios.get('/works/' + userId);
        commit('SET_WORKS', data.reverse());
      } catch (error) {
        
      }
    },
    async addWork({ commit }, work) {
      try {
        const formData = new FormData();

      Object.keys(work).forEach(key => {
        formData.append(key, work[key]);
      })
      const { data } = await this.$axios.post('/works', formData);
      commit('ADD_WORK', data);
      } catch (error) {
        
      }
    },
    async deleteWork({ commit }, work) {
      try {
        await this.$axios.delete(`/works/${work.id}`);
        commit('DELETE_WORK', work);
      } catch (error) {
      
      }
    },
    async updateWork({ commit }, editedWork) {
      try {
        const { data } = await this.$axios.post(
          `/works/${editedWork.id}`,
          editedWork
        );        
        commit("UPDATE_WORK", data.work);        
      } catch (error) {

      }       
    },  
  }
}