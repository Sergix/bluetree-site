<template>
  <button
    class="hamburger hamburger--collapse"
    v-bind:class="{ 'is-active': isActive }"
    type="button"
    @click="isActive = !isActive"
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
  components: {},
  data() {
    return {
      isActive: false,
    }
  },
}
</script>
