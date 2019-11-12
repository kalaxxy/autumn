<template lang="pug">
  section.rewiews
    .section__header
      h2.section__title Блок «Отзывы»
    .section__content
      .section__block.section__block--editing
        .section__subtitle
          h3 Новый отзыв
        form.form.reviews__form(@submit.prevent='addNewReview')
            .form__pic
              .form__upload-photo
                .form__preview(
                  :class="{filled: renderedPhoto.length}"
                  :style="{'backgroundImage' : `url(${renderedPhoto})`}"
                )
                label.form__file--photo Добавить фото
                  input.form__file-input(
                    type='file' 
                    name='review-photo' 
                    @change='appendPhoto'
                  )
            .form__col
              .form__row.form__row--col
                label.form__elem.form__elem--width80
                  span.form__label Имя автора
                  input.form__input(
                    type='text' 
                    name='review-name' 
                    v-model='review.author'
                  )
                label.form__elem.form__elem--width80
                  span.form__label Титул автора
                  input.form__input(
                    type='text' 
                    name='review-position' 
                    v-model='review.occ'
                  )
              label.form__elem
                span.form__label Отзыв
                textarea.form__desc(
                  name='review-text' 
                  v-model='review.text'
                )
              .form__row
                button.form__btn-cancel(type='button') Отмена
                button.button__submit.form__btn(type='submit') Сохранить
      .section-block__add
        button.section-block__new(type='button') 
          span.section-block__plus +
          span.section-block__plus-text Добавить отзыв
      //- .section__block.review
      //-   .section__subtitle.review__header
      //-     .userinfo__avatar
      //-       img.avatar(src='../../images/content/users/photo2.jpg')
      //-     .review__info
      //-       h4.review__name Жанна Сорокина
      //-       h5.review__position Frontend разработчик
      //-   p.review__text Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца.
      //-   .control-btns
      //-       button.control-btn(type='button') 
      //-         span.control-btn__text Править
      //-         span.control-btn__edit
      //-       button.control-btn(type='button')
      //-         span.control-btn__text Удалить
      //-         span.control-btn__del
      //- .section__block.review
      //-   .section__subtitle.review__header
      //-     .userinfo__avatar
      //-       img.avatar(src='../../images/content/users/photo3.jpg')
      //-     .review__info
      //-       h4.review__name Харитон Палий
      //-       h5.review__position Backend разработчик
      //-   .review__text Я так счастлив, мой друг, так упоен ощущением покоя, что искусство мое страдает от этого.
      //-   .control-btns
      //-       button.control-btn(type='button') 
      //-         span.control-btn__text Править
      //-         span.control-btn__edit
      //-       button.control-btn(type='button')
      //-         span.control-btn__text Удалить
      //-         span.control-btn__del  
      review(
        v-for='review in reviews'
        :key='review.id'
        :review='review'
      )
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    review: () => import('./review'),
  },
  data() {
    return {
      review: {
        author: '',
        occ: '',
        photo: '',
        text: ''
      },
      renderedPhoto: '',
    }
  },
  created(){
    this.fetchReviews();
  },
  computed: {
    ...mapState('reviews', {
      reviews: state => state.reviews
    }),
  },
  methods: {
    ...mapActions('reviews', ['fetchReviews', 'addReview', 'editWork']),
    appendPhoto(e) {
      const file = e.target.files[0];
      this.review.photo = file;

      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.renderedPhoto = reader.result;
        }
      } catch (error) {
        
      }
    },
    async addNewReview() {
      try {
        await this.addReview(this.review)
        this.review.author = '',
        this.review.occ = '',
        this.review.photo = '',
        this.review.text = ''
      } catch (error) {
        console.log('Error')
      }
    },
  },
}
</script>

<style lang="postcss">
.form__preview {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  background-color: rgba($darkgrey, 0.1);
  margin-bottom: 24px;

  /* &:after {
    content: '';
    position: absolute;
    width: 85px;
    height: 113px;
    background: svg-load('user.svg', fill=#fff, width=100%, height=100%) center center no-repeat;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  } */

  &.filled {
    background: top center no-repeat / cover;
  }
}
</style>