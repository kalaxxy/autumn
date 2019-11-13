<template lang="pug">
  .group__btns
    button.group__btn.btn__edit(type='button' v-if='!isEditMode' @click="$emit('click-btn', 'edit')")
    button.group__btn.btn__del(type='button' v-if='!isEditMode' @click="$emit('click-btn', 'del')")
    button.group__btn.btn__add(type='submit' v-if='isEditMode' @click="$emit('click-btn', 'add')")
    button.group__btn.btn__cancel(type='button' v-if='isEditMode' @click="$emit('click-btn', 'cancel')")
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
  
  .btn__edit {
    display: inline-block;
    background: svg-load('pencil.svg', fill=rgba($darkgrey, 0.5), width=16px, height=14px) center center no-repeat;
  }

  .btn__del {
    display: inline-block;
    background: svg-load('trash.svg', fill=rgba($darkgrey, 0.5), width=13px, height=15px) center center no-repeat;
  }

  .btn__add {
    display: inline-block;
    background: svg-load('tick.svg', fill=$green, width=15px, height=15px) center center no-repeat;
  }

  .btn__cancel {
    display: inline-block;
    background: svg-load('remove.svg', fill=$red, width=14px, height=12px) center center no-repeat;
  }
</style>