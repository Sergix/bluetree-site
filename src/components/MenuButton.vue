<template>
  <button
    class="hamburger hamburger--collapse"
    v-bind:class="{ 'is-active': active }"
    type="button"
    role="navigation"
    label="Open menu"
    tabindex="0"
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
}
</script>
