<template lang="pug">
  section.works
    .section__header
      h2.section__title Блок «Работы»
    .section__content
      .section__block.section__block--editing
        .section__subtitle
          h3 Редактирование работы
        .works__form
          form.form.form--column(@submit.prevent='addNewWork')
            .form__col
              .form__upload
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
                  v-model='work.title'
                )
              label.form__elem
                span.form__label Ссылка
                input.form__input(
                  type='text' 
                  name='works-link' 
                  v-model='work.link'
                )
              label.form__elem
                span.form__label Описание
                textarea.form__desc(
                  name='works-desc'
                  v-model='work.description'
                )
              label.form__elem
                span.form__label Добавление тэга
                input.form__input(
                  type='text' 
                  name='works-tags'
                  v-model='work.techs'
                )
              ul.tags.form__tags
                li.tags__item
                  span.tags__title HTML
                  button.tags__icon(type='button')
              .form__row.form__row--center
                button.form__btn-cancel(type='button') Отмена
                button.form__btn.button__submit(type='submit') Сохранить
      .section-block__add
        button.section-block__new(type='button') 
          span.section-block__plus +
          span.section-block__plus-text Добавить работу
      .section__block(v-for='work in works' :key='work.id')
        work(:work='works')
      //- .section__block.work
      //-   .work__pic
      //-     img.work__img(src='../../images/content/preview-2.jpg')
      //-     ul.tags.work__tags
      //-       li.tags__item
      //-         span.tags__title HTML
      //-       li.tags__item
      //-         span.tags__title CSS
      //-   .work__desc
      //-     h4.work__title Сайт коворкинга
      //-     p.work__text Ах! Как бы выразить, как бы вдохнуть в рисунок то, что так полно, так трепетно живет во мне, запечатлеть отражение моей души, как душа моя - отражение предвечного бога!
      //-     a.work__link(href='https://kalaxxy.github.io/workadium/' target='_blank') https://kalaxxy.github.io/workadium/
      //-   .control-btns
      //-     button.control-btn(type='button') 
      //-       span.control-btn__text Править
      //-       span.control-btn__edit
      //-     button.control-btn(type='button')
      //-       span.control-btn__text Удалить
      //-       span.control-btn__del
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
      renderedPhoto: ''
    }
  },
  created(){
    this.fetchWorks();
  },
  computed: {
    ...mapState('works', {
      works: state => state.works
    })
  },
  methods: {
    ...mapActions('works', ['fetchWorks', 'addWork']),
    appendPhoto(e) {
      const file = e.target.files[0];
      this.work.photo = file;

      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.renderedPhoto = reader.result;
        }
      } catch (error) {
        
      }
    },
    async addNewWork() {
      try {
        await this.addWork(this.work)
      } catch (error) {
        console.log('Error')
      }
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