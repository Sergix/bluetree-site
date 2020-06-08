<template>
  <!-- rounded app bar: "border-0 rounded-full m-2 shadow-md" -->
  <header
    class="flex flex-row items-center pl-8 pr-4 py-2 bg-white z-10 lg:px-32"
  >
    <g-link to="/" class="max-w-sm w-3/4 my-4 md:px-4">
      <g-image src="@/assets/logo/Bluetree Logo Inline.svg" />
    </g-link>
    <NavItems
      class="navlist flex-1 pl-24 py-4 ml-auto my-auto hidden md:inline nav"
    />
    <MenuButton
      class="menu-button z-10 md:invisible"
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
      // no ssr
      if (process.isClient) {
        const el = document.body
        const className = 'overflow-hidden'
        this.navMenuActive
          ? el.classList.add(className)
          : el.classList.remove(className)
      }
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
  watch: {
    $route: 'closeMenu',
  },
}
</script>

<style lang="scss" scoped>
::v-deep .navlist > .nav-item {
  @apply mr-16;
  @apply pb-1;
  @apply text-lg;

  &.active--exact {
    @apply border-b-2;
    @apply border-primary;
  }
}

.menu-button {
  margin-left: auto;
  margin-top: 0.25em;
}
</style>
