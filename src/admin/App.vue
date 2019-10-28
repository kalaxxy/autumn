<template lang="pug">
  .maincontent
    header.header
      .container.header__container
        .header__user.userinfo
          .userinfo__avatar
            img.avatar(src='../images/content/users/me.jpeg')
          .userinfo__name Катерина Иваненко
        .header__block
          h1.header__title Панель администрирования
        .header__login
          a.header__logout Выйти

    .auth
      .auth__title Авторизация
      form.auth__form
        label.auth__elem 
          span.auth__label Логин
          input.auth__input.auth__input--login(type='text' name='login')
        label.auth__elem
          span.auth__label Пароль
          input.auth__input.auth__input--pass(type='password' name='pass')
        label.auth__switch
          input.auth__human(type='checkbox' name='human' checked)
          span.auth__checkbox-custom
          span.auth__switch-title Я человек
        fieldset.auth__switch.auth__switch--field
          legend.auth__legend Вы точно не робот?
          label.auth__radio
            input.auth__bot(type='radio' name='bot' value='yes')
            span.auth__radio-custom
            span.auth__switch-title Да
          label.auth__radio
            input.auth__bot(type='radio' name='bot' value='no' checked)
            span.auth__radio-custom
            span.auth__switch-title Не уверен
        button.button__submit.auth__submit(type='submit') Отправить

    main.main
      .container.main.container
        nav.menu
          ul.menu__list
            each item in ['Обо мне', 'Работы', 'Отзывы']
              li.menu__item
                a(class= 'menu__link' href="#") #{item}
        section.about
          .section__header
            h2.section__title Блок «Обо мне»
            button.about__add 
              span.btn__plus +
              span.btn__title Добавить группу
          .about__content
            .section__block.group
              form.group__form
                .section__subtitle.group__header
                  input.group__title(type='text' name='group-title' placeholder='Название новой группы')
                  .group__btns 
                    button.group__btn.btn__add(type='submit')
                    button.group__btn.btn__cancel(type='button')
                ul.group__list
                  li.group__item
                .group__adding
                  input.group__new-skill(type='text' name='new-skill' placeholder='Новый навык')
                  input.group__new-skill-percent(type='text' name='new-percent' placeholder='100')
                  span.group__percent %
                  button.group__skill-add.btn__plus.btn__plus--big(type='submit') +
            .section__block.group
              .section__subtitle.group__header.disabled
                input.group__title(type='text' name='group-title' placeholder='Frontend') 
                .group__btns
                  button.group__btn.btn__edit(type='button')
                  button.group__btn.btn__add(type='submit')
                  button.group__btn.btn__cancel(type='button')
              ul.group__list
                li.group__item.skill.disabled
                  input.skill__name(type='text' name='skill-name' placeholder='HTML5')
                  .skill__range
                    input.skill__num(type='text' name='skill-percent' placeholder='80')
                    span.skill__percent %
                  .group__btns
                    button.group__btn.btn__edit(type='button')
                    button.group__btn.btn__del(type='button')
                    button.group__btn.btn__add(type='submit')
                    button.group__btn.btn__cancel(type='button')
                li.group__item.skill.disabled
                  input.skill__name(type='text' name='skill-name' placeholder='CSS3')
                  .skill__range
                    input.skill__num(type='text' name='skill-percent' placeholder='73')
                    span.skill__percent %
                  .group__btns
                    button.group__btn.btn__edit(type='button')
                    button.group__btn.btn__del(type='button')
                    button.group__btn.btn__add(type='submit')
                    button.group__btn.btn__cancel(type='button')
                li.group__item.skill.disabled
                  input.skill__name(type='text' name='skill-name' placeholder='Javascript')
                  .skill__range
                    input.skill__num(type='text' name='skill-percent' placeholder='15')
                    span.skill__percent %
                  .group__btns
                    button.group__btn.btn__edit(type='button')
                    button.group__btn.btn__del(type='button')
                    button.group__btn.btn__add(type='submit')
                    button.group__btn.btn__cancel(type='button')
                li.group__item.skill
                  input.skill__name(type='text' name='skill-name' placeholder='Jquery и Vue.js')
                  .skill__range
                    input.skill__num(type='text' name='skill-percent' placeholder='10')
                    span.skill__percent %
                  .group__btns
                    button.group__btn.btn__edit(type='button')
                    button.group__btn.btn__del(type='button')
                    button.group__btn.btn__add(type='submit')
                    button.group__btn.btn__cancel(type='button')
              .group__adding
                input.group__new-skill(type='text' name='new-skill' placeholder='Новый навык')
                input.group__new-skill-percent(type='text' name='new-percent' placeholder='100')
                span.group__percent %
                button.group__skill-add.btn__plus.btn__plus--big(type='submit') +
            .section__block.group
              .section__subtitle.group__header.disabled
                input.group__title(type='text' name='group-title' placeholder='Workflow') 
                .group__btns
                  button.group__btn.btn__edit(type='button')
                  button.group__btn.btn__add(type='submit')
                  button.group__btn.btn__cancel(type='button')
              ul.group__list
                li.group__item.skill.disabled
                  input.skill__name(type='text' name='skill-name' placeholder='GIT')
                  .skill__range
                    input.skill__num(type='text' name='skill-percent' placeholder='90')
                    span.skill__percent %
                  .group__btns
                    button.group__btn.btn__edit(type='button')
                    button.group__btn.btn__del(type='button')
                    button.group__btn.btn__add(type='submit')
                    button.group__btn.btn__cancel(type='button')
                li.group__item.skill.disabled
                  input.skill__name(type='text' name='skill-name' placeholder='Terminal')
                  .skill__range
                    input.skill__num(type='text' name='skill-percent' placeholder='73')
                    span.skill__percent %
                  .group__btns
                    button.group__btn.btn__edit(type='button')
                    button.group__btn.btn__del(type='button')
                    button.group__btn.btn__add(type='submit')
                    button.group__btn.btn__cancel(type='button')
                li.group__item.skill.disabled
                  input.skill__name(type='text' name='skill-name' placeholder='Gulp')
                  .skill__range
                    input.skill__num(type='text' name='skill-percent' placeholder='25')
                    span.skill__percent %
                  .group__btns
                    button.group__btn.btn__edit(type='button')
                    button.group__btn.btn__del(type='button')
                    button.group__btn.btn__add(type='submit')
                    button.group__btn.btn__cancel(type='button')
                li.group__item.skill.disabled
                  input.skill__name(type='text' name='skill-name' placeholder='Webpack')
                  .skill__range
                    input.skill__num(type='text' name='skill-percent' placeholder='45')
                    span.skill__percent %
                  .group__btns
                    button.group__btn.btn__edit(type='button')
                    button.group__btn.btn__del(type='button')
                    button.group__btn.btn__add(type='submit')
                    button.group__btn.btn__cancel(type='button')
              .group__adding
                input.group__new-skill(type='text' name='new-skill' placeholder='Новый навык')
                input.group__new-skill-percent(type='text' name='new-percent' placeholder='100')
                span.group__percent %
                button.group__skill-add.btn__plus.btn__plus--big(type='submit') +
        
        section.works
          .section__header
            h2.section__title Блок «Работы»
          .section__content
            .section__block.section__block--editing
              .section__subtitle
                h3 Редактирование работы
              .works__form
                form.form
                  .form__col
                    .form__upload
                      span.form__dnd Перетащите или загрузите для загрузки изображения
                      label.form__file.button__submit.form__btn Загрузить
                        input.form__file-input(type='file')
                  .form__col
                    label.form__elem
                      span.form__label Название
                      input.form__input(type='text' name='works-title')
                    label.form__elem
                      span.form__label Ссылка
                      input.form__input(type='text' name='works-link')
                    label.form__elem
                      span.form__label Описание
                      textarea.form__desc(name='works-desc')
                    label.form__elem
                      span.form__label Добавление тэга
                      input.form__input(type='text' name='works-tags')
                    ul.tags.form__tags
                      li.tags__item
                        span.tags__title HTML
                        button.tags__icon(type='button')
                    .form__row
                      button.form__btn-cancel(type='button') Отмена
                      button.button__submit.form__btn(type='submit') Сохранить
            .section-block__add
              button.section-block__new(type='button') 
                span.section-block__plus +
                span.section-block__plus-text Добавить работу
            .section__block.work
              .work__pic
                img.work__img(src='../images/content/preview-1.jpg')
                ul.tags.work__tags
                  li.tags__item
                    span.tags__title HTML
                  li.tags__item
                    span.tags__title CSS
                  li.tags__item
                    span.tags__title Javascript
              .work__desc
                h4.work__title Сайт школы образования
                p.work__text На портрете была изображена дама в меховой шляпе и боа, она сидела очень прямо и протягивала зрителю тяжелую меховую муфту, в которой целиком исчезала ее рука.
                a.work__link(href='https://loftschool.com') https://loftschool.com
                .control-btns 
                  button.control-btn(type='button') 
                    span.control-btn__text Править
                    span.control-btn__edit
                  button.control-btn(type='button')
                    span.control-btn__text Удалить
                    span.control-btn__del
            .section__block.work
              .work__pic
                img.work__img(src='../images/content/preview-2.jpg')
                ul.tags.work__tags
                  li.tags__item
                    span.tags__title HTML
                  li.tags__item
                    span.tags__title CSS
              .work__desc
                h4.work__title Сайт коворкинга
                p.work__text Ах! Как бы выразить, как бы вдохнуть в рисунок то, что так полно, так трепетно живет во мне, запечатлеть отражение моей души, как душа моя - отражение предвечного бога!
                a.work__link(href='https://kalaxxy.github.io/workadium/' target='_blank') https://kalaxxy.github.io/workadium/
                .control-btns
                  button.control-btn(type='button') 
                    span.control-btn__text Править
                    span.control-btn__edit
                  button.control-btn(type='button')
                    span.control-btn__text Удалить
                    span.control-btn__del
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
                      label.form__file.form__file--photo Добавить фото
                        input.form__file-input(type='file')
                  .form__col
                    .form__row
                      label.form__elem
                        span.form__label Имя автора
                        input.form__input(type='text' name='review-name')
                      label.form__elem
                        span.form__label Титул автора
                        input.form__input(type='text' name='review-position')
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
                  img.avatar(src='../images/content/users/photo2.jpg')
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
                  img.avatar(src='../images/content/users/photo3.jpg')
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

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "normalize.css";
  @import "../styles/mixins.pcss";

  html {
    @include desktop {
      font-size: 15px;
    }
    @include tablets {
      font-size: 14px;
    }
  }
  
  body,
  html {
    height: 100%;
  }

  body {
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $darkgrey;
    scroll-behavior: smooth;
  }

  .wrapper {
  overflow: hidden;
  width: 100%;
  min-height: 100%;
  position: relative;
}

  .container {
    margin: 0 auto;
    max-width: 1480px;
    width: 95%;
    height: 100%;
    // width: 1490px;

    @include tablets {
      width: 90%;
    }

    @include phones {
      width: 85%;
    }
  }

  button {
  border: 0;
  cursor: pointer;
}

  * {
    box-sizing: border-box;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    /* font-weight: normal; */
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
    line-height: 30px;
  }

  button[type="button"] {
    cursor: pointer;
    background-color: transparent;
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea {
    outline: none;
    border: initial;
  }

  .auth {
    padding: 60px 77px;
    width: 40%;
    margin: 0 auto;
  }

  .auth__title {
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
  }

  .auth__elem {
    display: block;
    margin-bottom: 40px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  .auth__label {
    display: block;
    margin-left: 50px;
    opacity: 0.3;
    font-weight: 600;
  }

  .auth__input {
    font-size: 18px;
    font-weight: 700;
    border-bottom: 1px solid $black;
    padding: 20px 50px;
    width: 100%;
  }

  .auth__input--login {
    background: svg-load('user.svg', fill=rgba($black, .3), width=26px, height=30px) left no-repeat;

    &:hover, &:focus {
      background: svg-load('user.svg', fill=$orange, width=26px, height=30px) left no-repeat;
    }
  }

  .auth__input--pass {
    background: svg-load('key.svg', fill=rgba($black, .3), width=26px, height=30px) left no-repeat;

    &:hover, &:focus {
      background: svg-load('key.svg', fill=$orange, width=26px, height=30px) left no-repeat;
    }
  }

  .auth__switch {
    display: block;
    text-align: center;
    margin-bottom: 50px;
    font-weight: 600;

    &--field {
      border: none;
    }
  }

  .auth__radio {
    margin-right: 40px;

    &:last-child {
      margin-right: 0;
    }
  }

  .auth__legend {
    display: block;
    margin-bottom: 25px;
    font-size: 18px;
    font-weight: 600;
  }

  .auth__submit {
    display: block;
    margin: 0 auto;
  }

  .button__submit {
    background-image: linear-gradient(to right, #d0731b 0%, #dc9322 100%);
    border-radius: 100px;
    padding: 30px 118px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    transition: .4s;

    &:hover {
      background-image: linear-gradient(to right, #ff7f00 0%, #ff9d00 100%);
    }
  }

  .auth__human {
    appearance: none;
  }

  .auth__checkbox-custom {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    top: 9Px;
    margin-right: 15px;
    border: 1px solid $darkgrey;

      &:after {
      content: '';
      position: absolute;
      background: svg-load('tick.svg', fill=$orange, width=15px, height=15px) center no-repeat;
      width: 100%;
      height: 100%;
      right: 0;
      top: 0;
      opacity: 0;
    }
  }

  .auth__human:checked + .auth__checkbox-custom:after {
    opacity: 1;
  }

  .auth__bot {
    appearance: none;
  }

  .auth__radio-custom {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    top: 9Px;
    margin-right: 15px;
    border: 1px solid $darkgrey;

    &:after {
      content: '';
      position: absolute;
      background-color: $orange;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }
  }

  .auth__bot:checked + .auth__radio-custom:after {
    opacity: 1;
  }

  .header {
    background-image: linear-gradient(to right, $black 0%, #582b00 100%);
    padding: 20px 0;
    color: #fff;
  }

  .header__container {
    display: flex;
    align-items: center;
  }

  .header__user {
    display: flex;
    align-items: center;
    flex: 1;
    font-size: 18px;
    font-weight: 600;
  }

  .userinfo__avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
  }

  .header__block {
    flex: 1;
  }

  .header__title {
    font-size: 14px;
    opacity: 0.5;
    font-weight: normal;
  }

  .header__login {
    flex: 1.5;
    text-align: right;
    font-size: 16px;
    text-decoration: underline;
  }

  .header__logout {
    opacity: 0.7;
    
    &:hover {
      opacity: 1;
    }
  }

  .main {
    background-image: linear-gradient(to top, #fff 0%, #dddbdb 100%);
  }

  .menu__list {
    display: flex;
  }

  .menu__item {
    padding: 30px;

    &:hover {
      color: $orange;
    }
  }

  .active.menu__item {
    border-bottom: 3px solid $orange;
    color: $orange;
  }

  .section__header {
    padding: 60px 0;
    display: flex;
  }

  .section__title {
    margin-right: 60px;
  }

  .about__add {
    display: flex;
    align-items: center;
    background-color: transparent;
    font-weight: 600;
  }

  .btn__plus {
    display: inline-block;
    width: 20Px;
    height: 20Px;
    background-image: linear-gradient(to right, #d0731b 0%, #dc9322 100%);
    border-radius: 50%;
    color: #fff;
    margin-right: 15px;
  }

  .btn__title {
    color: $orange;
  }

  .about__add:hover .btn__plus {
    background-image: linear-gradient(to right, #ff7f00 0%, #ff9d00 100%);
  }

  .about__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 30px;
  }
  
  .section__block {
    background-color: #fff;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    padding: 0 30px 30px;

    & input {
      border-bottom: 1px solid $black;
    }
  }

  .group__form {
    display: flex;
    flex-direction: column;
  }

  .section__subtitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    border-bottom: 1px solid rgba($black, 0.15);
    font-size: 18px;
    margin-bottom: 22px;

    & h3 {
      font-size: 18px;
      padding: 0 10px;
    }
  }

  .group__title {
    width: 60%;
    padding: 10px 10px 10px 0;
  }

  .group__btns {
    display: flex;
    justify-content: space-between;
    width: 50px;
  }

  .group__btn {
    width: 15px;
    height: 15px;
    display: inline-flex;
    justify-content: space-between;
  }

  .btn__add {
    background: svg-load('tick.svg', fill=$green, width=15px, height=15px) center center no-repeat;
  }

  .btn__cancel {
    background: svg-load('remove.svg', fill=$red, width=14px, height=12px) center center no-repeat;
  }

  .group__adding {
    position: relative;
    display: flex;
    justify-content: flex-end;
  }

  .group__new-skill {
    margin-right: 10px;
    padding: 0 20px;
  }

  .group__new-skill-percent {
    width: 15%;
    margin-right: 30px;
    padding: 0 36px 0 10px;
  }

  .group__percent {
    position: absolute;
    top: 8px;
    right: 85px;
  }
  
  .btn__plus--big {
    width: 40px;
    height: 40px;
    font-size: 30px;
    margin-right: 0;
    flex-shrink: 0;
  }

  .group__list {
    min-height: 230px;
  }

  .group__item {
    margin-bottom: 10px;
  }

  .skill {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & input {
      padding-top: 6px;
      padding-bottom: 6px;
    }
  }

  .skill__name {
    width: 60%;
  }

  .skill__range {
    position: relative;
    max-width: 75px;
  }

  .skill__num {
    width: 100%;
    padding-right: 35px;
    padding-left: 10px;
  }

  .skill__percent {
    position: absolute;
    top: 4px;
    right: 15px;
  }

  .skill.disabled, .group__header.disabled {
    & input {
      border: none;
      pointer-events: none; 
    }
    
    & .btn__edit {
      display: inline-block;
    }

    & .btn__del {
      display: inline-block;
    }

    & .btn__add {
      display: none;
    }

    & .btn__cancel {
      display: none;
    }
  }

  .btn__edit {
    background: svg-load('pencil.svg', fill=rgba($darkgrey, 0.5), width=16px, height=14px) center center no-repeat;
    display: none;
  }

  .btn__del {
    background: svg-load('trash.svg', fill=rgba($darkgrey, 0.5), width=13px, height=15px) center center no-repeat;
    display: none;
  }

  .section__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
  }

  .section__block--editing {
    grid-column: 1 / span 3;
  }

  .form {
    display: flex;
  }

  .form__upload {
    height: 50%;
    background-color: rgba($darkgrey, 0.1);
  }

  .form__col {
    flex: 1;
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }

  .form__file {
    cursor: pointer;
  }

  .form__file-input {
    display: none;
  }

  .form__elem {
    display: block;
    width: 100%;
    margin-bottom: 26px;
  }

  .form__label {
    display: block;
    opacity: 0.5;
    font-weight: 600;
  }

  .form__input {
    width: 100%;
    padding: 15px 0;
  }

  .form__desc {
    resize: none;
    width: 100%;
    min-height: 146px;
    border: 1px solid rgba($darkgrey, 0.3);
    margin-top: 19px;
    padding: 20px 80px 20px 20px;
  }

  .tags {
    display: flex;
  }

  .tags__item {
    background-color: #f4f4f4;;
    padding: 9px 20px;
    border-radius: 100px;
    font-size: 13px;
    font-weight: 600;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }

  .tags__icon {
    width: 11px;
    height: 11px;
    background: svg-load('remove.svg', fill=$darkgrey, width=100%, height=100%) center right no-repeat;
  }

  .form__row {
    display: flex;
    justify-content: flex-end;

    & .form__elem {
      margin-right: 30px;

      &:last-child {
        margin-right: 0;
      }
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

  .section-block__new {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, #d0731b 0%, #dc9322 100%);
    color: #fff;
    
    &:hover {
      background-image: linear-gradient(to right, #ff7f00 0%, #ff9d00 100%);
    }
  }

  .section-block__plus {
    display: block;
    font-size: 72px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid #ffffff;
    font-weight: 300;
    line-height: 2;
    margin: 0 auto 30px;
  }

  .section-block__plus-text {
    font-weight: 700;
  }

  .work {
    padding: 0;
  }

  .work__pic {
    height: 190px;
    overflow: hidden;
    position: relative;
  }

  .work__tags {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }

  .work__desc {
    padding: 40px 30px;
  }

  .work__title {
    font-size: 18px;
    margin-bottom: 22px;
  }

  .work__text {
    font-weight: 600;
    opacity: 0.7;
    width: 90%;
    margin-bottom: 22px;
  }

  .work__link {
    display: block;
    color: $links-color;
    font-weight: 600;
    margin-bottom: 42px;
  }

  .control-btns {
    display: flex;
    justify-content: space-between;
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

  .review__header {
    justify-content: flex-start;
    height: auto;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .review__name {
    font-size: 18px;
    font-weight: 700;
  }

  .review__position {
    opacity: 0.5;
    font-size: 16px;
    font-weight: 600;
  }

  .review__text {
    opacity: 0.7;
    font-weight: 600;
    min-height: 280px;
  }

  .form__pic {
    margin-right: 30px;
  }

  .reviews__form {
    width: 80%;
  }

  .form__preview {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    background-color: rgba($darkgrey, 0.1);
    margin-bottom: 24px;

    &:after {
      content: '';
      position: absolute;
      width: 85px;
      height: 113px;
      background: svg-load('user.svg', fill=#fff, width=100%, height=100%) center center no-repeat;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .form__file--photo {
    margin: 0 auto;
    color: $links-color;
    font-weight: 600;
  }

</style>