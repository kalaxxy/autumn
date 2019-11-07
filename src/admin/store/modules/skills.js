export default {
  namespaced: true,
  actions: {
    async addSkill({ commit, dispatch }, skill) {
      try {
        const { data } = await this.$axios.post("/skills", skill);
        commit("categories/ADD_SKILL", data, { root: true });
        dispatch('tip/showSuccess', 'Скилл добавлен', { root: true })
      } catch (error) {
        dispatch('tip/showError', 'Скилл не добавлен. Ошибка', { root: true })
      }
    },
    async deleteSkill({ commit, dispatch }, skill) {
      try {
        await this.$axios.delete(`/skills/${skill.id}`);
        commit("categories/DELETE_SKILL", skill, { root: true });
        dispatch('tip/showSuccess', 'Скилл удален', { root: true })
      } catch (error) {
        dispatch('tip/showError', 'Скилл не удален. Ошибка', { root: true })
      }
    },
    async editSkill({ commit, dispatch }, editedSkill) {
      try {
        const { data } = await this.$axios.post(
          `/skills/${editedSkill.id}`,
          editedSkill
        );
        commit("categories/EDIT_SKILL", data, { root: true });
        dispatch('tip/showSuccess', 'Скилл сохранен', { root: true })
      } catch (error) {
        dispatch('tip/showError', 'Скилл не сохранен. Ошибка', { root: true })
      }
    },
    
    // async addReview(store, review) {
    //   const formData = new FormData();

    //   Object.keys(review).forEach(key => {
    //     formData.append(key, review[key]);
    //   })

    //   await this.$axios.post('/reviews', formData); 
      
    // }
  }
};
