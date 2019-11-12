export default {
  namespaced: true,
  state: {
    reviews: []
  },
  mutations: {
    SET_REVIEWS(state, reviews) {
      state.reviews = reviews;
    },
    ADD_REVIEW(state, review) {
      state.reviews.unshift(review);
    },
  },
  actions: {
    async fetchReviews({ commit, rootState }) {
      try {
        let userId = rootState.auth.user.id;
        const { data } = await this.$axios.get('/reviews/' + userId);
        commit('SET_REVIEWS', data);
      } catch (error) {
        
      }
    },
    async addReview({ commit }, review) {
      try {
        const formData = new FormData();

      Object.keys(review).forEach(key => {
        formData.append(key, review[key]);
      })
      const { data } = await this.$axios.post('/reviews', formData);
      commit('ADD_REVIEW', data);
      } catch (error) {
        
      }
    },
  },
}