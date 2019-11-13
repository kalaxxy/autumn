<template lang="pug">
  section.rewiews
    .section__header
      h2.section__title Блок «Отзывы»
    .section__content
      .section__block.section__block--editing(v-if='isShown')
        .section__subtitle
          h3 Новый отзыв
        form.form.reviews__form(@submit.prevent='submitForm')
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
                    v-model='editedReview.author'
                  )
                label.form__elem.form__elem--width80
                  span.form__label Титул автора
                  input.form__input(
                    type='text' 
                    name='review-position' 
                    v-model='editedReview.occ'
                  )
              label.form__elem
                span.form__label Отзыв
                textarea.form__desc(
                  name='review-text' 
                  v-model='editedReview.text'
                )
              .form__row
                button.form__btn-cancel(type='reset') Отмена
                button.button__submit.form__btn(type='submit') Сохранить
      .section-block__add
        button.section-block__new(type='button' @click='createForm') 
          span.section-block__plus +
          span.section-block__plus-text Добавить отзыв
      review(
        v-for='review in reviews'
        :key='review.id'
        :review='review'
        @edit-review='editReview'
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
      editedReview: { ...this.review },
      isEdit: false,
      isShown: false
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
    ...mapActions('reviews', ['fetchReviews', 'addReview', 'updateReview']),
    createForm() {
      this.isEdit = false;
      this.isShown = true;
      this.editedReview = {...this.review}
    },
    appendPhoto(e) {
      const file = e.target.files[0];
      this.editedReview.photo = file;

      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.renderedPhoto = reader.result;
        }
      } catch (error) {
        
      }
    },
    editReview(editedItem) {
      this.isEdit = true;
      this.isShown = true;
      this.editedReview = editedItem;
      this.renderedPhoto = "https://webdev-api.loftschool.com/" + editedItem.photo;
      
    },
    submitForm() {
      if (this.isEdit) {
        this.updateReview(this.editedReview),
        this.isShown = false;
      } else {
        this.addReview(this.editedReview),
        this.isShown = false;
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