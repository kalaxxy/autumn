<template lang="pug">
  header.header
    .container.header__container
      .header__user.userinfo
        .userinfo__avatar
          img.avatar(src='../../images/content/users/me.jpeg')
        .userinfo__name Катерина Иваненко
      .header__block
        h1.header__title Панель администрирования
      .header__login
        button.header__logout(type='button' @click='logout') Выйти
</template>

<script>
import $axios from "@/requests";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("auth", ["exit"]),
    logout() {
      this.exit;
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../../styles/mixins.pcss";

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
    flex-shrink: 0;
  }

  .header__block {
    flex: 1;

    @include phones {
      display: none;
    }
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

    @include phones {
      flex: 0.5;
    }
  }

  .header__logout {
    opacity: 0.7;
    
    &:hover {
      opacity: 1;
    }
  }
</style>