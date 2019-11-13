<template lang="pug">
  nav.menu
    ul.menu__list
      - var menu = [{title: 'Обо мне', link: '/'}, {title: 'Работы', link: '/works'}, {title: 'Отзывы', link: '/reviews'}]
        each item in menu
          li.menu__item
            router-link.menu__link(data-text=`${item.title}` to=`${item.link}`) 
</template>

<script>
export default {
  
}
</script>

<style lang="postcss">
.menu__list {
  display: flex;
}

.menu__item {
  margin-top: 30px;
}

.menu__link {
  padding: 30px;

  &:hover {
    color: $orange;
  }
}

.router-link-exact-active {
  border-bottom: 3px solid $orange;
  color: $orange;
}

.menu__link:before {
  content: attr(data-text);
}
</style>