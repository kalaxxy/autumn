<template lang="pug">
  section.works
    .section__header
      h2.section__title Блок «Работы»
    .section__content
      .section__block.section__block--editing(v-if='isShown')
        .section__subtitle
          h3 Редактирование работы
        .works__form
          form.form.form--column(@submit.prevent='submitForm' )
            .form__col
              .form__upload(
                :class="{filled: renderedPhoto.length}"
                :style="{'backgroundImage' : `url(${renderedPhoto})`}"
              )
                span.form__dnd Перетащите или нажмите кнопку для загрузки изображения
                label.form__file.form__btn.button__submit Загрузить
                  input.form__file-input(
                    type='file'
                    @change='appendPhoto'
                  )
            .form__col
              label.form__elem
                span.form__label Название
                input.form__input(
                  type='text' 
                  name='works-title'
                  v-model='editedWork.title'
                )
              label.form__elem
                span.form__label Ссылка
                input.form__input(
                  type='text' 
                  name='works-link' 
                  v-model='editedWork.link'
                )
              label.form__elem
                span.form__label Описание
                textarea.form__desc(
                  name='works-desc'
                  v-model='editedWork.description'
                )
              label.form__elem
                span.form__label Добавление тэга
                input.form__input(
                  type='text' 
                  name='works-tags'
                  v-model='editedWork.techs'
                )
              ul.tags.form__tags
                li.tags__item(v-for='tag, index in tagsArray')
                  span.tags__title {{ tag }}
                  button.tags__icon(type='button' @click='deleteTag(index)')
              .form__row.form__row--center
                button.form__btn-cancel(type='reset') Отмена
                button.form__btn.button__submit(type='submit') Сохранить
      .section-block__add
        button.section-block__new(type='button' @click='createForm') 
          span.section-block__plus +
          span.section-block__plus-text Добавить работу
      work(
        v-for='work in works' 
        :key='work.id'
        :work='work'
        @edit-work='editWork'
      )
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    work: () => import('./work'),
  },
  data() {
    return {
      work: {
        title: '',
        techs: '',
        photo: '',
        link: '',
        description: ''
      },
      renderedPhoto: '',
      editedWork: { ...this.work },
      isEdit: false,
      isShown: false
    }
  },
  created(){
    this.fetchWorks();
  },
  computed: {
    ...mapState('works', {
      works: state => state.works
    }),
    tagsArray() {
      return this.editedWork.techs.split(',').filter(el => el.trim())
    }
  },
  methods: {
    ...mapActions('works', ['fetchWorks', 'addWork', 'updateWork']),
    createForm() {
      this.isEdit = false;
      this.isShown = true;
      this.editedWork = {...this.work}
    },
    appendPhoto(e) {
      const file = e.target.files[0];
      this.editedWork.photo = file;

      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.renderedPhoto = reader.result;
        }
      } catch (error) {
        
      }
    },
    editWork(editedItem) {
      this.isEdit = true;
      this.isShown = true;
      this.editedWork = editedItem;
      this.renderedPhoto = "https://webdev-api.loftschool.com/" + editedItem.photo;
    },
    submitForm() {
      if (this.isEdit) {
        console.log(this.isEdit);
        this.updateWork(this.editedWork),
        this.isShown = false;
      } else {
        console.log(this.isEdit);
        this.addWork(this.editedWork),
        this.isShown = false;
      }
    },
    deleteTag(index) {
      let editedTechsArr = this.editedWork.techs.split(',')
      const deletedTag = editedTechsArr.splice(index, 1)
      this.editedWork.techs = editedTechsArr.join(',')
    },
  }
}
</script>

<style lang="postcss">
.button__submit {
  background-image: linear-gradient(to right, #d0731b 0%, #dc9322 100%);
  border-radius: 100px;
  padding: 30px 118px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
  transition: .4;
  
  &:hover {
    background-image: linear-gradient(to right, #ff7f00 0%, #ff9d00 100%);
  }
}

.form__btn-cancel {
    margin-right: 59px;
    color: $orange;
    font-weight: 600;
  }

  .form__btn {
    padding: 22px 45px;
  }

</style>