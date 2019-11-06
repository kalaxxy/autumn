<template lang="pug">
  section.about
    .section__header
      h2.section__title Блок «Обо мне»
      button.about__add 
        span.btn__plus +
        span.btn__title Добавить группу
    .about__content
      .section__block.group
        form.group__form(@submit.prevent='addNewCategory')
          .section__subtitle.group__header
            input.group__title(
              type='text' 
              name='group-title' 
              v-model='title'
              placeholder='Frontend') 
      .section__block.group(v-for="category in categories" :key="category.id")
        skills(
          :category='category'
        )
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    skills: () => import('./skills'),
  },
  data() {
    return {
      title: '',
    }
  },
  created(){
    this.fetchCategories();
  },
  computed: {
    ...mapState('categories', {
      categories: state => state.categories
    })
  },
  methods: {
    ...mapActions('categories', ['addCategory', 'fetchCategories']),
    async addNewCategory() {
      try {
        await this.addCategory(this.title)
      } catch (error) {
        console.log('Error')
      }
    },
  }
}
</script>