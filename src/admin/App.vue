<template lang="pug">
  .maincontent
    appHeader
    main.main
      .container.main.container
        appMenu
        router-view
        tip
</template>

<script>
import $axios from './requests';

import appHeader from './components/header.vue'
import auth from './components/auth.vue'
import appMenu from './components/menu.vue'
import tip from './components/tip.vue'

export default {
  name: 'app',
  components: {
    appHeader,
    appMenu,
    tip
  },
}
</script>

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

    @include tablets {
      width: 90%;
    }

    @include phones {
      width: 100%;
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

  .main {
    background-image: linear-gradient(to top, #fff 0%, #dddbdb 100%);
  }

  .section__header {
    padding: 60px 0;
    display: flex;

    @include phones {
      flex-direction: column;
    }

    @include phones {
      padding: 5%;
    }
  }

  .section__title {
    margin-right: 60px;

    @include phones {
      margin-right: 0;
      margin-bottom: 30px;
    }
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
    line-height: 1.3;

    @include tablets {
      line-height: 1.4;
    }
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
    grid-gap: 30px;

    @include phones {
      grid-template-columns: 1fr;
    }
  }
  
  .section__block {
    background-color: #fff;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    padding: 0 30px 30px;

    & input {
      border-bottom: 1px solid $black;
    }
  }

  .valid-error {
    border-bottom: 1px solid #cd1515;

    &.error {
    position: fixed;
    padding: 20px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #cd1515;
    color: #fff;
    z-index: 50;
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

    @include phones {
      width: 70%;
    }
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

    @include phones {
      width: 45%;
    }
  }

  .skill__range {
    position: relative;
    max-width: 75px;
  }

  .skill__num {
    width: 100%;
    padding-right: 20px;
    padding-left: 10px;
  }

  .skill__percent {
    position: absolute;
    top: 4px;
    right: 5px;
  }

  .skill.disabled, .group__header.disabled {
    & input {
      border: none;
      pointer-events: none; 
    }
  }

  .section__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;

    @include tablets {
      grid-template-columns: 1fr 1fr;
    }

    @include phones {
      grid-template-columns: 1fr;
      grid-gap: 10px;
    }
  }

  .section__block--editing {
    grid-column: 1 / span 3;

    @include tablets {
      grid-column: 1 / span 2;
    }

    @include tablets {
      grid-column: 1 / span 1;
    }
  }

  .form {
    display: flex;
  }

  .form__upload {
    position: relative;
    height: 50%;
    background-color: rgba($darkgrey, 0.1);

    &.filled {
      background: center center no-repeat / cover;

      & .form__dnd {
        display: none;
      }
    }

    @include tablets {
      min-height: 300px;
    }
  }

  .form__dnd {
    position: absolute;
    display: block;
    width: 60%;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }

  .form__col {
    flex: 1;
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }

  .form__file {
    position: absolute;
    cursor: pointer;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
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
    padding-left: 15px;
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

  .form__row--center {
    @include tablets {
      justify-content: center;
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

    @include phones {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 10%;
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

    @include phones {
      width: 50px;
      height: 50px;
      font-size: 24px;
      margin: 0 20px 0 0;
    }
  }

  .section-block__plus-text {
    font-weight: 700;
  }

  .work {
    position: relative;
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

  

  .review {
    position: relative;
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

    @include phones {
      margin: 0 auto 40px;
    }
  }

  .reviews__form {
    width: 80%;

    @include tablets {
      width: 100%;
    }

    @include phones {
      flex-direction: column;
    }
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
    display: block;
    text-align: center;
    color: $links-color;
    font-weight: 600;
    cursor: pointer;
  }

  .form--column {
    @include tablets {
      flex-direction: column;
    }

    & .form__col {
      @include tablets {
        margin-right: 0;
        margin-bottom: 50px;
      }
    }
  }

  .works__form {
    @include tablets {
      padding: 0 10%;
    }
    
    @include phones {
      padding: 0 3%;
    }
  }

  .form__row--col {
    flex-direction: column;
  }

  .form__elem--width80 {
    @include tablets {
      width: 80%;
    }

    @include phones {
      width: 100%;
    }
  }

</style>

