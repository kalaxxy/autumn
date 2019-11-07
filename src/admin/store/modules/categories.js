export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    ADD_CATEGORY(state, category) {
      state.categories.unshift(category);
    },
    EDIT_CATEGORY(state, editedCategory) {
      state.categories = state.categories.map(category => {
        if (category.id === editedCategory.category) {
          category.category = category.category.filter(
            category.id === editedCategory.id ? editedCategory : category
          )
        }
        return category;
      })
    },
    ADD_SKILL(state, newSkill) {
      state.categories = state.categories.map(category => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill);
        }
        return category;
      });
    },
    DELETE_SKILL(state, deletedSkill) {
      state.categories = state.categories.map(category => {
        if (category.id === deletedSkill.category) {
          category.skills = category.skills.filter(
            skill => skill.id !== deletedSkill.id
          )
        }
        return category;
      })
    },
    EDIT_SKILL(state, editedSkill) {
      state.categories = state.categories.map(category => {
        if (category.id === editedSkill.category) {
          category.skills = category.skills.filter(
            skill.id === editedSkill.id ? editedSkill : skill
          )
        }
        return category;
      })
    }
  },
  actions: {
    async addCategory({ commit }, title) {
      try {
        const { data } = await this.$axios.post('/categories', { title });
        commit("ADD_CATEGORY", data);
      } catch (error) {
        throw new Error(error.response.data.error || error.response.data.message)
      }
    },
    async fetchCategories({ commit }) {
      try {
        const { data } = await this.$axios.get('/categories/189');
        commit('SET_CATEGORIES', data);
      } catch (error) {
        
      }
    },
    async editCategory({ commit }, editedCategory) {
      try {
        const { data } = await this.$axios.post(
          `/categories/${editedCategory.id}`,
          editedCategory
        );
        commit("categories/EDIT_CATEGORY", data, { root: true });
      } catch (error) {
      }
    },
  }
}