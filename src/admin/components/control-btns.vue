<template lang="pug">
  .control-btns 
    button.control-btn(type='button' @click="$emit('click-btn', 'edit')") 
      span.control-btn__text Править
      span.control-btn__edit
    button.control-btn(type='button' @click="$emit('click-btn', 'del')")
      span.control-btn__text Удалить
      span.control-btn__del
</template>

<script>
export default {
  props: {
    isEditMode: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss">
.control-btns {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
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
</style>