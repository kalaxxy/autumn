<template lang="pug">
  .tip(:class='tipClass')
    .tip__text {{ text }}
    button.tip__close(type='button' @click='hideTip')
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState('tip', {
      isError: state => state.isError,
      isShown: state => state.isShown,
      text: state => state.text
    }),
    tipClass() {
      return {
        'tip--success': !this.isError,
        'tip--error': this.isError,
        'tip--hidden': !this.isShown
      }
    }
  },
  methods:{
    ...mapActions('tip', ['hideTip'])
  }
}
</script>

<style lang="postcss">
  .tip {
    display: flex;
    justify-content: space-between;
    width: 30%;
    color: #fff;
    padding: 20px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    &--success {
      background-color: forestgreen;
    }

    &--error {
      background-color: firebrick;
    }

    &--hidden {
      visibility: hidden;
    }
  }

  .tip__close {
    width: 15px;
    height: 15px;
    background: svg-load('remove.svg', fill=#fff, width=14px, height=12px) center center no-repeat;
  }
 
</style>