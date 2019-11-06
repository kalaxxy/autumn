<template lang="pug">
  .skill(:class='disabledClass')
    input.skill__name(
      type='text'
      v-model='editedSkill.title'
    )
    .error(:class="{'valid-error' : validation.hasError('editedSkill.title')}") {{ this.validation.firstError('editedSkill.title') }}
    .skill__range
      input.skill__num(
      type='number'
      max='100'
      v-model='editedSkill.percent'
    )
      span.skill__percent %
      .error(:class="{'valid-error' : validation.hasError('editedSkill.percent')}") {{ this.validation.firstError('editedSkill.percent') }}
    groupBtns(@click-btn='clickEvent' :is-edit-mode='this.isEditMode')
</template>

<script>
import { mapActions } from 'vuex';
import { Validator } from 'simple-vue-validator';

export default {
  props: {
    skill: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  components: {
    groupBtns: () => import('./group-btn')
  },
  data() {
    return {
      editedSkill: {...this.skill},
      isEditMode: false
    }
  },
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    'editedSkill.title': function(value) {
      return Validator.value(value).required('Заполните скилл');
    },
    'editedSkill.percent': function(value) {
      return Validator.value(value).greaterThan(0).lessThanOrEqualTo(100).required('Заполните процент');
    },
  },
  computed: {
    disabledClass() {
      return {
        'disabled': !this.isEditMode
      }
    }
  },
  methods: {
    ...mapActions('skills', ['editSkill', 'deleteSkill']),
    async clickEvent(mod) {
      if (mod === 'edit') {
        this.isEditMode = true;
      } else if (mod === 'add') {
        this.$validate().then(success => {
          if (success) {
            this.editSkill(this.editedSkill);
            this.isEditMode = false
          } else {
            console.log('Ошибка валидации');
          }
        })
      } else if (mod === 'del') {
        this.deleteSkill({
          id: this.skill.id,
          category: this.skill.category
        })
      } else if (mod === 'cancel') {
        this.isEditMode = false;
        this.editedSkill.title = this.skill.title
        this.editedSkill.percent = this.skill.percent
      }
    }
  }
}
</script>