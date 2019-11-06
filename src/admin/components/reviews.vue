<template lang="pug">
  section.rewiews
    .section__header
      h2.section__title Блок «Отзывы»
    .section__content
      .section__block.section__block--editing
        .section__subtitle
          h3 Новый отзыв
        form.form.reviews__form
            .form__pic
              .form__upload-photo
                .form__preview
                label.form__file--photo Добавить фото
                  input.form__file-input(type='file' name='review-photo' required)
            .form__col
              .form__row.form__row--col
                label.form__elem.form__elem--width80
                  span.form__label Имя автора
                  input.form__input(type='text' name='review-name' required)
                label.form__elem.form__elem--width80
                  span.form__label Титул автора
                  input.form__input(type='text' name='review-position' required)
              label.form__elem
                span.form__label Отзыв
                textarea.form__desc(name='review-text')
              .form__row
                button.form__btn-cancel(type='button') Отмена
                button.button__submit.form__btn(type='submit') Сохранить
      .section-block__add
        button.section-block__new(type='button') 
          span.section-block__plus +
          span.section-block__plus-text Добавить отзыв
      .section__block.review
        .section__subtitle.review__header
          .userinfo__avatar
            img.avatar(src='../../images/content/users/photo2.jpg')
          .review__info
            h4.review__name Жанна Сорокина
            h5.review__position Frontend разработчик
        p.review__text Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца.
        .control-btns
            button.control-btn(type='button') 
              span.control-btn__text Править
              span.control-btn__edit
            button.control-btn(type='button')
              span.control-btn__text Удалить
              span.control-btn__del
      .section__block.review
        .section__subtitle.review__header
          .userinfo__avatar
            img.avatar(src='../../images/content/users/photo3.jpg')
          .review__info
            h4.review__name Харитон Палий
            h5.review__position Backend разработчик
        .review__text Я так счастлив, мой друг, так упоен ощущением покоя, что искусство мое страдает от этого.
        .control-btns
            button.control-btn(type='button') 
              span.control-btn__text Править
              span.control-btn__edit
            button.control-btn(type='button')
              span.control-btn__text Удалить
              span.control-btn__del  
</template>