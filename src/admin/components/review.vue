<template lang="pug">
  .section__block.review
    .section__subtitle.review__header
      .userinfo__avatar
        img.avatar(:src='`https://webdev-api.loftschool.com/${review.photo}`')
      .review__info
        h4.review__name {{ review.author }}
        h5.review__position {{ review.occ }}
    p.review__text {{ review.text }}
    .control-btns
        button.control-btn(type='button') 
          span.control-btn__text Править
          span.control-btn__edit
        button.control-btn(type='button')
          span.control-btn__text Удалить
          span.control-btn__del
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
      default: () => ({}),
      required: true
    },
  },
}
</script>