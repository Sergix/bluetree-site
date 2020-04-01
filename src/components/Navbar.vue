<template>
  <!-- rounded app bar: "border-0 rounded-full m-2 shadow-md" -->
  <header class="flex flex-row pl-8 pr-4 py-2 bg-primary-lighter z-10 lg:px-32">
    <h2 class="flex flex-0 items-center text-base font-normal">
      Bluetree Landscaping
    </h2>
    <NavItems
      class="navlist flex-1 pl-16 py-4 ml-auto my-auto hidden md:inline nav"
    />
    <MenuButton
      class="self-end align-end menu-button z-10 md:invisible"
      @click.native="toggleNavMenu"
      :active="navMenuActive"
    />
    <slide-x-right-transition>
      <NavMenu v-show="navMenuActive" />
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
      navMenuActive: false,
    }
  },
  methods: {
    toggleBodyOverflow() {
      const el = document.body
      const className = 'overflow-hidden'
      this.navMenuActive
        ? el.classList.add(className)
        : el.classList.remove(className)
    },
    toggleNavMenu() {
      this.navMenuActive = !this.navMenuActive
      this.toggleBodyOverflow()
    },
    closeMenu() {
      this.navMenuActive = false
      this.toggleBodyOverflow()
    },
  },

  // on route change, close menu
  watch: {
    $route: 'closeMenu',
  },
}
</script>

<style lang="scss" scoped>
::v-deep .navlist > .nav-item {
  @apply px-4;
  @apply mr-2;
  @apply text-sm;
}

.menu-button {
  margin-left: auto;
  margin-top: 5px;
}
</style>
