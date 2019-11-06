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