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
    UPDATE_REVIEW(state, editedReview) {
      state.reviews = state.reviews.map(review => {
        return review.id === editedReview.id ? editedReview : review
      })
    },
    DELETE_REVIEW(state, deletedReview) {
      state.reviews = state.reviews.filter(
        review => review.id !== deletedReview.id
      )
    },
  },
  actions: {
    async fetchReviews({ commit, rootState }) {
      try {
        let userId = rootState.auth.user.id;
        const { data } = await this.$axios.get('/reviews/' + userId);
        commit('SET_REVIEWS', data.reverse());
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
    async updateReview({ commit }, editedReview) {
      try {
        const { data } = await this.$axios.post(
          `/reviews/${editedReview.id}`,
          editedReview
        );        
        commit("UPDATE_REVIEW", data.review);        
      } catch (error) {

      }       
    },
    async deleteReview({ commit }, review) {
      try {
        await this.$axios.delete(`/reviews/${review.id}`);
        commit('DELETE_REVIEW', review);
      } catch (error) {
      
      }
    },
  },
}