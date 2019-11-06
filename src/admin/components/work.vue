<template lang="pug">
  .work
    .work__pic
      img.work__img(src='../../images/content/preview-1.jpg')
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
  
</template>

<script>

</script>