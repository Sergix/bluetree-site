<template>
  <aside
    class="absolute bg-primary-darker top-0 text-white w-full h-full right-0 pt-16 text-5xl z-0"
  >
    <NavItems class="flex flex-col content-end pr-8 text-right" />
    <p class="text-sm w-full text-center font-serif absolute bottom-0 pb-8">
      {{ $static.metadata.siteName }}
    </p>
  </aside>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import NavItems from '@/components/NavItems'

export default {
  name: 'NavMenu',
  prop: ['active'],
  components: {
    NavItems,
  },
}
</script>
