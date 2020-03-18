<template>
  <button
    class="hamburger hamburger--collapse"
    v-bind:class="{ 'is-active': active }"
    type="button"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
</template>

<script>
import '@/scss/hamburgers/hamburgers.scss'

export default {
  name: 'MenuButton',
  props: ['active'],
  components: {},
}
</script>
