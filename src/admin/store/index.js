import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import categories from './modules/categories'
import skills from './modules/skills'
import works from './modules/works'
import tip from './modules/tip'

export default new Vuex.Store({
  modules: {
    categories,
    skills,
    works,
    tip
  }
});