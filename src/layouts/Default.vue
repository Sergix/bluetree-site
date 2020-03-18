<template>
  <div class="layout flex flex-col h-screen">
    <Navbar class="flex-0" />
    <div class="flex-1 px-8 mt-4">
      <slot />
    </div>
    <Footer class="flex-0" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
    Footer,
  },
}
</script>
