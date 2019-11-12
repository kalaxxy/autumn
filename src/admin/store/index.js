import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import auth from './modules/auth'
import categories from './modules/categories'
import skills from './modules/skills'
import works from './modules/works'
import reviews from './modules/reviews'
import tip from './modules/tip'

export default new Vuex.Store({
  modules: {
    auth,
    categories,
    skills,
    works,
    reviews,
    tip
  }
});