export default {
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    RESET_USER: (state) => {
      state.user = {};
    }
  },
  getters: {
    userIsLogged: state => {
      const userObj = state.user;
      const userObjIsEmpty = 
        Object.keys(userObj).length === 0 && userObj.constructor;
      return userObjIsEmpty === false;
    }
  },
  actions: {
    exit({ commit }) {
    commit("RESET_USER");
    localStorage.clear();
    }
  }  
}