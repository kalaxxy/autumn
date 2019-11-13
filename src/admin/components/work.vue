<template lang="pug">
  .section__block.work
    .work__pic
      img.work__img(:src='`https://webdev-api.loftschool.com/${work.photo}`')
      ul.tags.work__tags
        li.tags__item(v-for='tag, index in tagsArray')
          span.tags__title {{ tag }}
    .work__desc
      h4.work__title {{ work.title }}
      p.work__text {{ work.description }}
      a.work__link(:href='work.link') {{ work.link }}
    .control-btns 
      button.control-btn(type='button' @click='editWork')
        span.control-btn__text Править
        span.control-btn__edit
      button.control-btn(type='button' @click='deleteThisWork')
        span.control-btn__text Удалить
        span.control-btn__del
  
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      editedWork: { ...this.work },    
    }
  },
  props: {
    work: {
      type: Object,
      default: () => ({}),
      required: true
    },
  },
  computed: {
    tagsArray() {
      return this.work.techs.split(',')
    }
  },
  methods: {
    ...mapActions('works', ['deleteWork']),
    editWork() {
      this.$emit('edit-work', this.editedWork)
    },
    deleteThisWork() {
      this.deleteWork(this.work)
    }
  }
}
</script>

<style lang="postcss">

</style>