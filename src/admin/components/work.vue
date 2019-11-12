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
      a.work__link(href='https://loftschool.com') {{ work.link }}
    .control-btns 
      button.control-btn(type='button' @click='editWork')
        span.control-btn__text Править
        span.control-btn__edit
      button.control-btn(type='button' @click='deleteWork')
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
    isEditMode: {
      type: Boolean,
      default: false
    }
  },
  components: {
    controlBtns: () => import('./control-btns.vue')
  },
  computed: {
    tagsArray() {
      return this.work.techs.split(',')
    }
  },
  methods: {
    ...mapActions('works', ['deleteWork']),
    editWork(editedWork) {
      this.isEditMode = true;
      console.log(this.editedWork);
      this.editedWork.title = this.work.title;
    }
  }
}
</script>

<style lang="postcss">
.control-btns {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
}

.control-btn__text {
  opacity: 0.5;
  font-weight: 600;
  margin-right: 8px;
}

.control-btn__edit {
  display: inline-block;
  width: 17px;
  height: 17px;
  background: svg-load('pencil.svg', fill=#383bcf, width=100%, height=100%) center right no-repeat;
}

.control-btn__del {
  display: inline-block;
  width: 15px;
  height: 15px;
  background: svg-load('remove.svg', fill=#c92e2e, width=100%, height=100%) center right no-repeat;
}
</style>