<template>
  <!-- rounded app bar: "border-0 rounded-full m-2 shadow-md" -->
  <header class="flex flex-row px-8 bg-primary-darker z-10">
    <h2 class="flex flex-0 text-white items-center">Bluetree Landscaping</h2>
    <nav class="flex-1 pl-12 py-4 ml-auto hidden md:inline nav">
      <g-link class="nav-item" to="/">Home</g-link>
      <g-link class="nav-item" to="/contact/">Contact</g-link>
      <g-link class="nav-item" to="/about/">Services</g-link>
    </nav>
    <MenuButton
      class="self-end align-end menu-button z-10"
      @click.native="toggleNavMenu"
      :active="navMenu"
    />
    <slide-x-right-transition>
      <NavMenu class="" v-show="navMenu" />
    </slide-x-right-transition>
  </header>
</template>

<script>
import { SlideXRightTransition } from 'vue2-transitions'
import MenuButton from '@/components/MenuButton'
import NavMenu from '@/components/NavMenu'

export default {
  name: 'Navbar',
  components: {
    SlideXRightTransition,
    MenuButton,
    NavMenu,
  },
  data() {
    return {
      navMenu: false,
    }
  },
  methods: {
    toggleNavMenu() {
      this.navMenu = !this.navMenu
    },
    closeMenu() {
      this.navMenu = false
    },
  },
  watch: {
    $route: 'closeMenu',
  },
}
</script>

<style lang="scss" scoped>
.nav-item {
  @apply px-4;
  @apply text-white;
  @apply text-sm;
}

.menu-button {
  margin-left: auto;
}
</style>
