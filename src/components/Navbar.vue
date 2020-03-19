<template>
  <!-- rounded app bar: "border-0 rounded-full m-2 shadow-md" -->
  <header class="flex flex-row pl-8 pr-4 py-2 bg-primary-darker z-10">
    <h2 class="flex flex-0 text-white items-center text-base font-normal">
      Bluetree Landscaping
    </h2>
    <NavItems class="flex-1 pl-12 py-4 ml-auto hidden md:inline nav" />
    <MenuButton
      class="self-end align-end menu-button z-10 md:invisible"
      @click.native="toggleNavMenu"
      :active="navMenu"
    />
    <slide-x-right-transition>
      <NavMenu v-show="navMenu" />
    </slide-x-right-transition>
  </header>
</template>

<script>
import { SlideXRightTransition } from 'vue2-transitions'
import MenuButton from '@/components/MenuButton'
import NavMenu from '@/components/NavMenu'
import NavItems from '@/components/NavItems'

export default {
  name: 'Navbar',
  components: {
    SlideXRightTransition,
    MenuButton,
    NavMenu,
    NavItems,
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
  margin-top: 5px;
}
</style>
