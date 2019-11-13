<template lang="pug">
  .auth
    .auth__content
      .auth__title Авторизация
      form.auth__form(@submit.prevent="login")
        label.auth__elem 
          span.auth__label Логин
          input.auth__input.auth__input--login(
            type='text' 
            name='name' 
            v-model="auth.name"
            :class="{'valid-error' : validation.hasError('auth.name')}"
            )
          .error(:class="{'valid-error' : validation.hasError('auth.name')}") {{ this.validation.firstError('auth.name') }}
        label.auth__elem
          span.auth__label Пароль
          input.auth__input.auth__input--pass(
            type='password' 
            name='password' 
            v-model="auth.password"
            :class="{'valid-error' : validation.hasError('auth.password')}"
            )
          .error(:class="{'valid-error' : validation.hasError('auth.password')}") {{ this.validation.firstError('auth.password') }}
        label.auth__switch
          input.auth__human(
            type='checkbox' 
            name='human' 
            v-model="auth.human" 
          )
          span.auth__checkbox-custom
          span.auth__switch-title Я человек
        fieldset.auth__switch.auth__switch--field
          legend.auth__legend Вы точно не робот?
          label.auth__radio
            input.auth__bot(
              type='radio' 
              name='bot' 
              value='yes'
              v-model="auth.bot"
            )
            span.auth__radio-custom
            span.auth__switch-title Да
          label.auth__radio
            input.auth__bot(
              type='radio' 
              name='bot' 
              value='no' 
              checked
              v-model="auth.bot"
            )
            span.auth__radio-custom
            span.auth__switch-title Не уверен
        appButton.auth__submit(buttonSend='Отправить')
      
</template>

<script>
  import { Validator } from 'simple-vue-validator';
  import $axios from "@/requests";
  import appButton from './button.vue'

  export default {
    components: {
      appButton,
    },
    data() {
      return {
        auth: {
          name: '',
          password: '',
          human: false,
          bot: ''
        },
      }
    },
    mixins: [require('simple-vue-validator').mixin],
    validators: {
      'auth.name': function(value) {
        return Validator.value(value).required('Заполните логин');
      },
      'auth.password': function(value) {
        return Validator.value(value).required('Заполните пароль');
      },
    },
    methods: {
      login() {
        this.$validate().then(success => {
          if (success) {
            const { data: {token}
            } = $axios.post('/login', this.auth)
            .then(response => {
              localStorage.setItem('token', response.data.token);
              this.auth.name = '';
              this.auth.password = '';
              this.validation.reset();
              this.$router.replace('/');
              console.log(this.auth)
            });
            console.log('Форма отправлена')
          } else {
            console.log('Ошибка валидации');
          }
        })
      },
    }
  }
</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../../styles/mixins.pcss";

  .auth {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(black, .3);
  }

  .auth__content {
    padding: 60px 77px;
    width: 40%;
    background-color: #fff;

    @include tablets {
      width: 100%;
    }

    @include phones {
      padding: 3%;
    }
  }

  .auth__title {
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
}

  .auth__elem {
    position: relateve;
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

  
</style>