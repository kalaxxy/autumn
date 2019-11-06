<template lang="pug">
  .group__form
    .section__subtitle.group__header
      input.group__title(type='text' v-model='category.category')
      groupBtns
    ul.group__list
      li.group__item
        skill(
          v-for="skill in category.skills"
          :key="skill.id"
          :skill="skill"
        )
    .group__adding
      input.group__new-skill(
        type='text' 
        name='new-skill' 
        placeholder='Новый навык'
        v-model="skill.title"
      )
      .error(:class="{'valid-error' : validation.hasError('skill.title')}") {{ this.validation.firstError('skill.title') }}
      input.group__new-skill-percent(
        type='text' 
        name='new-percent' 
        placeholder='100'
        v-model="skill.percent"
      )
      span.group__percent %
      .error(:class="{'valid-error' : validation.hasError('skill.percent')}") {{ this.validation.firstError('skill.percent') }}
      button.group__skill-add.btn__plus.btn__plus--big(type='button' @click='addNewSkill') +
</template>

<script>
import { mapActions } from 'vuex';
import $axios from '../requests';
import { Validator } from 'simple-vue-validator';

export default {
  props: {
    category: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  data() {
    return {
      skill: {
        category: this.category.id,
        title: '',
        percent: ''
      },
    }
  },
  components: {
    skill: () => import('./skill'),
    groupBtns: () => import('./group-btn')
  },
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    'skill.title': function(value) {
      return Validator.value(value).required('Заполните скилл');
    },
    'skill.percent': function(value) {
      return Validator.value(value).greaterThan(0).lessThanOrEqualTo(100).required('Заполните процент');
    },
  },
  methods: {
    ...mapActions("skills", ["addSkill"]),
    async addNewSkill() {
      try {
        this.$validate().then(success => {
          if (success) {
            this.addSkill(this.skill);
            this.skill.title = '';
            this.skill.percent = '';
          } else {
            console.log('Ошибка валидации');
          }
        })
      } catch (error) {
        
      }
    },
  }
}
</script>